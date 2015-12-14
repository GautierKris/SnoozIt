<?php
namespace Snoozit\PlatformBundle\Handler;

use Doctrine\ORM\EntityManager;
use Snoozit\PlatformBundle\Entity\Notification;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class NotificationHandler
{
    private $form;
    private $requestStack;
    private $entityManager;
    private $tokenStorage;
    private $session;

    public function __construct(Form $form, RequestStack $requestStack, EntityManager $entityManager, TokenStorage $tokenStorage, Session $session)
    {
        $this->form = $form;
        $this->requestStack = $requestStack;
        $this->entityManager = $entityManager;
        $this->tokenStorage = $tokenStorage;
        $this->session      = $session;

        $this->injectData();
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
                return false;
            }
            return false;
        }
        return false;
    }

    private function onSuccess()
    {
        $entity = $this->form->getData();

        $this->entityManager->persist($entity);
        $this->entityManager->flush();

        return true;
    }

    public function sendSuccessResponse()
    {
        return $this->session->getFlashBag()->add('success', 'Modification prise en compte');
    }

    private function getUser()
    {
        return $this->tokenStorage->getToken()->getUser();
    }

    private function getUserNotificationAccount()
    {
        $entity = $this->entityManager->getRepository('SnoozitPlatformBundle:Notification')->findOneBy(array('user' => $this->getUser()));

        if($entity){
            return $entity;
        }
        return false;
    }

    private function injectData()
    {
        $userData = $this->getUserNotificationAccount();

        if(!$userData){

            $notificationEngine = new Notification();
            $this->form->setData($notificationEngine->setUser($this->getUser()));

            return;
        }
        $this->form->setData($userData);

        if(empty($this->form->get('newsletter')->getData())){
            $this->form->get('newsletter')->setData('0');
        }
        if(empty($this->form->get('advertInterest')->getData())){
            $this->form->get('advertInterest')->setData('0');
        }
        if(empty($this->form->get('follower')->getData())) {
            $this->form->get('follower')->setData('0');
        }
        if(empty($this->form->get('comment')->getData())) {
            $this->form->get('comment')->setData('0');
        }

        return;
    }

}