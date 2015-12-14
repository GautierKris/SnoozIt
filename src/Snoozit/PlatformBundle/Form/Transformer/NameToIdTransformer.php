<?php
/**
 * Created by PhpStorm.
 * User: Kris
 * Date: 14/09/15
 * Time: 11:46
 */

namespace Snoozit\PlatformBundle\Form\Transformer;


use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

/**
 * Class NameToIdTransformer
 * @package Snoozit\PlatformBundle\Form\Transformer
 */
class NameToIdTransformer implements DataTransformerInterface
{
    /**
     * @var ObjectManager
     */
    private $om;

    /**
     * @param ObjectManager $om
     */
    public function __construct(ObjectManager $om)
    {
        $this->om = $om;
    }


    /**
     * @param mixed $id
     * @return string
     */
    public function transform($id)
    {
        if(null === $id){
            return "";
        }

        return $id->getNom();
    }

    /**
     * @param mixed $name
     * @return null|\Snoozit\PlatformBundle\Entity\Localisation\City
     * @throws TransformationFailedException
     */
    public function reverseTransform($name)
    {
        if(!$name){
            return null;
        }

        $id = $this->om
                ->getRepository('SnoozitPlatformBundle:Localisation\City')
                ->findOneBy(array('nom' => $name));

        if(null === $name){
            throw new TransformationFailedException(sprintf(
                'La ville avec le nom "%s" ne peut pas être trouvé!', $name
            ));
        }

        return $id;
    }
}