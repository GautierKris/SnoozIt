<?php

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManagerInterface;
use Snoozit\PlatformBundle\Entity\Advert;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class GetRegionNameExtension extends \Twig_Extension
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
            new \Twig_SimpleFilter('GetRegionName', array( $this, 'getRegionName'))
        );
    }

    public function getRegionName($id)
    {
        $entity = $this->entityManager->getRepository('SnoozitPlatformBundle:Localisation\Region')->find($id);

        if($entity){
            return $entity->getNom();
        }
        return 'Toute la france';
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'get_region_name';
    }
}
