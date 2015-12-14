<?php

namespace Snoozit\PlatformBundle\Listener;

use Doctrine\ORM\Event\LifecycleEventArgs;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Routing\Router;
use Snoozit\PlatformBundle\Entity\AdvertInterest;
use Snoozit\PlatformBundle\Entity\AdvertNegoce;

class DoctrinePersistListener
{
    private $mailer;
    private $router;
    private $containerAware;

    public function __construct(\Swift_Mailer $mailer, Router $router, ContainerInterface $containerAware)
    {
        $this->mailer = $mailer;
        $this->router = $router;
        $this->containerAware = $containerAware;
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();

        if($entity instanceof AdvertNegoce){
            $this->advertNegoceNotification($entity);
            return;
        }

        return;
    }


    public function advertNegoceNotification(AdvertNegoce $entity)
    {
        $message = new \Swift_Message("Une proposition vient d'arriver",
            $this->getTemplating()->render('SnoozitPlatformBundle:Mail/DoctrineListener/Persist:NegoceMail.html.twig',
                array(
                    'slug'              => $entity->getAdvert()->getSlug(),
                    'id'                => $entity->getAdvert()->getId(),
                    'title'             => $entity->getAdvert()->getTitle(),
                    'userInterested'    => $this->getUsername(),
                    'ownername'         => $entity->getUser()->getUsername()
                )),
            'text/html');

        $message->addTo('gautierkris@gmail.com')
            ->addFrom('gautierkris@gmail.com');

        $this->mailer->send($message);
    }

    private function getUsername()
    {
        $username = $this->containerAware->get('security.token_storage')->getToken()->getUser()->getUsername();

        return $username;
    }

    private function getTemplating()
    {
        return $this->containerAware->get('templating');
    }
}