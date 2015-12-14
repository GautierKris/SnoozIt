<?php

namespace Snoozit\SkuagBundle\SkuagEvents;

use Snoozit\PlatformBundle\Entity\Localisation\City;
use Symfony\Component\EventDispatcher\Event;
use Snoozit\UserBundle\Entity\User;

class FollowCityEvent extends Event
{
    protected $city;
    protected $user;

    public function __construct(City $city, User $user)
    {
        $this->city = $city;
        $this->user   = $user;
    }

    public function getCity()
    {
        return $this->city;
    }

    public function getUser()
    {
        return $this->user;
    }
}