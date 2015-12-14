<?php

namespace Snoozit\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * UserLog
 *
 * @ORM\Table(name="sz_user_log")
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\UserLogRepository")
 */
class UserLog
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
     * @var \DateTime $created

     * @ORM\Column(name="created", type="datetime")
     * @Gedmo\Timestampable(on="create")
     */
    protected $created;

    /**
     * @var string
     *
     * @ORM\Column(name="content", type="text")
     */
    protected $content;

    /**
     * @ORM\ManyToOne(targetEntity = "Snoozit\UserBundle\Entity\User", inversedBy="userLogs", cascade={"persist", "remove"} )
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id", onDelete="CASCADE")
     */
    protected $user;

    /**
     * @ORM\ManyToOne(targetEntity = "Snoozit\UserBundle\Entity\User",  cascade={"persist", "remove"} )
     * @ORM\JoinColumn(name="user_asked_id", referencedColumnName="id", onDelete="CASCADE")
     */
    protected $userAsked;

    /**
     * @ORM\ManyToOne(targetEntity = "Snoozit\UserBundle\Entity\User",  cascade={"persist", "remove"} )
     * @ORM\JoinColumn(name="owner_id", referencedColumnName="id", onDelete="CASCADE")
     */
    protected $owner;

    /**
     * @ORM\ManyToOne(targetEntity = "Snoozit\PlatformBundle\Entity\NotificationType", cascade={"persist", "remove"} )
     * @ORM\JoinColumn(name="type", referencedColumnName="id", onDelete="CASCADE")
     */
    protected $type;

    /**
     * @ORM\ManyToOne(targetEntity = "Snoozit\PlatformBundle\Entity\Advert", cascade={"persist", "remove"} )
     * @ORM\JoinColumn(name="advert_id", referencedColumnName="id", onDelete="CASCADE", nullable=true)
     */
    protected $advert;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\Categories\Category")
     * @Assert\NotNull(message = "Veuillez séléctionner une categorie")
     */
    protected $category;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\Localisation\City")
     * @ORM\JoinColumn(name="city_id", referencedColumnName="id", onDelete="CASCADE", nullable=true)
     */
    protected $city;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\Localisation\Departement")
     * @ORM\JoinColumn(name="departement_id", referencedColumnName="id", onDelete="CASCADE", nullable=true)
     */
    protected $departement;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\Localisation\Region")
     * @ORM\JoinColumn(name="region_id", referencedColumnName="id", onDelete="CASCADE", nullable=true)
     */
    protected $region;

    public function __construct()
    {

    }

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
     * Set created
     *
     * @param \DateTime $created
     * @return UserLog
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

    /**
     * Set content
     *
     * @param string $content
     * @return UserLog
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get content
     *
     * @return string 
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set user
     *
     * @param \Snoozit\UserBundle\Entity\User $user
     * @return UserLog
     */
    public function setUser(\Snoozit\UserBundle\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \Snoozit\UserBundle\Entity\User 
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Set userAsked
     *
     * @param \Snoozit\UserBundle\Entity\User $userAsked
     * @return UserLog
     */
    public function setUserAsked(\Snoozit\UserBundle\Entity\User $userAsked = null)
    {
        $this->userAsked = $userAsked;

        return $this;
    }

    /**
     * Get userAsked
     *
     * @return \Snoozit\UserBundle\Entity\User 
     */
    public function getUserAsked()
    {
        return $this->userAsked;
    }

    /**
     * Set type
     *
     * @param \Snoozit\PlatformBundle\Entity\NotificationType $type
     * @return UserLog
     */
    public function setType(\Snoozit\PlatformBundle\Entity\NotificationType $type = null)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return \Snoozit\PlatformBundle\Entity\NotificationType 
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set owner
     *
     * @param \Snoozit\UserBundle\Entity\User $owner
     * @return UserLog
     */
    public function setOwner(\Snoozit\UserBundle\Entity\User $owner = null)
    {
        $this->owner = $owner;

        return $this;
    }

    /**
     * Get owner
     *
     * @return \Snoozit\UserBundle\Entity\User 
     */
    public function getOwner()
    {
        return $this->owner;
    }

    /**
     * Set advert
     *
     * @param \Snoozit\PlatformBundle\Entity\Advert $advert
     * @return UserLog
     */
    public function setAdvert(\Snoozit\PlatformBundle\Entity\Advert $advert = null)
    {
        $this->advert = $advert;

        return $this;
    }

    /**
     * Get advert
     *
     * @return \Snoozit\PlatformBundle\Entity\Advert 
     */
    public function getAdvert()
    {
        return $this->advert;
    }

    /**
     * Set category
     *
     * @param \Snoozit\PlatformBundle\Entity\Categories\Category $category
     * @return UserLog
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
     * Set city
     *
     * @param \Snoozit\PlatformBundle\Entity\Localisation\City $city
     * @return UserLog
     */
    public function setCity(\Snoozit\PlatformBundle\Entity\Localisation\City $city = null)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city
     *
     * @return \Snoozit\PlatformBundle\Entity\Localisation\City 
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set departement
     *
     * @param \Snoozit\PlatformBundle\Entity\Localisation\Departement $departement
     * @return UserLog
     */
    public function setDepartement(\Snoozit\PlatformBundle\Entity\Localisation\Departement $departement = null)
    {
        $this->departement = $departement;

        return $this;
    }

    /**
     * Get departement
     *
     * @return \Snoozit\PlatformBundle\Entity\Localisation\Departement 
     */
    public function getDepartement()
    {
        return $this->departement;
    }

    /**
     * Set region
     *
     * @param \Snoozit\PlatformBundle\Entity\Localisation\Region $region
     * @return UserLog
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
}
