<?php

namespace Snoozit\PlatformBundle\Handler;



use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityNotFoundException;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;
use Snoozit\PlatformBundle\Entity\AdvertComment;
use FOS\UserBundle\Model\UserInterface;

class AdvertCommentHandler
{
    private $form;
    private $requestStack;
    private $entityManager;
    private $tokenStorage;
    private $session;

    public function __construct(Form $form, EntityManager $entityManager, RequestStack $requestStack, TokenStorage $tokenStorage, Session $session )
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
        $advert = $this->requestStack->getCurrentRequest()->attributes->get('advert');

        $entity = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->find($advert);

        if(!$entity){
            throw new EntityNotFoundException("L'annonce transmise au commentaire n'existe pas.");
        }

            $advertComment = new AdvertComment();
            $advertComment->setAdvert($entity);
            $advertComment->setUser($this->user);

            return $this->form->setData($advertComment);

    }

    // Supprime les notifications
    public function removeNotification($commentId)
    {
        $comment = $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertComment')->find($commentId);

        if($comment){
            //$comment->setFade(true);
            //$this->entityManager->flush();

            return true;
        }

        return false;
    }
}