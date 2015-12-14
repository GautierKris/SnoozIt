<?php

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManager;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class CountUserAdvertExtension extends \Twig_Extension
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
            new \Twig_SimpleFilter('CountUserAdvert', array( $this, 'countUserAdvert'))
        );
    }

    public function countUserAdvert($userId)
    {
        $request = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->findBy(array('user' => $userId));

        return count($request);
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'count_advert';
    }
}
