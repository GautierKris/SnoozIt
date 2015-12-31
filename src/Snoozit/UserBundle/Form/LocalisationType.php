<?php

namespace Snoozit\UserBundle\Form;

use Doctrine\ORM\EntityManager;
use Snoozit\PlatformBundle\Form\Transformer\NameToIdTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

class LocalisationType extends AbstractType
{
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager    = $entityManager;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $transformer = new NameToIdTransformer($this->entityManager);

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
                'constraints' => array(

                    new NotBlank(array('message' => 'Le code postal ne doit pas être vide')),
                    new Length(array('min' => 5,'max' => 5)),
                    new Regex(array('pattern' => "/^[0-9]+$/","message" => 'Le code postal ne peut contenir que des chiffres'))),

                'attr' => array(
                    'data-id'   => 'codePostal',
                    'class'     => 'form-control only_alpha_num no_paste',
                    'placeholder' =>'Code Postal ( ex : 13100 )',
                    'maxlength' => 5,
                )));

        $builder->addEventListener(FormEvents::PRE_SUBMIT, function(FormEvent $event){

            $data = $event->getData();
            $postal = $data['codePostal'];
            $city = $data['city'];
            $form = $event->getForm();

            $cityCheck = $this->entityManager->getRepository('SnoozitPlatformBundle:Localisation\City')->findOneBy(array('nom' => $city, 'postal' => $postal));

            if(!$cityCheck){
                $form->addError(new FormError('Il y a une incohérence entre le code postal et la ville choisie'));
            }

            return;
        });
    }

    public function configureOptions(OptionsResolver $resolver)
    {

    }

    public function getName()
    {
        return 'snoozit_user_bundle_localisation';
    }
}
