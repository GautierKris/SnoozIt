<?php

namespace Snoozit\PlatformBundle\Entity\Categories;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Parentscategory
 *
 * @ORM\Table(name="sz_parentscategory")
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\Categories\ParentCategoryRepository")
 */
class ParentCategory
{
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
     * @ORM\Column(name="parent", type="string", length=255)
     */
    private $parent;

    /**
     * @var string
     * @ORM\Column(name="ico", type="string", length=20)
     */
    private $ico;

    /**
     * @Gedmo\Slug(fields={"parent"})
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
     * Set parent
     *
     * @param string $parent
     * @return ParentCategory
     */
    public function setParent($parent)
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * Get parent
     *
     * @return string
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Set ico
     *
     * @param string $ico
     * @return ParentCategory
     */
    public function setIco($ico)
    {
        $this->ico = $ico;

        return $this;
    }

    /**
     * Get ico
     *
     * @return string 
     */
    public function getIco()
    {
        return $this->ico;
    }

    /**
     * Set slug
     *
     * @param string $slug
     * @return ParentCategory
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
