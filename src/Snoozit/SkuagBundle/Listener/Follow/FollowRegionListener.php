<?php
/**
 * Created by PhpStorm.
 * User: Kris
 * Date: 06/11/15
 * Time: 21:42
 */

namespace Snoozit\SkuagBundle\Listener\Follow;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityNotFoundException;
use Snoozit\PlatformBundle\Entity\UserLog;
use Snoozit\SkuagBundle\SkuagEvents\FollowRegionEvent;

class FollowRegionListener
{
    protected $entityManager;
    protected $session;
    protected $requestStack;

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

    public function processFollow(FollowRegionEvent $event)
    {
        // Initialisation du log pour celui qui vient de s'abonner
        $userLog = new UserLog();
        $userLog->setType($this->getNotificationType()); // Abonnement
        $userLog->setUser($event->getUser()); // Qui à fait la demande
        $userLog->setRegion($event->getRegion()); // Qui en fait la demande
        $userLog->setOwner($event->getUser()); // Qui en fait la demande
        $userLog->setContent('Vous êtes maintenant abonné à');

        $this->recordLog($userLog);

        return;
    }

    private function recordLog($userLog)
    {
        $this->entityManager->persist($userLog);
        $this->entityManager->flush();

        return;
    }
}