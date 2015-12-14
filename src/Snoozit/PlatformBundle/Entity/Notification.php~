<?php

namespace Snoozit\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;


/**
 * Notification
 *
 * @ORM\Table(name="sz_user_notification")
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\NotificationRepository")
 */
class Notification
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
     * @ORM\Column(name="follower", type="boolean")
     */
    private $follower;

    /**
     * @var boolean
     *
     * @ORM\Column(name="newsletter", type="boolean")
     */
    private $newsletter;

    /**
     * @var boolean
     *
     * @ORM\Column(name="comment", type="boolean")
     */
    private $comment;

    /**
     * @var boolean
     *
     * @ORM\Column(name="advertNegoce", type="boolean")
     */
    private $advertNegoce;

    /**
     * @var boolean
     *
     * @ORM\Column(name="advertInterest", type="boolean")
     */
    private $advertInterest;

    /**
     * @ORM\OneToOne(targetEntity = "Snoozit\UserBundle\Entity\User", inversedBy="notifications")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id", onDelete="cascade")
     */
    private $user;

    /**
     * @var \DateTime $updated
     *
     * @ORM\Column(name="updated", type="datetime")
     * @Gedmo\Timestampable(on="update")
     */
    private $updated;

    public function __construct()
    {
        $this->newsletter       = true;
        $this->comment          = true;
        $this->follower         = true;
        $this->advertInterest   = true;
        $this->advertNegoce     = true;
    }

    /**
     * Set updated
     *
     * @param \DateTime $updated
     * @return Notification
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
     * @return Notification
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
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set follower
     *
     * @param boolean $follower
     * @return Notification
     */
    public function setFollower($follower)
    {
        $this->follower = $follower;

        return $this;
    }

    /**
     * Get follower
     *
     * @return boolean 
     */
    public function getFollower()
    {
        return $this->follower;
    }

    /**
     * Set newsletter
     *
     * @param boolean $newsletter
     * @return Notification
     */
    public function setNewsletter($newsletter)
    {
        $this->newsletter = $newsletter;

        return $this;
    }

    /**
     * Get newsletter
     *
     * @return boolean 
     */
    public function getNewsletter()
    {
        return $this->newsletter;
    }

    /**
     * Set comment
     *
     * @param boolean $comment
     * @return Notification
     */
    public function setComment($comment)
    {
        $this->comment = $comment;

        return $this;
    }

    /**
     * Get comment
     *
     * @return boolean 
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * Set advertInterest
     *
     * @param boolean $advertInterest
     * @return Notification
     */
    public function setAdvertInterest($advertInterest)
    {
        $this->advertInterest = $advertInterest;

        return $this;
    }

    /**
     * Get advertInterest
     *
     * @return boolean 
     */
    public function getAdvertInterest()
    {
        return $this->advertInterest;
    }

    /**
     * Set advertInterest
     *
     * @param boolean $advertInterest
     * @return Notification
     */
    public function setAdvertNegoce($advertNegoce)
    {
        $this->advertNegoce = $advertNegoce;

        return $this;
    }

    /**
     * Get advertInterest
     *
     * @return boolean
     */
    public function getAdvertNegoce()
    {
        return $this->advertNegoce;
    }
}
