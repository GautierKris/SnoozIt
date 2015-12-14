<?php

namespace Snoozit\PlatformBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class SearchEngineType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('search', 'text', array('label' => false,'required' => false, 'attr' => array('class' => 'form-control','placeholder' =>'Smartphone derniere génération bonne qualité..')))
            ->add('category', 'entity', array('attr' => array('class' => 'form-control categoryclass'),
                'required' => false,
                'class' => 'SnoozitPlatformBundle:Categories\Category',
                'choice_label' => 'category',
                'group_by'      => 'parentcategory.parent',
                'empty_value' => 'La rubrique'))
            ->add('region','entity', array(
                'required' => false,
                'label' => false,
                'attr' => array('class' => 'form-control'),
                'empty_value' => 'Toute la france',
                'class' => 'Snoozit\PlatformBundle\Entity\Localisation\Region',
                'choice_label' => 'nom'))
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Snoozit\PlatformBundle\Entity\SearchEngine'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'snoozit_platformbundle_searchengine';
    }
}
