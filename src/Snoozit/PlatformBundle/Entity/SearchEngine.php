<?php

namespace Snoozit\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;


/**
 * SearchEngine
 *
 * @ORM\Table(name="sz_search_engine")
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\SearchEngineRepository")
 */
class SearchEngine
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
     * @Gedmo\Slug(fields={"search"}, unique=false)
     * @ORM\Column(length=128, nullable=true)
     */
    private $slug;

    /**
     * @var string
     *
     * @ORM\Column(name="search", type="string", length=100, nullable=true)
     */
    private $search;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\Categories\Category")
     */
    private $category;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\Localisation\Region")
     */
    private $region;

    /**
     * @var \DateTime $created

     * @ORM\Column(name="created", type="datetime")
     * @Gedmo\Timestampable(on="create")
     */
    private $created;

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
     * Set search
     *
     * @param string $search
     * @return SearchEngine
     */
    public function setSearch($search)
    {
        $this->search = $search;

        return $this;
    }

    /**
     * Get search
     *
     * @return string 
     */
    public function getSearch()
    {
        return $this->search;
    }

    /**
     * Set category
     *
     * @param \Snoozit\PlatformBundle\Entity\Categories\Category $category
     * @return SearchEngine
     */
    public function setCategory(\Snoozit\PlatformBundle\Entity\Categories\Category $category = null)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get category
     *
     * @return \Snoozit\PlatformBundle\Entity\Categories\Category 
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Set region
     *
     * @param \Snoozit\PlatformBundle\Entity\Localisation\Region $region
     * @return SearchEngine
     */
    public function setRegion(\Snoozit\PlatformBundle\Entity\Localisation\Region $region = null)
    {
        $this->region = $region;

        return $this;
    }

    /**
     * Get region
     *
     * @return \Snoozit\PlatformBundle\Entity\Localisation\Region 
     */
    public function getRegion()
    {
        return $this->region;
    }

    /**
     * Set slug
     *
     * @param string $slug
     * @return SearchEngine
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

    /**
     * Set created
     *
     * @param \DateTime $created
     * @return SearchEngine
     */
    public function setCreated($created)
    {
        $this->created = $created;

        return $this;
    }

    /**
     * Get created
     *
     * @return \DateTime 
     */
    public function getCreated()
    {
        return $this->created;
    }
}
