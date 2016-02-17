<?php

namespace Snoozit\UserBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Gedmo\Mapping\Annotation as Gedmo;
use Snoozit\PlatformBundle\Validator\Constraints\AntiSpaceWord;

/**
 * @ORM\Entity(repositoryClass="Snoozit\UserBundle\Entity\UserRepository")
 * @ORM\Table(name="fos_user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     * @AntiSpaceWord()
     */
    protected $username;

    /**
     * @ORM\Column(type="string", length=40, nullable=true)
     * @Assert\Regex(
     *     pattern="/^[a-zA-Z_]+$/",
     *     message="Votre prénom ne peut contenir que des lettres"
     * )
     */
    protected $firstname;

    /**
     * @ORM\Column(type="string", length=40, nullable=true)
     * @Assert\Regex(
     *     pattern="/^[a-zA-Z_]+$/",
     *     message="Votre nom ne peut contenir que des lettres"
     * )
     */
    protected $name;

    /**
     * @ORM\Column(type="text", length=10, nullable=true)
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
    protected $phone;

    /**
     * @ORM\Column(type="boolean")
     */
    protected $showphone;

    /**
     * @ORM\Column(type="datetime",nullable=true)
     */
    protected $age;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    protected $finalword;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    protected $last_activity;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\Localisation\City", cascade={"persist"} )
     * @ORM\JoinColumn(name="city_id", referencedColumnName="id", nullable=false)
     * @Assert\NotNull(message = "Veuillez sélectionner une ville")
     */
    protected $city;

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\UserBundle\Entity\Avatar")
     */
    protected  $avatar;

    /**
     * @ORM\OneToOne(targetEntity = "Snoozit\PlatformBundle\Entity\Notification", mappedBy="user", cascade={"persist", "remove"})
     */
    protected $notifications;

    /**
     * @ORM\ManyToMany(targetEntity="Snoozit\PlatformBundle\Entity\Categories\Category", cascade={"persist", "remove"})
     */
    protected $followedcategories;

    /**
     * @ORM\ManyToMany(targetEntity="Snoozit\PlatformBundle\Entity\Localisation\Region", cascade={"persist", "remove"})
     */
    protected $followedregion;

    /**
     * @ORM\ManyToMany(targetEntity="Snoozit\PlatformBundle\Entity\Localisation\Departement", cascade={"persist", "remove"})
     */
    protected $followeddepartement;

    /**
     * @ORM\ManyToMany(targetEntity="Snoozit\PlatformBundle\Entity\Localisation\City", cascade={"persist", "remove"})
     */
    protected $followedcity;

    /**
     * @ORM\ManyToMany(targetEntity="Snoozit\UserBundle\Entity\User", cascade={"persist", "remove"})
     */
    protected $followeduser;

    /**
     * @ORM\Column(type="integer", length=5)
     */
    protected $totalFollower;

    /**
     * @var \DateTime $created

     * @ORM\Column(name="created", type="datetime")
     * @Gedmo\Timestampable(on="create")
     */
    protected $created;

    /**
     * @var boolean
     *
     * @ORM\Column(name="tutonotification", type="boolean", nullable=true)
     */
    protected $tutonotification;

    /**
     * @ORM\OneToMany(targetEntity="Snoozit\PlatformBundle\Entity\UserLog",  mappedBy="user", cascade={"persist", "remove"})
     * @ORM\OrderBy({ "created" = "desc" })
     */
    protected $userLogs;

    /**
     * @ORM\OneToMany(targetEntity="Snoozit\PlatformBundle\Entity\UserProfileComment", mappedBy="userProfile", cascade={"persist", "remove"})
     * @ORM\OrderBy({ "created" = "desc" })
     */
    protected $profileComments;

    /**
     * @ORM\ManyToMany(targetEntity="Snoozit\UserBundle\Entity\User", mappedBy="hiddenUsers", cascade={"persist", "remove"})
     */
    protected $hiddenUsersChild;

    /**
     * @ORM\ManyToMany(targetEntity="Snoozit\UserBundle\Entity\User", inversedBy="hiddenUsersChild", cascade={"persist", "remove"})
     * @ORM\JoinTable(name="sz_hidden_user")
     */
    protected $hiddenUsers;

    /**
     * @ORM\OneToMany(targetEntity="Snoozit\PlatformBundle\Entity\AdvertInterest", mappedBy="user", cascade={"persist", "remove"})
     * @ORM\OrderBy({ "created" = "desc" })
     */
    protected $interests;

    /**
 * @ORM\OneToMany(targetEntity="Snoozit\UserBundle\Entity\Evaluation", mappedBy="evaluated", cascade={"persist", "remove"})
 * @ORM\OrderBy({ "created" = "desc" })
 */
    private $note;

    /**
     * @ORM\OneToMany(targetEntity="Snoozit\PlatformBundle\Entity\Advert", mappedBy="user", cascade={"persist", "remove"})
     * @ORM\OrderBy({ "created" = "desc" })
     */
    private $adverts;

    public function __construct()
    {
        parent::__construct();
        $this->userLogs = new ArrayCollection();
        $this->hiddenUsers = new ArrayCollection();
        $this->profileComments = new ArrayCollection();
        $this->interests = new ArrayCollection();
        $this->note = new ArrayCollection();
        $this->adverts = new ArrayCollection();
        $this->showphone = true;
        $this->last_activity = new \DateTime();
        $this->totalFollower = 0;
        $this->tutonotification = true;
    }

    // Pour connetre l'évaluation du membre
    public function getScore()
    {

        if(!$this->getNote()){
            return null;
        }

        // Initialisation des variables
        $totalEvaluation = count($this->getNote());
        $note1 = 0;
        $note2 = 0;
        $note3 = 0;
        $note4 = 0;
        $note5 = 0;


        foreach($this->getNote() as $row)
        {
            if($row->getNote() == 5){
                $note5 += 5;
            }
            if($row->getNote() == 4){
                $note4 += 4;
            }
            if($row->getNote() == 3){
                $note3 += 3;
            }
            if($row->getNote() == 2){
                $note2 += 2;
            }
            if($row->getNote() == 1){
                $note1 += 1;
            }
        }

        $totalNote = $note1+$note2+$note3+$note4+$note5;

        if($totalNote !=0){
            $result = $totalNote/$totalEvaluation;
        }else{
            $result = 0;
        }

        return $result;
    }

    /* Liste des method utilise pour l'affiche  des utilisateurs connectés */
    public function isOnline()
    {
        $now = new \DateTime();
        $now->modify('-5 minutes');

        if($this->getLastActivity() < $now){
            return false;
        }

        return true;
    }

    /* Compte le nombre d'abonnements  */
    public function totalAbonnement()
    {
        return count($this->getFollowedcategories()->toArray()+$this->getFollowedcity()->toArray()+$this->getFolloweddepartement()->toArray()+ $this->getFollowedregion()->toArray()+$this->getFolloweduser()->toArray());
    }

    /* Compte les annonces vendues */
    public function totalSolded()
    {
        $adverts = $this->getAdverts();
        $count = 0;

        if($adverts){
            foreach ($adverts as $advert) {
                if($advert->getSold()){
                    $count += 1;
                }
            }
        }

        return $count;
    }

    /**
     * Set firstname
     *
     * @param string $firstname
     * @return User
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * Get firstname
     *
     * @return string 
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return User
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set phone
     *
     * @param string $phone
     * @return User
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
     * @return User
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

    /**
     * Set age
     *
     * @param \DateTime $age
     * @return User
     */
    public function setAge($age)
    {
        $this->age = $age;

        return $this;
    }

    /**
     * Get age
     *
     * @return \DateTime 
     */
    public function getAge()
    {
        return $this->age;
    }

    /**
     * Set finalword
     *
     * @param string $finalword
     * @return User
     */
    public function setFinalword($finalword)
    {
        $this->finalword = $finalword;

        return $this;
    }

    /**
     * Get finalword
     *
     * @return string 
     */
    public function getFinalword()
    {
        return $this->finalword;
    }

    /**
     * Set last_activity
     *
     * @param \DateTime $lastActivity
     * @return User
     */
    public function setLastActivity($lastActivity)
    {
        $this->last_activity = $lastActivity;

        return $this;
    }

    /**
     * Get last_activity
     *
     * @return \DateTime 
     */
    public function getLastActivity()
    {
        return $this->last_activity;
    }

    /**
     * Set city
     *
     * @param \Snoozit\PlatformBundle\Entity\Localisation\City $city
     * @return User
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

    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Add userLogs
     *
     * @param \Snoozit\PlatformBundle\Entity\UserLog $userLogs
     * @return User
     */
    public function addUserLog(\Snoozit\PlatformBundle\Entity\UserLog $userLogs)
    {
        $this->userLogs[] = $userLogs;

        return $this;
    }

    /**
     * Remove userLogs
     *
     * @param \Snoozit\PlatformBundle\Entity\UserLog $userLogs
     */
    public function removeUserLog(\Snoozit\PlatformBundle\Entity\UserLog $userLogs)
    {
        $this->userLogs->removeElement($userLogs);
    }

    /**
     * Get userLogs
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getUserLogs()
    {
        return $this->userLogs;
    }

    /**
     * Set avatar
     *
     * @param \Snoozit\UserBundle\Entity\Avatar $avatar
     * @return User
     */
    public function setAvatar(\Snoozit\UserBundle\Entity\Avatar $avatar = null)
    {
        $this->avatar = $avatar;

        return $this;
    }

    /**
     * Get avatar
     *
     * @return \Snoozit\UserBundle\Entity\Avatar 
     */
    public function getAvatar()
    {
        return $this->avatar;
    }

    /**
     * Set notifications
     *
     * @param \Snoozit\UserBundle\Entity\User $notifications
     * @return User
     */
    public function setNotifications(\Snoozit\PlatformBundle\Entity\Notification $notifications = null)
    {
        $this->notifications = $notifications;

        return $this;
    }

    /**
     * Get notifications
     *
     * @return \Snoozit\UserBundle\Entity\User 
     */
    public function getNotifications()
    {
        return $this->notifications;
    }

    /**
     * Add followedcategories
     *
     * @param \Snoozit\PlatformBundle\Entity\Categories\Category $followedcategories
     * @return User
     */
    public function addFollowedcategory(\Snoozit\PlatformBundle\Entity\Categories\Category $followedcategories)
    {
        $this->followedcategories[] = $followedcategories;

        return $this;
    }

    /**
     * Remove followedcategories
     *
     * @param \Snoozit\PlatformBundle\Entity\Categories\Category $followedcategories
     */
    public function removeFollowedcategory(\Snoozit\PlatformBundle\Entity\Categories\Category $followedcategories)
    {
        $this->followedcategories->removeElement($followedcategories);
    }

    /**
     * Get followedcategories
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getFollowedcategories()
    {
        return $this->followedcategories;
    }

    /**
     * Add followedregion
     *
     * @param \Snoozit\PlatformBundle\Entity\Localisation\Region $followedregion
     * @return User
     */
    public function addFollowedregion(\Snoozit\PlatformBundle\Entity\Localisation\Region $followedregion)
    {
        $this->followedregion[] = $followedregion;

        return $this;
    }

    /**
     * Remove followedregion
     *
     * @param \Snoozit\PlatformBundle\Entity\Localisation\Region $followedregion
     */
    public function removeFollowedregion(\Snoozit\PlatformBundle\Entity\Localisation\Region $followedregion)
    {
        $this->followedregion->removeElement($followedregion);
    }

    /**
     * Get followedregion
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getFollowedregion()
    {
        return $this->followedregion;
    }

    /**
     * Add followeddepartement
     *
     * @param \Snoozit\PlatformBundle\Entity\Localisation\Departement $followeddepartement
     * @return User
     */
    public function addFolloweddepartement(\Snoozit\PlatformBundle\Entity\Localisation\Departement $followeddepartement)
    {
        $this->followeddepartement[] = $followeddepartement;

        return $this;
    }

    /**
     * Remove followeddepartement
     *
     * @param \Snoozit\PlatformBundle\Entity\Localisation\Departement $followeddepartement
     */
    public function removeFolloweddepartement(\Snoozit\PlatformBundle\Entity\Localisation\Departement $followeddepartement)
    {
        $this->followeddepartement->removeElement($followeddepartement);
    }

    /**
     * Get followeddepartement
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getFolloweddepartement()
    {
        return $this->followeddepartement;
    }

    /**
     * Add followedcity
     *
     * @param \Snoozit\PlatformBundle\Entity\Localisation\City $followedcity
     * @return User
     */
    public function addFollowedcity(\Snoozit\PlatformBundle\Entity\Localisation\City $followedcity)
    {
        $this->followedcity[] = $followedcity;

        return $this;
    }

    /**
     * Remove followedcity
     *
     * @param \Snoozit\PlatformBundle\Entity\Localisation\City $followedcity
     */
    public function removeFollowedcity(\Snoozit\PlatformBundle\Entity\Localisation\City $followedcity)
    {
        $this->followedcity->removeElement($followedcity);
    }

    /**
     * Get followedcity
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getFollowedcity()
    {
        return $this->followedcity;
    }

    /**
     * Add followeduser
     *
     * @param \Snoozit\UserBundle\Entity\User $followeduser
     * @return User
     */
    public function addFolloweduser(\Snoozit\UserBundle\Entity\User $followeduser)
    {
        $this->followeduser[] = $followeduser;

        return $this;
    }

    /**
     * Remove followeduser
     *
     * @param \Snoozit\UserBundle\Entity\User $followeduser
     */
    public function removeFolloweduser(\Snoozit\UserBundle\Entity\User $followeduser)
    {
        $this->followeduser->removeElement($followeduser);
    }

    /**
     * Get followeduser
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getFolloweduser()
    {
        return $this->followeduser;
    }

    /**
     * Set totalFollower
     *
     * @param integer $totalFollower
     * @return User
     */
    public function setTotalFollower($totalFollower)
    {
        $this->totalFollower = $totalFollower;

        return $this;
    }

    /**
     * Get totalFollower
     *
     * @return integer 
     */
    public function getTotalFollower()
    {
        return $this->totalFollower;
    }

    /**
     * Set created
     *
     * @param \DateTime $created
     * @return User
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
     * Set tutonotification
     *
     * @param boolean $tutonotification
     * @return User
     */
    public function setTutonotification($tutonotification)
    {
        $this->tutonotification = $tutonotification;

        return $this;
    }

    /**
     * Get tutonotification
     *
     * @return boolean 
     */
    public function getTutonotification()
    {
        return $this->tutonotification;
    }

    /**
     * Add profileComments
     *
     * @param \Snoozit\PlatformBundle\Entity\UserProfileComment $profileComments
     * @return User
     */
    public function addProfileComment(\Snoozit\PlatformBundle\Entity\UserProfileComment $profileComments)
    {
        $this->profileComments[] = $profileComments;

        return $this;
    }

    /**
     * Remove profileComments
     *
     * @param \Snoozit\PlatformBundle\Entity\UserProfileComment $profileComments
     */
    public function removeProfileComment(\Snoozit\PlatformBundle\Entity\UserProfileComment $profileComments)
    {
        $this->profileComments->removeElement($profileComments);
    }

    /**
     * Get profileComments
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getProfileComments()
    {
        return $this->profileComments;
    }

    /**
     * Add hiddenUsers
     *
     * @param \Snoozit\UserBundle\Entity\User $hiddenUsers
     * @return User
     */
    public function addHiddenUser(\Snoozit\UserBundle\Entity\User $hiddenUsers)
    {
        $this->hiddenUsers[] = $hiddenUsers;

        return $this;
    }

    /**
     * Remove hiddenUsers
     *
     * @param \Snoozit\UserBundle\Entity\User $hiddenUsers
     */
    public function removeHiddenUser(\Snoozit\UserBundle\Entity\User $hiddenUsers)
    {
        $this->hiddenUsers->removeElement($hiddenUsers);
    }

    /**
     * Get hiddenUsers
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getHiddenUsers()
    {
        return $this->hiddenUsers;
    }

    /**
     * Add hiddenUsersChild
     *
     * @param \Snoozit\UserBundle\Entity\User $hiddenUsersChild
     * @return User
     */
    public function addHiddenUsersChild(\Snoozit\UserBundle\Entity\User $hiddenUsersChild)
    {
        $this->hiddenUsersChild[] = $hiddenUsersChild;

        return $this;
    }

    /**
     * Remove hiddenUsersChild
     *
     * @param \Snoozit\UserBundle\Entity\User $hiddenUsersChild
     */
    public function removeHiddenUsersChild(\Snoozit\UserBundle\Entity\User $hiddenUsersChild)
    {
        $this->hiddenUsersChild->removeElement($hiddenUsersChild);
    }

    /**
     * Get hiddenUsersChild
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getHiddenUsersChild()
    {
        return $this->hiddenUsersChild;
    }

    /**
     * Add interests
     *
     * @param \Snoozit\PlatformBundle\Entity\AdvertInterest $interests
     * @return User
     */
    public function addInterest(\Snoozit\PlatformBundle\Entity\AdvertInterest $interests)
    {
        $this->interests[] = $interests;

        return $this;
    }

    /**
     * Remove interests
     *
     * @param \Snoozit\PlatformBundle\Entity\AdvertInterest $interests
     */
    public function removeInterest(\Snoozit\PlatformBundle\Entity\AdvertInterest $interests)
    {
        $this->interests->removeElement($interests);
    }

    /**
     * Get interests
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getInterests()
    {
        return $this->interests;
    }

    /**
     * Add note
     *
     * @param \Snoozit\UserBundle\Entity\Evaluation $note
     * @return User
     */
    public function addNote(\Snoozit\UserBundle\Entity\Evaluation $note)
    {
        $this->note[] = $note;

        return $this;
    }

    /**
     * Remove note
     *
     * @param \Snoozit\UserBundle\Entity\Evaluation $note
     */
    public function removeNote(\Snoozit\UserBundle\Entity\Evaluation $note)
    {
        $this->note->removeElement($note);
    }

    /**
     * Get note
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getNote()
    {
        return $this->note;
    }

    /**
     * Add adverts
     *
     * @param \Snoozit\PlatformBundle\Entity\Advert $adverts
     * @return User
     */
    public function addAdvert(\Snoozit\PlatformBundle\Entity\Advert $adverts)
    {
        $this->adverts[] = $adverts;

        return $this;
    }

    /**
     * Remove adverts
     *
     * @param \Snoozit\PlatformBundle\Entity\Advert $adverts
     */
    public function removeAdvert(\Snoozit\PlatformBundle\Entity\Advert $adverts)
    {
        $this->adverts->removeElement($adverts);
    }

    /**
     * Get adverts
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getAdverts()
    {
        return $this->adverts;
    }
}
