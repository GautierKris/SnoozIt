<?php

namespace Snoozit\PlatformBundle\Handler;


use Doctrine\ORM\EntityManager;
use FOS\UserBundle\Model\UserInterface;
use Snoozit\PlatformBundle\Entity\Advert;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Router;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class AdvertHandler
{
    private $form;
    private $requestStack;
    private $entityManager;
    private $tokenStorage;

    public function __construct(Form $form, RequestStack $requestStack, EntityManager $entityManager, TokenStorage $tokenStorage)
    {
        $this->form = $form;
        $this->requestStack = $requestStack;
        $this->entityManager = $entityManager;
        $this->tokenStorage = $tokenStorage;

        $user = $this->getUser();

        if($this->isUpdate()){
            $this->form->setData($this->requestStack->getCurrentRequest()->get('advert'));
            $this->form->remove('guest');
        }
        else if(is_object($user) || $user instanceof UserInterface){
            $this->injectData();
        }
    }

    public function getForm()
    {
        return $this->form;
    }

    public function createView()
    {
        return $this->form->createView();
    }

    public function process()
    {

        $this->form->handleRequest($this->requestStack->getCurrentRequest());

        if($this->requestStack->getCurrentRequest()->isMethod('POST')){

            if($this->form->isValid()){

                if($this->onSuccess()){
                    return true;
                }
            }

            return false;
        }

    }

    private function onSuccess()
    {
        $this->entityManager->persist($this->form->getData());
        $this->entityManager->flush();

        return true;
    }

    private function injectData()
    {
        $user = $this->getUser();

        $advert = new Advert();
        $data = $advert->setUser($user)
                       ->setGuest(null)
                        ->setCity($user->getCity());

        return $this->form->setData($data);
    }

    private function isUpdate()
    {
        $actualRoute = $this->requestStack->getCurrentRequest()->get('_route');
        if( ($actualRoute === 'snoozit_edit_advert') || ( $actualRoute === 'snoozit_dashboard_edit_advert')) {
            return true;
        }
        return false;
    }

    private function getUser()
    {
        return $this->tokenStorage->getToken()->getUser();
    }

    public function getFormValidationData()
    {
        return $this->form->getData();
    }

}