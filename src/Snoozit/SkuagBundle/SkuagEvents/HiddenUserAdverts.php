<?php

namespace Snoozit\SkuagBundle\SkuagEvents;

use Snoozit\UserBundle\Entity\User;
use Symfony\Component\EventDispatcher\Event;

class HiddenUserAdverts extends Event
{
    protected $user;
    protected $userToHide;

    public function __construct(User $user, User $userToHide)
    {
        $this->user   = $user;
        $this->userToHide = $userToHide;
    }

    public function getUser()
    {
        return $this->user;
    }

    public function getUserToHide()
    {
        return $this->userToHide;
    }
}