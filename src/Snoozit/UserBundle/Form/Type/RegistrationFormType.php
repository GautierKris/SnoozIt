<?php

namespace Snoozit\UserBundle\Form\Type;

use Doctrine\ORM\EntityManager;
use FOS\UserBundle\Form\Type\RegistrationFormType as BaseType;
use Symfony\Component\Form\FormBuilderInterface;
use Snoozit\PlatformBundle\Form\Transformer\NameToIdTransformer;


class RegistrationFormType extends BaseType
{
    private $entityManager;

    public function __construct($class, EntityManager $entityManager)
    {
        parent::__construct($class);
        $this->entityManager    = $entityManager;
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $transformer = new NameToIdTransformer($this->entityManager);

        parent::buildForm($builder, $options);

        $builder
            ->add(
                $builder->create('city','text', array(
                    'required' => true,
                    'label' =>'Ville sélectionnée',
                    'attr' => array(
                        'data-id'   => 'city',
                        'class'     => 'form-control',
                        'readonly'  => true,
                        'placeholder' => 'Ville choisie'
                    )))
                    ->addModelTransformer($transformer)
            )
            ->add('codePostal', 'text', array('mapped' => false,
                'required' => true,
                'label' =>'Code postal',
                'attr' => array(
                    'data-id'   => 'codePostal',
                    'class'     => 'form-control',
                    'max-lenght'=> 5,
                    'placeholder' =>'Code Postal ( ex : 13100 )'
                )));
    }


    public function getName()
    {
        return 'snoozit_user_registration';
    }
}
