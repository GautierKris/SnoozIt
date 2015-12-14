<?php

namespace Snoozit\SkuagBundle\SkuagEvents;

use Snoozit\PlatformBundle\Entity\Advert;
use Snoozit\UserBundle\Entity\User;
use Symfony\Component\EventDispatcher\Event;

class NegoceEvent extends Event
{
    protected $advert;
    protected $user;
    protected $price;

    public function __construct(Advert $advert, User $user, $price)
    {
        $this->advert = $advert;
        $this->user   = $user;
        $this->price  = $price;
    }

    public function getCustomer()
    {
        return $this->user;
    }

    public function getCustomerUsername()
    {
        return $this->user->getUsername();
    }

    public function getAdvert()
    {
        return $this->advert;
    }

    public function getAdvertTitle()
    {
        return $this->advert->getTitle();
    }

    public function getOwner()
    {
        return $this->advert->getUser();
    }

    public function getOwnerUsername()
    {
        return $this->advert->getUser()->getUsername();
    }

    public function getAdvertId()
    {
        return $this->advert->getId();
    }

    public function getAdvertSlug()
    {
        return $this->advert->getSlug();
    }

    public function getOwnerNotifications()
    {
        return $this->advert->getUser()->getNotifications()->getAdvertInterest();
    }

    public function getPrice()
    {
        return $this->price;
    }

}