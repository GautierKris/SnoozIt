<?php

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class CountAdvertInterestExtension extends \Twig_Extension
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
            new \Twig_SimpleFilter('countAdvertInterest', array( $this, 'countAdvertInterest'))
        );
    }

    public function countAdvertInterest($advert)
    {
        $entities = $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertInterest')->findBy(array('advert' => $advert));

        return count($entities);
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'count_advert_interest';
    }
}
