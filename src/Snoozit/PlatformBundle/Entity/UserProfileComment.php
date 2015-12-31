<?php

namespace Snoozit\PlatformBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * UserProfileComment
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\UserProfileCommentRepository")
 */
class UserProfileComment
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
    private $created;

    /**
     * @var string
     *
     * @ORM\Column(name="content", type="text")
     */
    private $content;

    /**
     * @ORM\ManyToOne(targetEntity = "Snoozit\UserBundle\Entity\User", cascade={"persist", "remove"})
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id", nullable=true)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity = "Snoozit\UserBundle\Entity\User", inversedBy="profileComments" )
     * @ORM\JoinColumn(name="user_profile_id", referencedColumnName="id", nullable=true)
     */
    private $userProfile;

    /**
     * @ORM\OneToMany(targetEntity="Snoozit\PlatformBundle\Entity\UserProfileCommentToComment", mappedBy="userProfileComment", cascade={"persist", "remove"})
     * @ORM\OrderBy({ "created" = "desc" })
     */
    private $commentToComments;


    public function __construct()
    {
        $this->commentToComments = new ArrayCollection();
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
     * @return UserProfileComment
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
     * @return UserProfileComment
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
     * @return UserProfileComment
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
     * Set userProfile
     *
     * @param \Snoozit\UserBundle\Entity\User $userProfile
     * @return UserProfileComment
     */
    public function setUserProfile(\Snoozit\UserBundle\Entity\User $userProfile = null)
    {
        $this->userProfile = $userProfile;

        return $this;
    }

    /**
     * Get userProfile
     *
     * @return \Snoozit\UserBundle\Entity\User 
     */
    public function getUserProfile()
    {
        return $this->userProfile;
    }

    /**
     * Add commentToComments
     *
     * @param \Snoozit\PlatformBundle\Entity\UserProfileCommentToComment $commentToComments
     * @return UserProfileComment
     */
    public function addCommentToComment(\Snoozit\PlatformBundle\Entity\UserProfileCommentToComment $commentToComments)
    {
        $this->commentToComments[] = $commentToComments;

        return $this;
    }

    /**
     * Remove commentToComments
     *
     * @param \Snoozit\PlatformBundle\Entity\UserProfileCommentToComment $commentToComments
     */
    public function removeCommentToComment(\Snoozit\PlatformBundle\Entity\UserProfileCommentToComment $commentToComments)
    {
        $this->commentToComments->removeElement($commentToComments);
    }

    /**
     * Get commentToComments
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getCommentToComments()
    {
        return $this->commentToComments;
    }
}
