<?php

namespace Snoozit\SkuagBundle\SkuagEvents;

use Snoozit\PlatformBundle\Entity\Advert;
use Snoozit\UserBundle\Entity\User;
use Symfony\Component\EventDispatcher\Event;

class InterestEvent extends Event
{
    protected $advert;
    protected $user;

    public function __construct(Advert $advert, User $user)
    {
        $this->advert = $advert;
        $this->user   = $user;
    }

    public function getCustomer()
    {
        return $this->user;
    }

    public function getCustomerUsername()
    {
        return $this->user->getUsername();
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
        if(is_null($this->getOwner())){
            return $this->getGuestOwnerName();
        }

        return $this->advert->getUser()->getUsername();
    }

    public function getGuest()
    {
        return $this->advert->getGuest();
    }

    public function getGuestOwnerName()
    {
        if(is_null($this->getGuest())) {
            return null;
        }

        return $this->advert->getGuest()->getUsername();
    }

    public function getAdvert()
    {
        return $this->advert;
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

}