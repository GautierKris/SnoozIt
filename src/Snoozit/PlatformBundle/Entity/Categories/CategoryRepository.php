<?php

namespace Snoozit\PlatformBundle\Entity\Categories;

use Doctrine\ORM\EntityRepository;


class CategoryRepository extends EntityRepository{

    public function Category($parentcategory)
    {
        $qb = $this->createQueryBuilder('c')
            ->where('c.parentcategory = :parentcategory')
            ->setParameter('parentcategory', $parentcategory);

        return $qb->getQuery()->getArrayResult();
    }

}

