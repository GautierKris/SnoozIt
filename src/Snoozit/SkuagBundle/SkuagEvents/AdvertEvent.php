<?php

namespace Snoozit\SkuagBundle\SkuagEvents;

use Snoozit\PlatformBundle\Entity\Advert;
use Symfony\Component\EventDispatcher\Event;

class AdvertEvent extends Event
{
    protected $advert;

    public function __construct(Advert $advert)
    {
        $this->advert = $advert;
    }

    public function getAdvert()
    {
        return $this->advert;
    }

    public function getViews()
    {
        return $this->advert->getViews();
    }

}