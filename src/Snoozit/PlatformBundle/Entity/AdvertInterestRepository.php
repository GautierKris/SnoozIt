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
            ->andWhere('b.sold = false')
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
            ->andWhere('a.advertOptionType != 4')
            ->orderBy('a.updated' , 'DESC')
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
            ->andWhere('c.id = :status or c.id = 9');
        $qb->setParameters(array('user' => $user, 'status' => $status));



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

    // Renvoi les interets archivé
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

    private function trie_par_date($a, $b) {

        if(is_array($a)){
            $datea = $a['updated'];
        }else{
            $datea = $a->getUpdated();
        }

        if(is_array($b)){
            $dateb = $b['updated'];
        }else{
            $dateb = $b->getUpdated();
        }
        $date1 = strtotime($datea->format('r'));
        $date2 = strtotime($dateb->format('r'));
        return $date1 < $date2 ;
    }


    // Renvoi les notification des interets à valider pour le breadcrumb
    public function getInterestNotification($user)
    {
        $qb = $this->createQueryBuilder('a');
        $qb1 = $this->createQueryBuilder('a');

        $list = array(6,7,9,4,10,11,1,3,2);

        // ON RÉCUPERE LES ANNONCES AVEC LE STATUT 1
        $qb->leftJoin('a.advert' , 'b')
            ->where('b.user != :user') // L'utilisateur n'est pas le créateur de l'annonce
            ->andWhere('a.user = :user') // L'utilisateur est le créateur de l'interet
            ->andWhere('a.advertOptionType IN (:list)') // Si option est dans la liste "$list"
            ->andWhere('a.customerFade = 0') // ou CustomerFade est a false
            ->andWhere('b.guest = 0')
            ->setParameters(array('user' => $user, 'list' => $list));

        $result = $qb->getQuery()->getResult();

        // ON RÉCUPERE LES ANNONCES AVEC LE STATUT 1
        $qb1->leftJoin('a.advert' , 'b')
            ->where('b.user = :user') // L'utilisateur n'est pas le créateur de l'annonce
            ->andWhere('a.user != :user and a.advertOptionType IN (:list)') // L'utilisateur est le créateur de l'interet
            ->andWhere('a.advertOptionType IN (:list)') // Si option est dans la liste "$list"
            ->andWhere('a.ownerFade = 0') // ou CustomerFade est a false
            ->andWhere('b.guest = 0')
            ->setParameters(array('user' => $user, 'list' => $list));

        $result1 = $qb1->getQuery()->getResult();


        $resultFinal = array_merge($result, $result1);

        usort($resultFinal, array($this, 'trie_par_date'));


        return $resultFinal;
    }



}
