<?php

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManager;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class InterestStatusIsDesistExtension extends \Twig_Extension
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
            new \Twig_SimpleFilter('InterestStatusIsDesist', array( $this, 'interestStatusIsDesist'))
        );
    }

    public function interestStatusIsDesist($advert)
    {
        // Option Type: Désistement
        $advertOptionType = $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertOptionType')->find(5);

        $advertInterest = $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertInterest')->findBy(
            array(  'user' => $this->tokenStorage->getToken()->getUser(),
                    'advert' => $advert,
                    'advertOptionType' => $advertOptionType));

        if($advertInterest){
            return true;
        }

        return false;
    }

    public function getName()
    {
        return 'user_interest_status_is_desist_extension';
    }

}