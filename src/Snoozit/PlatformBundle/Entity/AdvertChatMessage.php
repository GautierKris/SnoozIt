<?php

namespace Snoozit\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * AdvertChatMessage
 *
 * @ORM\Table(name="sz_advert_chat_message")
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\AdvertChatMessageRepository")
 */
class AdvertChatMessage
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
     * @ORM\Column(type="text", type="string")
     * @Assert\NotBlank(
     *      message = "Votre message est vide"
     * )
     */
    protected $message;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\UserBundle\Entity\User")
     */
    protected $user;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\AdvertChatEngine")
     */
    protected $chatEngineId;


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
     * Set message
     *
     * @param string $message
     * @return AdvertChatMessage
     */
    public function setMessage($message)
    {
        $this->message = $message;

        return $this;
    }

    /**
     * Get message
     *
     * @return string 
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * Set user
     *
     * @param \Snoozit\UserBundle\Entity\User $user
     * @return AdvertChatMessage
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
     * Set chatEngineId
     *
     * @param \Snoozit\PlatformBundle\Entity\AdvertChatEngine $chatEngineId
     * @return AdvertChatMessage
     */
    public function setChatEngineId(\Snoozit\PlatformBundle\Entity\AdvertChatEngine $chatEngineId = null)
    {
        $this->chatEngineId = $chatEngineId;

        return $this;
    }

    /**
     * Get chatEngineId
     *
     * @return \Snoozit\PlatformBundle\Entity\AdvertChatEngine 
     */
    public function getChatEngineId()
    {
        return $this->chatEngineId;
    }
}
