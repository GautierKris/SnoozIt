<?php
/**
 * Created by PhpStorm.
 * User: Kris
 * Date: 17/09/15
 * Time: 13:10
 */

namespace Snoozit\PlatformBundle\Handler;

use Doctrine\ORM\EntityManager;
use FOS\UserBundle\Model\UserInterface;
use Snoozit\PlatformBundle\Entity\Advert;
use Snoozit\PlatformBundle\Entity\AdvertNegoce;
use Snoozit\SkuagBundle\SkuagEvents\NegoceEvent;
use Snoozit\SkuagBundle\SkuagEvents\SkuagEvents;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class AdvertNegoceHandler
{
    private $form;
    private $requestStack;
    private $entityManager;
    private $tokenStorage;
    private $session;
    private $containerInterface;

    public function __construct(Form $form, EntityManager $entityManager, RequestStack $requestStack, TokenStorage $tokenStorage, Session $session, ContainerInterface $containerInterface)
    {
        $this->form = $form;
        $this->requestStack = $requestStack;
        $this->entityManager = $entityManager;
        $this->tokenStorage = $tokenStorage;
        $this->session      = $session;
        $this->containerInterface = $containerInterface;

        $this->user = $this->tokenStorage->getToken()->getUser();

        if(is_object($this->user) || $this->user instanceof UserInterface){
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

    private function injectData()
    {
        $advertNegoce = new AdvertNegoce();
        $data = $advertNegoce->setUser($this->user)->setAdvert($this->getAdvert());

        return $this->form->setData($data);
    }

    // Renvoie l'objet annonce
    private function getAdvert()
    {
        $entity = $this->requestStack->getCurrentRequest()->attributes->get('id');

        $advert = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->find($entity);

        return $advert;
    }

    // Renvoi le prix proposé par l'utilisateur
    private function getPrice()
    {
        return $this->form->get('price')->getData();
    }

    public function process()
    {
        $this->form->handleRequest($this->requestStack->getCurrentRequest());

        if($this->requestStack->getCurrentRequest()->isMethod('POST')){

            if($this->form->isValid() && $this->processNegotiate()){
                return true;
            }
        }
    }

    // Annonce Negotiate
    private function processNegotiate()
    {
        // Si la session n'est pas crée , on la crée
        if(!$this->session->has('advertNegotiate')) $this->session->set('advertNegotiate', array());

        $advertNegotiateSession = $this->session->get('advertNegotiate');

        // Message pour les flashbags
        $error_msg = 'Vous avez déja transmis une offre pour cette annonce.';
        $success_msg = 'Votre offre pour cette annonce a bien été pris en compte.';

        if(array_key_exists($this->getAdvert()->getId(), $advertNegotiateSession)){
            $this->session->getFlashBag()->add('error' , $error_msg );
            return false;
        }
        else{
            // Autrement on initialise la session pour cette advert à 1
            $advertNegotiateSession[$this->getAdvert()->getId()] = 1;
            $this->createNegotiateAdvert();

            $this->session->getFlashBag()->add('success' , $success_msg );
            $this->session->set('advertNegotiate', $advertNegotiateSession);

            $this->containerInterface->get('event_dispatcher')->dispatch(SkuagEvents::ON_ADD_NEGOCE, new NegoceEvent($this->getAdvert(), $this->user, $this->getPrice()));

            return true;
        }
    }

    private function createNegotiateAdvert()
    {
        $this->entityManager->persist($this->form->getData());
        $this->entityManager->flush();

        return;
    }

    // Suppression de la négociation
    public function removeNegoce(AdvertNegoce $advertNegoce)
    {
        $this->containerInterface->get('event_dispatcher')->dispatch(SkuagEvents::ON_REFUSE_NEGOCE, new NegoceEvent($advertNegoce->getAdvert(), $advertNegoce->getUser(), $this->getPrice() ));

        $this->entityManager->remove($advertNegoce);
        $this->entityManager->flush();

        return;

    }



}