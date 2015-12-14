<?php
/**
 * Created by PhpStorm.
 * User: Kris
 * Date: 02/10/15
 * Time: 12:34
 */

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManager;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class UserTryNegotiateExtension extends \Twig_Extension
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
            new \Twig_SimpleFilter('UserTryNegotiate', array( $this, 'checkUserTryNegotiate'))
        );
    }

    public function checkUserTryNegotiate($advert)
    {
        $entity = $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertNegoce')->findBy(array('user' => $this->tokenStorage->getToken()->getUser(), 'advert' => $advert));

        if($entity){
            return true;
        }

        return false;
    }

    public function getName()
    {
        return 'user_try_negotiate_extension';
    }
}