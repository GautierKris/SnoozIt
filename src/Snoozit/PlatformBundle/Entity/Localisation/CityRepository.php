<?php

namespace Snoozit\PlatformBundle\Entity\Localisation;

use Doctrine\ORM\EntityRepository;

class CityRepository extends EntityRepository
{
    public function City($parentdepartement)
    {
        $qb = $this->createQueryBuilder('v')
            ->where('v.departement = :parentdepartement')
            ->orderBy('v.nom', 'asc')
            ->setParameter('parentdepartement', $parentdepartement);

        return $qb->getQuery()->getArrayResult();
    }

    public function findCityLike( $term, $limit = 10 )
    {

        $qb = $this->createQueryBuilder('c');
        $qb ->select('c.nom, c.postal')
            ->where('c.nom LIKE :term')
            ->setParameter('term', '%'.$term.'%')
            ->setMaxResults($limit);

        $arrayAss= $qb->getQuery()
            ->getArrayResult();

        // Transformer le tableau associatif en un tableau standard
        $array = array();
        foreach($arrayAss as $data)
        {
            $array[] = array("CodePostal"=>$data['postal'], "City"=>$data['nom']);
        }

        return $array;
    }

    public function findCodesPostauxLike( $term, $limit = 10 )
    {

        $qb = $this->createQueryBuilder('c');
        $qb ->select('c.postal, c.nom')
            ->where('c.postal LIKE :term')
            ->setParameter('term', '%'.$term.'%')
            ->setMaxResults($limit);

        $arrayAss= $qb->getQuery()
            ->getArrayResult();

        // Transformer le tableau associatif en un tableau standard
        $array = array();
        foreach($arrayAss as $data)
        {
            $array[] = array("CodePostal"=>$data['postal'], "City"=>$data['nom']);
        }

        return $array;
    }

}