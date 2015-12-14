<?php

namespace Snoozit\SkuagBundle\SkuagEvents;

use Snoozit\UserBundle\Entity\User;
use Symfony\Component\EventDispatcher\Event;

class FollowUserEvent extends Event
{
    protected $user;
    protected $followed;
    protected $status;

    public function __construct(User $user, User $followed, $status = true)
    {
        $this->user = $user;    // Celui qui suit
        $this->followed = $followed; // celui qui est suivit
        $this->status = $status;
    }

    public function getUser()
    {
        return $this->user;
    }

    public function getTotalFollower()
    {
        return $this->user->getTotalFollower();
    }

    public function getFollowedUser()
    {
       return $this->followed;
    }

    public function getUserFollowedNotifications()
    {
        $notifications = $this->followed->getNotifications();
        if($notifications){
            return $notifications->getFollower();
        }

        return array();
    }

    public function getStatus()
    {
        return $this->status;
    }

}