<?php

namespace Snoozit\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * UserProfileCommentToComment
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\UserProfileCommentToCommentRepository")
 */
class UserProfileCommentToComment
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
     * @ORM\ManyToOne(targetEntity = "Snoozit\PlatformBundle\Entity\UserProfileComment" , inversedBy="commentToComments")
     * @ORM\JoinColumn(name="user_profil_comment_id", referencedColumnName="id")
     */
    private $userProfileComment;

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
     * @return UserProfileCommentToComment
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
     * @return UserProfileCommentToComment
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
     * @return UserProfileCommentToComment
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
     * Set userProfileComment
     *
     * @param \Snoozit\PlatformBundle\Entity\UserProfileComment $userProfileComment
     * @return UserProfileCommentToComment
     */
    public function setUserProfileComment(\Snoozit\PlatformBundle\Entity\UserProfileComment $userProfileComment = null)
    {
        $this->userProfileComment = $userProfileComment;

        return $this;
    }

    /**
     * Get userProfileComment
     *
     * @return \Snoozit\PlatformBundle\Entity\UserProfileComment 
     */
    public function getUserProfileComment()
    {
        return $this->userProfileComment;
    }
}
