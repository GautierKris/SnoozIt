<?php

namespace Snoozit\PlatformBundle\Listener;

use Doctrine\ORM\Event\LifecycleEventArgs;
use Snoozit\PlatformBundle\Entity\AdvertNegoce;
use Symfony\Component\Routing\Router;


class NegoceNotification
{
    private $mailer;

    public function __construct(\Swift_Mailer $mailer, Router $router)
    {
        $this->mailer = $mailer;
        $this->router = $router;
    }

    public function postPersist(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();

        // On envoi un email uniquement si quelqu'un est interessé par une annonce
        if(!$entity instanceof AdvertNegoce){
            return;
        }

        $url =      $this->router->generate('snoozit_show_advert', array('slug' => $entity->getAdvert()->getSlug(), 'id' => $entity->getAdvert()->getId()), true);
        $username = $entity->getUser()->getUsername();

        $this->sendMessage($url, $username);
    }

    private function sendMessage($url, $username)
    {

        $message = new \Swift_Message(
            'Vous avez reçu une demande!',
            "Félicitation, nous venons d'apprendre que $username est interessé par votre annonce:

$url

L'équipe Snoozit.
         ");

        $message->addFrom('gautierkris@gmail.com')
            ->addTo('gautierkris@gmail.com');

        $this->mailer->send($message);
    }
}