<?php

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManagerInterface;
use Snoozit\PlatformBundle\Entity\Advert;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class NotificationIsNewExtension extends \Twig_Extension
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
            new \Twig_SimpleFilter('NotificationIsNew', array( $this, 'notificationIsNew'))
        );
    }

    public function notificationIsNew($notification)
    {
        $now = new \DateTime();
        $now->modify('-24 hours');

        if($notification < $now){
            return false;
        }

        return true;
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'notification_is_new';
    }
}
