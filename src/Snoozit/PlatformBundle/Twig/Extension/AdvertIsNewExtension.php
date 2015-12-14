<?php

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManagerInterface;
use Snoozit\PlatformBundle\Entity\Advert;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class AdvertIsNewExtension extends \Twig_Extension
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
            new \Twig_SimpleFilter('advertIsNew', array( $this, 'advertIsNew'))
        );
    }

    public function advertIsNew($advert)
    {
        $entity = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->find($advert);

        if($entity->isNew()){
            return true;
        }
        return false;
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'advert_is_new';
    }
}
