<?php

namespace Snoozit\PlatformBundle\Entity;

use Doctrine\ORM\EntityRepository;

class AdvertInterestRepository extends EntityRepository
{

    // Renvoi les annonces ayant recu de l'interet pour le créateur donc page interest
    public function findUserAdvertInInterest($user)
    {
        $qb = $this->createQueryBuilder('a');

        $qb->leftJoin('a.advert' , 'b')
            ->where('b.user = :user')
            ->andWhere('a.ownerFade = false')
            ->setParameter('user', $user);

        $result = $qb->getQuery()->getResult();

        return $result;
    }

    // Le panier de l'utilisateur
    public function findAdvertUserInterest($user)
    {
        $qb = $this->createQueryBuilder('a');

        $qb->leftJoin('a.advert' , 'b')
            ->leftJoin('a.advertOptionType', 'c')
            ->where('a.user = :user')
            ->andWhere('a.customerFade = false')
            ->andWhere('a.advertOptionType != 5')
            ->setParameter('user', $user);

        $result = $qb->getQuery()->getResult();

        return $result;
    }

    // Liste des désistement de l'utilisateur
    public function findDashboardUserInterestByStatus($user, $status)
    {
        $qb = $this->createQueryBuilder('a');

        $qb->leftJoin('a.advert' , 'b')
            ->leftJoin('a.advertOptionType', 'c')
            ->where('a.user = :user')
            ->andWhere('c.id = :status')
            ->setParameters(array('user' => $user, 'status' => $status));

        $result = $qb->getQuery()->getResult();

        return $result;
    }

    // Renvoi le nombre d'annonces succitants de l'interet ayant pour créateur l'utilisateur transmis et dans les 24 dernieres heures
    public function getAdvertInterestFor($user, $lastDay)
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

    // Renvoi le nombre total d'annonces succitants de l'interet ayant pour créateur l'utilisateur transmis
    public function countTotalInterestForUserAdvert($user)
    {
        $qb = $this->createQueryBuilder('a');

        $qb->leftJoin('a.advert' , 'b')
            ->select('count(a)')
            ->where('b.user = :user')
            ->andWhere('a.advertOptionType != 3')
            ->setParameter('user', $user);

        $result = $qb->getQuery()->getSingleScalarResult();

        return $result;
    }

    // Renvoi le nombre d'annonce auquel l'utilisateur est interessé
    public function countAdvertUserIsInterested($user)
    {
        $qb = $this->createQueryBuilder('a');

        $qb->leftJoin('a.advert', 'b')
            ->select('count(a)')
            ->where('b.user = :user')
            ->setParameter('user', $user);

        $result = $qb->getQuery()->getSingleScalarResult();

        return $result;
    }

    // Compteur interet par Semaine
    public function countInterestForUserAdvertByWeek($user, $week)
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

    //
    public function getInterestArchives($user)
    {
        $qb = $this->createQueryBuilder('a');

        $qb->leftJoin('a.advert' , 'b')
            ->leftJoin('a.advertOptionType', 'c')
            ->where('b.user = :user')
            ->andWhere('a.advertOptionType = 3 OR a.advertOptionType = 5')
            ->setParameter('user', $user);

        $result = $qb->getQuery()->getResult();

        return $result;
    }

    // Renvoi le panier
    public function countPanier($user)
    {
        $qb = $this->createQueryBuilder('a');

        $qb->leftJoin('a.advertOptionType', 'b')
            ->select('count(a)')
            ->where('a.user = :user')
            ->andWhere('a.advertOptionType != 5')
            ->andWhere('a.advertOptionType != 3')
            ->andWhere('a.advertOptionType != 4')
            ->setParameter('user', $user)
        ;

        $result = $qb->getQuery()->getSingleScalarResult();

        return $result;
    }
}
