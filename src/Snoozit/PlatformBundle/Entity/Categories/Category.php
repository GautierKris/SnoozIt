<?php

namespace Snoozit\PlatformBundle\Entity\Categories;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;


/**
 * Category
 *
 * @ORM\Table(name="sz_category")
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\Categories\CategoryRepository")
 */
class Category
{
    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\Categories\ParentCategory", cascade={"persist"}))
     * @ORM\JoinColumn(nullable = false)
     */
    private $parentcategory;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="category", type="string", length=255)
     */
    private $category;

    /**
     * @Gedmo\Slug(fields={"category"})
     * @ORM\Column(length=128)
     */
    private $slug;

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set category
     *
     * @param string $category
     * @return Category
     */
    public function setCategory($category)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get category
     *
     * @return string 
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Set parentcategory
     *
     * @param \Snoozit\PlatformBundle\Entity\Categories\ParentCategory $parentcategory
     * @return Category
     */
    public function setParentcategory(\Snoozit\PlatformBundle\Entity\Categories\ParentCategory $parentcategory)
    {
        $this->parentcategory = $parentcategory;

        return $this;
    }

    /**
     * Get parentcategory
     *
     * @return \Snoozit\PlatformBundle\Entity\Categories\ParentCategory
     */
    public function getParentcategory()
    {
        return $this->parentcategory;
    }

    /**
     * Set slug
     *
     * @param string $slug
     * @return Category
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * Get slug
     *
     * @return string 
     */
    public function getSlug()
    {
        return $this->slug;
    }
}
