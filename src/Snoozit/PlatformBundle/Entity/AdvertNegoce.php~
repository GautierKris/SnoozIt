<?php

namespace Snoozit\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * AdvertNegoce
 *
 * @ORM\Table(name="sz_advert_negoce")
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\AdvertNegoceRepository")
 */
class AdvertNegoce
{
    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\UserBundle\Entity\User")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\Advert", inversedBy="negoces")
     * @ORM\JoinColumn(name="advert_id", referencedColumnName="id")
     */
    protected $advert;

    /**
     * @ORM\Column(type="boolean")
     */
    protected $notification;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var integer
     *
     * @ORM\Column(name="price", type="integer", nullable=true)
     * @Assert\NotBlank(
     *      message="Vous devez indiquez votre prix."
     * )
     * @Assert\Regex(
     *     pattern="/^[0-9]+$/",
     *     message="Un tarif ne peut contenir que des chiffres"
     * )
     */
    protected $price;

    /**
     * @var boolean
     *
     * @ORM\Column(name="validate", type="boolean")
     */
    private $validate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime")
     * @Gedmo\Timestampable(on="create")
     */
    private $created;

    /**
     * @var \DateTime $updated
     *
     * @ORM\Column(name="updated", type="datetime")
     * @Gedmo\Timestampable(on="update")
     */
    private $updated;

    /**
     * @var integer
     *
     * @ORM\Column(name="status", type="integer", nullable=true)
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\AdvertOptionType")
     */
    private $advertOptionType;

    public function __construct()
    {
        $this->status   = null; // Initialisé à null donc pas de status
        $this->validate = false;
        $this->notification = false;
    }


    /**
     * Set notification
     *
     * @param boolean $notification
     * @return AdvertNegoce
     */
    public function setNotification($notification)
    {
        $this->notification = $notification;

        return $this;
    }

    /**
     * Get notification
     *
     * @return boolean 
     */
    public function getNotification()
    {
        return $this->notification;
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
     * Set price
     *
     * @param integer $price
     * @return AdvertNegoce
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price
     *
     * @return integer 
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set status
     *
     * @param integer $status
     * @return AdvertNegoce
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Get status
     *
     * @return integer
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set validate
     *
     * @param boolean $validate
     * @return AdvertNegoce
     */
    public function setValidate($validate)
    {
        $this->validate = $validate;

        return $this;
    }

    /**
     * Get validate
     *
     * @return boolean 
     */
    public function getValidate()
    {
        return $this->validate;
    }

    /**
     * Set created
     *
     * @param \DateTime $created
     * @return AdvertNegoce
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
     * Set updated
     *
     * @param \DateTime $updated
     * @return AdvertNegoce
     */
    public function setUpdated($updated)
    {
        $this->updated = $updated;

        return $this;
    }

    /**
     * Get updated
     *
     * @return \DateTime 
     */
    public function getUpdated()
    {
        return $this->updated;
    }

    /**
     * Set user
     *
     * @param \Snoozit\UserBundle\Entity\User $user
     * @return AdvertNegoce
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
     * Set advert
     *
     * @param \Snoozit\PlatformBundle\Entity\Advert $advert
     * @return AdvertNegoce
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
     * Set advertOptionType
     *
     * @param \Snoozit\PlatformBundle\Entity\AdvertOptionType $advertOptionType
     * @return AdvertNegoce
     */
    public function setAdvertOptionType(\Snoozit\PlatformBundle\Entity\AdvertOptionType $advertOptionType = null)
    {
        $this->advertOptionType = $advertOptionType;

        return $this;
    }

    /**
     * Get advertOptionType
     *
     * @return \Snoozit\PlatformBundle\Entity\AdvertOptionType 
     */
    public function getAdvertOptionType()
    {
        return $this->advertOptionType;
    }
}
