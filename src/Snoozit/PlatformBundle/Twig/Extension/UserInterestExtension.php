<?php

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManager;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class UserInterestExtension extends \Twig_Extension
{
    private $entityManager;
    private $tokenStorage;

    public function __construct(EntityManager $entityManager, TokenStorage $tokenStorage)
    {
        $this->entityManager = $entityManager;
        $this->tokenStorage = $tokenStorage;
    }

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('UserIsInterestBy', array( $this, 'UserIsInterestBy'))
        );
    }

    public function UserIsInterestBy($advert)
    {
        $advertInterest = $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertInterest')->findBy(array('user' => $this->tokenStorage->getToken()->getUser(), 'advert' => $advert));

        if($advertInterest){
            return true;
        }

        return false;
    }

    public function getName()
    {
        return 'user_interest_extension';
    }

}