<?php

namespace Snoozit\PlatformBundle\Entity\Localisation;


use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Departement
 *
 * @ORM\Table(name="sz_departement")
 * @ORM\Entity(repositoryClass="Snoozit\PlatformBundle\Entity\Localisation\DepartementRepository")
 */
class Departement
{

    /**
     * @ORM\ManyToOne(targetEntity="Snoozit\PlatformBundle\Entity\Localisation\Region")
     * @ORM\JoinColumn(nullable = false)
     */
    private $region;

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
     * @ORM\Column(name="nom", type="string", length=128)
     */
    private $nom;

    /**
     * @Gedmo\Slug(fields={"nom"})
     * @ORM\Column(length=128, unique=true)
     */
    private $slug;

    /**
     * @var string
     *
     * @ORM\Column(name="Numero", type="string", length=255)
     */
    private $numero;

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
     * Set nom
     *
     * @param string $nom
     * @return Departement
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
     * Set slug
     *
     * @param string $slug
     * @return Departement
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
     * Set numero
     *
     * @param string $numero
     * @return Departement
     */
    public function setNumero($numero)
    {
        $this->numero = $numero;

        return $this;
    }

    /**
     * Get numero
     *
     * @return string
     */
    public function getNumero()
    {
        return $this->numero;
    }

    /**
     * Set region
     *
     * @param \Snoozit\PlatformBundle\Entity\Localisation\Region $region
     * @return Departement
     */
    public function setRegion(\Snoozit\PlatformBundle\Entity\Localisation\Region $region)
    {
        $this->region = $region;

        return $this;
    }

    /**
     * Get region
     *
     * @return \Snoozit\PlatformBundle\Entity\Localisation\Region
     */
    public function getRegion()
    {
        return $this->region;
    }
}
