<?php
/**
 * Created by PhpStorm.
 * User: Kris
 * Date: 04/10/15
 * Time: 23:14
 */

namespace Snoozit\PlatformBundle\Handler;

use Doctrine\ORM\EntityManager;
use Snoozit\PlatformBundle\Entity\SearchEngine;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Router;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class SearchEngineHandler
{
    private $form;
    private $requestStack;
    private $entityManager;
    private $tokenStorage;
    private $session;

    public function __construct(Form $form, EntityManager $entityManager, RequestStack $requestStack, TokenStorage $tokenStorage, Session $session)
    {
        $this->form = $form;
        $this->requestStack = $requestStack;
        $this->entityManager = $entityManager;
        $this->tokenStorage = $tokenStorage;
        $this->session      = $session;

        $this->getLastSearchSession();
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

        $this->setLastSearchSession();

        return true;
    }

    public function getFormValidateData()
    {
        return $this->form->getData();
    }

    private function setLastSearchSession()
    {
        if($this->session->has('lastSearch')){
            $this->session->remove('lastSearch');
        }

        $this->session->set('lastSearch', $this->form->getData()->getId());
    }

    private function getLastSearchSession()
    {

        if(!$this->session->has('lastSearch')){


            if($this->session->has('selectedRegion')){

                $data = $this->session->get('selectedRegion');

                $entity  = $this->entityManager->getRepository('SnoozitPlatformBundle:Localisation\Region')->find($data);


                $this->form->get('region')->setData($entity);

                return;
            }

            return;
        }

        $data = $this->session->get('lastSearch');

        $entity  = $this->entityManager->getRepository('SnoozitPlatformBundle:SearchEngine')->find($data);

        $this->form->setData($entity);

        return;
    }

}