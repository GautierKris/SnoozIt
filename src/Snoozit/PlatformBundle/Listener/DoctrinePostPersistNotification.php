<?php

namespace Snoozit\PlatformBundle\Listener;

use Doctrine\ORM\Event\LifecycleEventArgs;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Snoozit\PlatformBundle\Entity\Advert;


class DoctrinePostPersistNotification
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

    public function postPersist(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();

        if($entity instanceof Advert){
            $this->advertNotification($entity);
            return;
        }

        return;
    }

    public function advertNotification(Advert $entity)
    {
        $message = new \Swift_Message("Votre annonce sera bientôt en ligne!",
            $this->getTemplating()->render('SnoozitPlatformBundle:Mail/DoctrineListener/Persist:AdvertMail.html.twig',
                array(
                    'slug'              => $entity->getSlug(),
                    'id'                => $entity->getId(),
                    'title'             => $entity->getTitle(),
                    'ownername'         => $this->getUsername($entity)
                )
            ),
            'text/html');

        $message->addTo('gautierkris@gmail.com')
            ->addFrom('gautierkris@gmail.com');

        $this->mailer->send($message);
    }

    private function getUsername(Advert $entity)
    {
        if(!is_null($entity->getUser())){
            $username = $entity->getUser()->getUsername();
        }else{
            $username = $entity->getGuest()->getUsername();
        }

        return $username;
    }

    private function getTemplating()
    {
        return $this->containerAware->get('templating');
    }

}