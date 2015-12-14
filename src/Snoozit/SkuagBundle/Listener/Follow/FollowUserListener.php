<?php

namespace Snoozit\SkuagBundle\Listener\Follow;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityNotFoundException;
use Snoozit\PlatformBundle\Entity\UserLog;
use Snoozit\SkuagBundle\SkuagEvents\FollowUserEvent;
use Snoozit\UserBundle\Entity\User;
use Symfony\Component\DependencyInjection\ContainerInterface;


class FollowUserListener
{
    protected $entityManager;
    protected $session;
    protected $requestStack;

    public function __construct(EntityManager $entityManager,ContainerInterface $containerAware, \Swift_Mailer $mailer)
    {
        $this->entityManager  = $entityManager;
        $this->containerAware = $containerAware;
        $this->mailer         = $mailer;
    }

    public function getNotificationType()
    {
        $type = $this->entityManager->getRepository('SnoozitPlatformBundle:NotificationType')->find(1);

        if(!$type){
            throw new EntityNotFoundException();
        }

        return $type;
    }

    public function processFollow(FollowUserEvent $event)
    {

        // Initialisation du log principal
        $userLog = new UserLog();

        // Si c'est une annulation d'abonnement
        if(!$event->getStatus()){

            // Le type
            $userLog->setType($this->getNotificationType()); // Abonnement
            $userLog->setUser($event->getUser()); // Qui est concerné par la demande
            $userLog->setUserAsked($event->getFollowedUser()); // Qui en fait la demande
            $userLog->setOwner($event->getUser()); // Qui en fait la demande
            $userLog->setContent('Vous ne suivez plus ');

            $this->entityManager->persist($userLog);
            $this->entityManager->flush();

        }else{

            // Le type
            $userLog->setType($this->getNotificationType()); // Abonnement
            $userLog->setUser($event->getFollowedUser()); // Qui est concerné par la demande
            $userLog->setUserAsked($event->getUser()); // Qui en fait la demande
            $userLog->setOwner($event->getUser()); // Qui en fait la demande
            $userLog->setContent('vous suit désormais');

            // Initialisation du log pour celui qui vient de s'abonner
            $userLogFollowed = new UserLog();
            $userLogFollowed->setType($this->getNotificationType()); // Abonnement
            $userLogFollowed->setUser($event->getUser()); // Qui à fait la demande
            $userLogFollowed->setUserAsked($event->getFollowedUser()); // Qui en fait la demande
            $userLogFollowed->setOwner($event->getUser()); // Qui en fait la demande
            $userLogFollowed->setContent('Vous êtes maintenant abonné à ');


            $this->entityManager->persist($userLog);
            $this->entityManager->persist($userLogFollowed);
            $this->entityManager->flush();


            if($event->getUserFollowedNotifications()){
                $this->sendMessage($event);
            }
        }

            return;
    }

    private function sendMessage(FollowUserEvent $event)
    {
        $templating = $this->containerAware->get('templating');

        $message = new \Swift_Message("Vous avez une nouvel abonné!",

            $templating->render('SnoozitSkuagBundle:Mail/Follow:UserFollowed.html.twig',
                array(
                    'followerUserName'  => $event->getUser()->getUsername(),
                )
            ),
            'text/html');

        $message->addTo('gautierkris@gmail.com')
            ->addFrom('gautierkris@gmail.com');

        $this->mailer->send($message);
    }
}