<?php
namespace Snoozit\UserBundle\Handler;

use Doctrine\ORM\EntityManager;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;
use FOS\UserBundle\Model\UserInterface;

class UserLocalisationHandler
{
    private $form;
    private $requestStack;
    private $entityManager;
    private $tokenStorage;
    private $session;

    public function __construct(Form $form, RequestStack $requestStack, EntityManager $entityManager, TokenStorage $tokenStorage )
    {
        $this->form = $form;
        $this->requestStack = $requestStack;
        $this->entityManager = $entityManager;
        $this->tokenStorage = $tokenStorage;
        $this->user = $this->tokenStorage->getToken()->getUser();

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

    // Injecte les données initiales
    private function injectData()
    {
        $userLocalisation = $this->user->getCity();

        return $this->form->setData($userLocalisation);
    }

}