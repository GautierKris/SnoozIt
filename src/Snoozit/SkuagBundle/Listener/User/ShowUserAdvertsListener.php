<?php

namespace Snoozit\SkuagBundle\Listener\User;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityNotFoundException;
use Snoozit\PlatformBundle\Entity\UserLog;
use Snoozit\SkuagBundle\SkuagEvents\HiddenUserAdverts;

class ShowUserAdvertsListener
{
    protected $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function getNotificationType()
    {
        // Type 9 -> Réglage
        $type = $this->entityManager->getRepository('SnoozitPlatformBundle:NotificationType')->find(9);

        if(!$type){
            throw new EntityNotFoundException();
        }

        return $type;
    }

    public function processShowUserAdverts(HiddenUserAdverts $event)
    {
        $userLog = new UserLog();
        $userLog
            ->setType($this->getNotificationType())
            ->setUser($event->getUser())
            ->setUserAsked($event->getUserToHide())
            ->setContent('Les annonces de '.$event->getUserToHide()->getUsername().' sont maintenant visibles.');

        $this->recordLog($userLog);

        return;
    }

        private function recordLog($userLog)
    {
        // Enregistre la région dans la liste des abonnements

        $this->entityManager->persist($userLog);
        $this->entityManager->flush();

        return;
    }

}