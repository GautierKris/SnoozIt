<?php

namespace Snoozit\PlatformBundle\Form;

use Doctrine\ORM\EntityManager;
use FOS\UserBundle\Model\UserInterface;
use Snoozit\PlatformBundle\Form\Transformer\NameToIdTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class AdvertType extends AbstractType
{

    private $entityManager;
    private $tokenStorage;
    private $requestStack;

    public function __construct(EntityManager $entityManager, TokenStorage $tokenStorage , RequestStack $requestStack)
    {
        $this->entityManager    = $entityManager;
        $this->tokenStorage     = $tokenStorage;
        $this->requestStack     = $requestStack;
        $this->user             = $this->tokenStorage->getToken()->getUser();
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $transformer = new NameToIdTransformer($this->entityManager);

        $builder
            ->add('title', 'text', array('attr' => array('class' => 'form-control','placeholder' =>'Smartphone derniere génération bonne qualité..')))
            ->add('price', 'text', array('required' => false, 'attr' => array('class' => 'form-control', 'placeholder' => '0,00€')))
            ->add('description', 'textarea', array('attr' => array('class' => 'form-control','placeholder' => 'Décrivez votre annonce')))
            ->add('delivery', 'checkbox', array('required' => false))
            ->add('negotiable', 'checkbox', array('required' => false))
            ->add('exchange', 'checkbox', array('required' => false))
            ->add('private', 'checkbox', array('required' => false))
            ->add('commentable', 'checkbox', array('required' => false))
            ->add('showphone', 'checkbox', array('required' => false))
            ->add('cheque', 'checkbox', array('required' => false))
            ->add('espece', 'checkbox', array('required' => false))
            ->add('cb', 'checkbox', array('required' => false))
            ->add('paypal', 'checkbox', array('required' => false))
            ->add('urgent', 'checkbox', array('required' => false))
            ->add('category', 'entity', array('attr' => array('class' => 'form-control categoryclass'),
                'required' => true,
                'class' => 'SnoozitPlatformBundle:Categories\Category',
                'choice_label' => 'category',
                'group_by'      => 'parentcategory.parent',
                'empty_value' => 'La rubrique'))
            ->add('pictureOne', new AdvertPictureType(), array('label' => false,
                'required' => false,
                'attr' => array(
                    'rel'   => 1)))
            ->add('pictureTwo', new AdvertPictureType(), array('label' => false,
                'required' => false,
                'attr' => array(
                    'rel'   => 2)))
            ->add('pictureThree', new AdvertPictureType(), array('label' => false,
                'required' => false,
                'attr' => array(
                    'rel'   => 3)))
            ->add('pictureFour', new AdvertPictureType(), array('label' => false,
                'required' => false,
                'attr' => array(
                    'rel'   => 4)
            ))
        ;

        $builder
            ->remove('slug')
            ->remove('hash')
            ->remove('success')
            ->remove('created')
            ->remove('user')
            ->remove('updated')
            ->remove('combinaisonRequest')
            ->remove('contentChanged')
            // ->remove('user')
        ;

        if( !is_object($this->user) || !$this->user instanceof UserInterface ){
            $builder
                ->add(
                    $builder->create('city','text', array(
                        'label' =>'Ville sélectionnée',
                        'attr' => array(
                            'data-id'   => 'city',
                            'class'     => 'form-control input-sm',
                            'readonly'  => true,
                            'placeholder' => 'Ville choisie'
                        )))
                        ->addModelTransformer($transformer)
                )
                ->add('codePostal', 'text', array('mapped' => false,
                    'label' =>'Code postal',
                    'attr' => array(
                        'data-id'   => 'codePostal',
                        'class'     => 'form-control input-sm',
                        'max-lenght'=> 5,
                        'placeholder' =>'13100'
                    )));
        }
        $builder->addEventListener(FormEvents::PRE_SET_DATA, array($this, 'onPreSetData'));

    }

    public function onPreSetData(FormEvent $event)
    {
        $form = $event->getForm();

        if( !is_object($this->user) || !$this->user instanceof UserInterface ){
            $form->add('guest', new GuestType());

        }

    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {

        $resolver->setDefaults(array(
            'data_class' => 'Snoozit\PlatformBundle\Entity\Advert',
            'cascade_validation' => true
        ));

    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'snoozit_platformbundle_advert';
    }
}
