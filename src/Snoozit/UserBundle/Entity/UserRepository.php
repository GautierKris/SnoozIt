<?php

namespace Snoozit\UserBundle\Entity;

use Doctrine\ORM\EntityRepository;

class UserRepository extends EntityRepository
{

    // Compte le nombre d'utilisateur potentiellement proposable
    // Sans aucun filtre pour le moment
    private function getCountUserToPropose()
    {
        $qb = $this->createQueryBuilder('u');
        $qb->select('COUNT(u)');

        $result = $qb->getQuery()->getSingleScalarResult();

        return $result;
    }

    // Trouve les infos sur les utilisateurs à proposer
    public function findUserToPropose($user = null, array $followed = null)
    {
        $count = $this->getCountUserToPropose();

        $qb = $this->createQueryBuilder('u');

        $qb->select('u')
            ->setMaxResults($count);

        if($user){

            $qb->where('u.id != :user')
                ->setParameter('user', $user->getId());

            if(!empty($followed)){
                $qb->andWhere('u.id NOT IN (:followed)')
                    ->setParameter('followed', $followed);
            }


        }
        $result = $qb->getQuery()->getResult();

        // Mix le résultat
        shuffle($result);

        // Réorganise le résultat avec 6 résultats maximum
        return array_slice($result, 0, 6, true);

    }

}