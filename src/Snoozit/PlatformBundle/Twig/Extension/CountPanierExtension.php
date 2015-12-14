<?php

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class CountPanierExtension extends \Twig_Extension
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
            new \Twig_SimpleFilter('CountPanier', array( $this, 'countPanier'))
        );
    }

    public function countPanier($user)
    {
        $entities = $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertInterest')->countPanier($user);
        return $entities;
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'count_panier';
    }
}
