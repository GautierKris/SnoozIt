<?php

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class GetUserScoreExtension extends \Twig_Extension
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
            new \Twig_SimpleFilter('GetUserScore', array( $this, 'getUserScore'))
        );
    }

    public function getUserScore($user)
    {
        $userAccount = $this->entityManager->getRepository('SnoozitUserBundle:User')->find($user);

        if(!$userAccount){
            return 0;
        }

        return $userAccount->getScore();
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'get_user_score';
    }
}
