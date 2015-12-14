<?php
namespace Snoozit\PlatformBundle\Entity\Localisation;

use Doctrine\ORM\EntityRepository;

/**
 * RegionRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class DepartementRepository extends EntityRepository
{

    public function Departement($parentregion)
    {
        $qb = $this->createQueryBuilder('c')
            ->where('c.region = :parentregion')
            ->setParameter('parentregion', $parentregion);

        return $qb->getQuery()->getArrayResult();
    }

}