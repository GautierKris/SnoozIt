<?php

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManager;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class CountAdvertPictureExtension extends \Twig_Extension
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
            new \Twig_SimpleFilter('CountAdvertPicture', array( $this, 'countAdvertPicture'))
        );
    }

    public function countAdvertPicture($advert)
    {
        $count = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->find($advert);

        $array = $count->getPictures()->toArray();

        $com = array();
        foreach($array as $key => $row){

            if($row->getPath() != null){
                $com[$key] = $row;
            }
        }

        return count($com);
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'count_advert_picture';
    }
}
