<?php

namespace Snoozit\SkuagBundle\SkuagEvents;

use Snoozit\UserBundle\Entity\User;
use Symfony\Component\EventDispatcher\Event;

class RegistrationSuccess extends Event
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function getRegion()
    {
        return $this->user->getCity()->getDepartement()->getRegion();
    }

    public function getRegionName()
    {
        return $this->user->getCity()->getDepartement()->getRegion()->getNom();
    }

    public function getUser()
    {
        return $this->user;
    }

}