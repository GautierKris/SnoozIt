<?php

namespace Snoozit\SkuagBundle\Listener\Follow;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityNotFoundException;
use Snoozit\PlatformBundle\Entity\UserLog;
use Snoozit\SkuagBundle\SkuagEvents\FollowDepartementEvent;
use Snoozit\SkuagBundle\SkuagEvents\FollowUserEvent;

class FollowRefusListener
{
    protected $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function getNotificationType()
    {
        $type = $this->entityManager->getRepository('SnoozitPlatformBundle:NotificationType')->find(1);

        if(!$type){
            throw new EntityNotFoundException();
        }

        return $type;
    }

    public function processFollowRefus(FollowUserEvent $event)
    {
        // Initialisation du log pour celui qui vient de s'abonner
        $userLog = new UserLog();
        $userLog->setType($this->getNotificationType()); // Abonnement
        $userLog->setUser($event->getUser()); // Qui à fait la demande
        $userLog->setOwner($event->getUser()); // Qui en fait la demande
        $userLog->setUserAsked($event->getFollowedUser()); // Qui en fait la demande
        $userLog->setContent("Vous avez annulé l'abonnement de ");

        // Initialisation du log pour celui qui vient de s'abonner
        $userlogFollowed = new UserLog();
        $userlogFollowed->setType($this->getNotificationType()); // Abonnement
        $userlogFollowed->setUser($event->getFollowedUser()); // Qui à fait la demande
        $userlogFollowed->setOwner($event->getFollowedUser()); // Qui en fait la demande
        $userlogFollowed->setUserAsked($event->getUser()); // Qui en fait la demande
        $userlogFollowed->setContent("Annulation de votre abonnement pour: ");

        $this->recordLog($userLog, $userlogFollowed);

        return;
    }

    private function recordLog($userLog, $userlogFollowed)
    {
        $this->entityManager->persist($userLog);
        $this->entityManager->persist($userlogFollowed);
        $this->entityManager->flush();

        return;
    }
}