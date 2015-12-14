<?php

namespace Snoozit\PlatformBundle\Entity;
use Doctrine\ORM\EntityRepository;


class AdvertNegoceRepository extends EntityRepository
{
    // Renvoi les annonces en négociations
    public function findUserAdvertInNegoce($user)
    {
        $qb = $this->createQueryBuilder('a');

        $qb->leftJoin('a.advert' , 'b')
            ->where('b.user = :user')
            ->setParameter('user', $user);

        $result = $qb->getQuery()->getResult();

        return $result;
    }

    public function getAdvertInNegoceFor($user)
    {
        $qb = $this->createQueryBuilder('a');

        $qb->leftJoin('a.advert' , 'b')
            ->select('count(a)')
            ->where('b.user = :user')
            ->setParameter('user', $user);

        $result = $qb->getQuery()->getSingleScalarResult();

        return $result;
    }

    // Renvoi le nombre d'annonces succitants de l'interet ayant pour créateur l'utilisateur transmis et dans les 24 dernieres heures
    public function getAdvertNegoceFor($user, $lastDay)
    {
        $qb = $this->createQueryBuilder('a');

        $qb->leftJoin('a.advert' , 'b')
            ->select('count(a)')
            ->where('a.created >= :lastday')
            ->andWhere('b.user = :user')
            ->setParameters(array('user' => $user, 'lastday' => $lastDay));

        $result = $qb->getQuery()->getSingleScalarResult();

        return $result;
    }

    public function countNegoceForUserAdvertByWeek($user, $week)
    {
        $qb = $this->createQueryBuilder('a');

        $qb->leftJoin('a.advert' , 'b')
            ->select('count(a)')
            ->where('a.created >= :week')
            ->andWhere('b.user = :user')
            ->setParameters(array('user' => $user, 'week' => $week));

        $result = $qb->getQuery()->getSingleScalarResult();

        return $result;
    }
}