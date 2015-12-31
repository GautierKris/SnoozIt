<?php

namespace Snoozit\PlatformBundle\Entity\Localisation;


use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * City
 *
 * @ORM\Table(name="sz_city")
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\Localisation\CityRepository")
 */
class City
{
    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\Localisation\Departement" ,cascade={"persist"})
     * @ORM\JoinColumn(nullable = false)
     */
    private $departement;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @Gedmo\Slug(fields={"nom"})
     * @ORM\Column(length=128, unique=true)
     */
    private $slug;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=128)
     */
    private $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="postal", type="string", length=5)
     */
    private $postal;

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
     * Set slug
     *
     * @param string $slug
     * @return string
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * Get slug
     *
     * @return string 
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * Set nom
     *
     * @param string $nom
     * @return City
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string 
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set postal
     *
     * @param string $postal
     * @return string
     */
    public function setPostal($postal)
    {
        $this->postal = $postal;

        return $this;
    }

    /**
     * Get postal
     *
     * @return string 
     */
    public function getPostal()
    {
        return $this->postal;
    }

    /**
     * Set departement
     *
     * @param \Snoozit\PlatformBundle\Entity\Localisation\Departement $departement
     * @return Departement
     */
    public function setDepartement(\Snoozit\PlatformBundle\Entity\Localisation\Departement $departement)
    {
        $this->departement = $departement;

        return $this;
    }

    /**
     * Get departement
     *
     * @return \Snoozit\PlatformBundle\Entity\Localisation\Departement
     */
    public function getDepartement()
    {
        return $this->departement;
    }
}
