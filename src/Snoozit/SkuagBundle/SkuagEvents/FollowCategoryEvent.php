<?php

namespace Snoozit\SkuagBundle\SkuagEvents;

use Snoozit\PlatformBundle\Entity\Categories\Category;
use Symfony\Component\EventDispatcher\Event;
use Snoozit\UserBundle\Entity\User;

class FollowCategoryEvent extends Event
{
    protected $category;
    protected $user;

    public function __construct(Category $category, User $user)
    {
        $this->category = $category;
        $this->user   = $user;
    }

    public function getCategory()
    {
        return $this->category;
    }

    public function getUser()
    {
        return $this->user;
    }
}