<?php

namespace Snoozit\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * AdvertInterest
 *
 * @ORM\Table(name="sz_advert_interest")
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\AdvertInterestRepository")
 */
class AdvertInterest
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
     * @var boolean
     *
     * @ORM\Column(name="notification", type="boolean")
     */
    private $notification;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\UserBundle\Entity\User")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\Advert", inversedBy="interested")
     * @ORM\JoinColumn(name="advert_id", referencedColumnName="id")
     */
    private $advert;

    /**
     * @ORM\Column(name="created", type="datetime")
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
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\AdvertOptionType")
     */
    private $advertOptionType;

    /**
     * @var boolean
     *
     * @ORM\Column(name="owner_fade", type="boolean")
     */
    private $ownerFade;

    /**
     * @var boolean
     *
     * @ORM\Column(name="customer_fade", type="boolean")
     */
    private $customerFade;


    public function __construct()
    {
        $this->notification = true;
        $this->ownerFade = false;
        $this->customerFade = false;
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
     * Set notification
     *
     * @param boolean $notification
     * @return AdvertInterest
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
     * Set created
     *
     * @param \DateTime $created
     * @return AdvertInterest
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
     * @return AdvertInterest
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
     * @return AdvertInterest
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
     * @return AdvertInterest
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
     * @return AdvertInterest
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

    /**
     * Set ownerFade
     *
     * @param boolean $ownerFade
     * @return AdvertInterest
     */
    public function setOwnerFade($ownerFade)
    {
        $this->ownerFade = $ownerFade;

        return $this;
    }

    /**
     * Get ownerFade
     *
     * @return boolean 
     */
    public function getOwnerFade()
    {
        return $this->ownerFade;
    }

    /**
     * Set customerFade
     *
     * @param boolean $customerFade
     * @return AdvertInterest
     */
    public function setCustomerFade($customerFade)
    {
        $this->customerFade = $customerFade;

        return $this;
    }

    /**
     * Get customerFade
     *
     * @return boolean 
     */
    public function getCustomerFade()
    {
        return $this->customerFade;
    }
}
