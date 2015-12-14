<?php

namespace Snoozit\SkuagBundle\SkuagEvents;

use Snoozit\PlatformBundle\Entity\Localisation\Departement;
use Symfony\Component\EventDispatcher\Event;
use Snoozit\UserBundle\Entity\User;


class FollowDepartementEvent extends Event
{
    protected $departement;
    protected $user;

    public function __construct(Departement $departement, User $user)
    {
        $this->departement = $departement;
        $this->user   = $user;
    }

    public function getDepartement()
    {
        return $this->departement;
    }

    public function getUser()
    {
        return $this->user;
    }
}