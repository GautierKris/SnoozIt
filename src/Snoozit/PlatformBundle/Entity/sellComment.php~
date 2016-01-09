<?php

namespace Snoozit\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;


/**
 * sellComment
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\sellCommentRepository")
 */
class sellComment
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
     * @ORM\Column(name="content", type="string", length=255)
     */
    protected $content;

    /**
     * @ORM\ManyToOne(targetEntity = "Snoozit\UserBundle\Entity\User", inversedBy="sellComments", cascade={"persist", "remove"} )
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id", onDelete="CASCADE")
     */
    protected $user;

    /**
     * @var \DateTime $created

     * @ORM\Column(name="created", type="datetime")
     * @Gedmo\Timestampable(on="create")
     */
    protected $created;

    /**
     * @ORM\ManyToOne(targetEntity = "Snoozit\PlatformBundle\Entity\AdvertInterest", inversedBy="sellComments", cascade={"persist", "remove"} )
     * @ORM\JoinColumn(name="advert_interest_id", referencedColumnName="id", onDelete="CASCADE")
     */
    protected $advertInterest;


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
     * Set content
     *
     * @param string $content
     * @return sellComment
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
     * Set created
     *
     * @param \DateTime $created
     * @return sellComment
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
     * Set user
     *
     * @param \Snoozit\UserBundle\Entity\User $user
     * @return sellComment
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
     * Set advertInterest
     *
     * @param \Snoozit\PlatformBundle\Entity\AdvertInterest $advertInterest
     * @return sellComment
     */
    public function setAdvertInterest(\Snoozit\PlatformBundle\Entity\AdvertInterest $advertInterest = null)
    {
        $this->advertInterest = $advertInterest;

        return $this;
    }

    /**
     * Get advertInterest
     *
     * @return \Snoozit\PlatformBundle\Entity\AdvertInterest 
     */
    public function getAdvertInterest()
    {
        return $this->advertInterest;
    }
}
