<?php

namespace Snoozit\PlatformBundle\Handler;

use Doctrine\ORM\EntityManager;
use Snoozit\PlatformBundle\Entity\sellComment;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Router;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class SellCommentHandler
{
    private $form;
    private $requestStack;
    private $entityManager;
    private $tokenStorage;
    private $session;

    public function __construct(Form $form,RequestStack $requestStack,  EntityManager $entityManager,  TokenStorage $tokenStorage, Session $session)
    {
        $this->form = $form;
        $this->requestStack = $requestStack;
        $this->entityManager = $entityManager;
        $this->tokenStorage = $tokenStorage;
        $this->session      = $session;

        // Injecte les données initiales
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

    // Injecte les données initiales
    private function injectData()
    {
        $sellComment = new sellComment();
        $user = $this->tokenStorage->getToken()->getUser();

        return $this->form->setData($sellComment->setUser($user));

    }
}