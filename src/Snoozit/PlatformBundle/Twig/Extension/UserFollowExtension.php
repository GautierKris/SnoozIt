<?php

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManagerInterface;
use Snoozit\UserBundle\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class UserFollowExtension extends \Twig_Extension
{
    private $entityManager;
    private $tokenStorage;

    public function __construct(EntityManagerInterface $entityManager, TokenStorage $tokenStorage)
    {
        $this->entityManager = $entityManager;
        $this->tokenStorage = $tokenStorage;
    }

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('userFollow', array( $this, 'userFollow'))
        );
    }

    public function userFollow($testedUser)
    {
        $user = $this->getUser();

        if(!is_object($user) || !$user instanceof User) {
            return false;
        }

        if ($this->getUserIsFollow($user, $testedUser)) {
            return true;
        }

        return false;
    }

    private function getUser()
    {
        return $this->tokenStorage->getToken()->getUser();
    }

    private function getUserIsFollow(User $user, $testedUser)
    {

        $followedUser = $user->getFolloweduser();
        $toArray = array();

        foreach($followedUser as $r)
        {
            $toArray[] = $r->getId();
        }

        if(in_array($testedUser, $toArray))
        {
            return true;
        }

        return false;

    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'user_follow';
    }
}
