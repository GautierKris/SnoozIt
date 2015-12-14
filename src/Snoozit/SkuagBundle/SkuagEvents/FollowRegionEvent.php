<?php

namespace Snoozit\SkuagBundle\SkuagEvents;

use Snoozit\PlatformBundle\Entity\Localisation\Region;
use Snoozit\UserBundle\Entity\User;
use Symfony\Component\EventDispatcher\Event;

class FollowRegionEvent extends Event
{
    protected $region;
    protected $user;

    public function __construct(Region $region, User $user)
    {
        $this->region = $region;
        $this->user   = $user;
    }

    public function getRegion()
    {
        return $this->region;
    }

    public function getUser()
    {
        return $this->user;
    }
}