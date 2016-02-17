<?php

namespace Snoozit\UserBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Evaluation
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Snoozit\UserBundle\Entity\EvaluationRepository")
 */
class Evaluation
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
     * @ORM\ManyToOne(targetEntity = "Snoozit\UserBundle\Entity\User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity = "Snoozit\UserBundle\Entity\User", inversedBy="note")
     * @ORM\JoinColumn(name="evaluated_member_id", referencedColumnName="id")
     */
    private $evaluated;

    /**
     * @ORM\Column(type="integer", length=1)
     */
    private $note;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="created", type="datetime")
     * @Gedmo\Timestampable(on="create")
     */
    private $created;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="updated_at",type="datetime", nullable=true)
     */
    private $updatedAt;


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
     * Set note
     *
     * @param integer $note
     * @return Evaluation
     */
    public function setNote($note)
    {
        $this->note = $note;

        return $this;
    }

    /**
     * Get note
     *
     * @return integer 
     */
    public function getNote()
    {
        return $this->note;
    }

    /**
     * Set created
     *
     * @param \DateTime $created
     * @return Evaluation
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
     * Set updatedAt
     *
     * @param \DateTime $updatedAt
     * @return Evaluation
     */
    public function setUpdatedAt($updatedAt)
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * Get updatedAt
     *
     * @return \DateTime 
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Set user
     *
     * @param \Snoozit\UserBundle\Entity\User $user
     * @return Evaluation
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
     * Set evaluated
     *
     * @param \Snoozit\UserBundle\Entity\User $evaluated
     * @return Evaluation
     */
    public function setEvaluated(\Snoozit\UserBundle\Entity\User $evaluated = null)
    {
        $this->evaluated = $evaluated;

        return $this;
    }

    /**
     * Get evaluated
     *
     * @return \Snoozit\UserBundle\Entity\User 
     */
    public function getEvaluated()
    {
        return $this->evaluated;
    }
}
