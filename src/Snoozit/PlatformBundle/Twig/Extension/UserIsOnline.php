<?php

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManager;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class UserIsOnline extends \Twig_Extension
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
            new \Twig_SimpleFilter('IsOnline', array( $this, 'IsOnline'))
        );
    }

    public function IsOnline($user)
    {
        $entity = $this->entityManager->getRepository('SnoozitUserBundle:User')->find($user);

        if(!$entity->isOnline()){
            return false;
        }

        return true;
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'user_is_online';
    }
}
