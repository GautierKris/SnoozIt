<?php

namespace Snoozit\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Gedmo\Mapping\Annotation as Gedmo;
use Snoozit\PlatformBundle\Validator\Constraints\GuestUsernameValid;

/**
 * Guest
 *
 * @ORM\Table(name="sz_guest")
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\GuestRepository")
 */
class Guest
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
     * @ORM\Column(name="created", type="datetime")
     * @Gedmo\Timestampable(on="create")
     */
    private $created;

    /**
     * @ORM\Column(name="username", type="string", length=40)
     * @Assert\NotBlank(
     *      message="Veuillez saisir un nom d'utilisateur"
     * )
     * @Assert\Regex(
     *     pattern="/^[a-zA-Z_0-9]+$/",
     *     message="Votre nom doit comporter que des lettres ou chiffres"
     * )
     * @GuestUsernameValid()
     */
    private $username;

    /**
     * @var string
     * @Assert\NotBlank(
     *      message="Une adresse email est requise"
     * )
     * @ORM\Column(name="email", type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     * @Assert\Regex(
     *     pattern="/^[0-9]+$/",
     *     message="Un numéro de téléphone ne peu comporter que des chiffres"
     * )
     * @Assert\Length(
     *      min = "9",
     *      max = "10",
     *      minMessage = "Votre numéro doit faire au moins {{ limit }} caractères.",
     *      maxMessage = "Votre numéro ne peut pas être plus long que {{ limit }} caractères."
     * )
     */
    private $phone;

    /**
     * @ORM\Column(type="boolean")
     */
    private $showphone;


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
     * @return Guest
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
     * Set username
     *
     * @param string $username
     * @return Guest
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get username
     *
     * @return string 
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return Guest
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string 
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set phone
     *
     * @param string $phone
     * @return Guest
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get phone
     *
     * @return string 
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Set showphone
     *
     * @param boolean $showphone
     * @return Guest
     */
    public function setShowphone($showphone)
    {
        $this->showphone = $showphone;

        return $this;
    }

    /**
     * Get showphone
     *
     * @return boolean 
     */
    public function getShowphone()
    {
        return $this->showphone;
    }
}
