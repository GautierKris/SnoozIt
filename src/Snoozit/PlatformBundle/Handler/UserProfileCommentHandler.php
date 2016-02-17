<?php

namespace Snoozit\PlatformBundle\Handler;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityNotFoundException;
use Snoozit\PlatformBundle\Entity\UserProfileComment;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;
use FOS\UserBundle\Model\UserInterface;

class UserProfileCommentHandler
{
    private $form;
    private $requestStack;
    private $entityManager;
    private $tokenStorage;
    private $session;

    public function __construct(Form $form, RequestStack $requestStack, EntityManager $entityManager, TokenStorage $tokenStorage, Session $session )
    {
        $this->form = $form;
        $this->requestStack = $requestStack;
        $this->entityManager = $entityManager;
        $this->tokenStorage = $tokenStorage;
        $this->session = $session;
        $this->user = $this->tokenStorage->getToken()->getUser();

        if(!is_object($this->user) || !$this->user instanceof UserInterface) {
            return false;
        }

        $this->injectData();
    }

    // Controle et validation du formulaire
    public function process()
    {
        $this->form->handleRequest($this->requestStack->getCurrentRequest());

        if(is_object($this->user) || $this->user instanceof UserInterface) {
            if ($this->form->isValid() && $this->requestStack->getCurrentRequest()->isMethod('POST')) {

                $this->onSuccess();
                return true;
            }

            return false;
        }

        return false;
    }

    // Déclenchez en cas de validation du formulaire
    // Enregistrement en base de données
    private function onSuccess()
    {
        $this->entityManager->persist($this->form->getData());
        $this->entityManager->flush();
    }

    // Renvoi le formulaire
    public function getForm()
    {
        return $this->form;
    }

    // Créer la vue du formulaire
    public function createView()
    {
        return $this->form->createView();
    }

    // Renvoi la route initiale pour la redirection
    public function getPreviousRouting()
    {
        return $this->requestStack->getCurrentRequest()->headers->get('referer');
    }

    // Les flashbags
    public function getErrorFlashMessage()
    {
        return $this->session->getFlashBag()->add('error' , 'Oups..là il y a eu un problème !');
    }

    // Les flashbags
    public function getSuccessFlashMessage()
    {
        return $this->session->getFlashBag()->add('success' , 'Commentaire envoyé !');
    }

    // Injecte les données initiales
    private function injectData()
    {
        $requestUser = $this->requestStack->getCurrentRequest()->attributes->get('user');

        if($requestUser){
            $userProfile = $requestUser->getId();
        }else{
           $userProfile = $this->user;
        }

        $entity = $this->entityManager->getRepository('SnoozitUserBundle:User')->find($userProfile);
        if(!$entity){
            throw new EntityNotFoundException("Ce profile n'existe pas.");
        }

            $userProfileComment = new UserProfileComment();
            $userProfileComment->setUserProfile($entity);
            $userProfileComment->setUser($this->user);

            return $this->form->setData($userProfileComment);

    }

}