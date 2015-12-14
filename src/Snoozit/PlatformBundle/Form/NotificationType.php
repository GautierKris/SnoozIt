<?php

namespace Snoozit\PlatformBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class NotificationType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('follower','choice',
                array(
                'choices' => array('1' => 'Oui', '0' => 'Non'),
                    'preferred_choices' => array('0'),
                    'multiple' => false,
                    'expanded' => true )
                )
            ->add('newsletter','choice',
                array(
                'choices' => array('1' => 'Oui', '0' => 'Non'),
                    'empty_value' => false,
                    'multiple' => false,
                    'expanded' => true ))
            ->add('comment','choice',
                array(
                'choices' => array('1' => 'Oui', '0' => 'Non'),
                    'preferred_choices' => array('0'),
                    'multiple' => false,
                    'expanded' => true ))
            ->add('advertInterest','choice',
                array(
                'choices' => array('1' => 'Oui', '0' => 'Non'),
                    'preferred_choices' => array('0'),
                    'expanded' => true ))
            ->add('advertNegoce','choice',
                array(
                    'choices' => array('1' => 'Oui', '0' => 'Non'),
                    'preferred_choices' => array('0'),
                    'expanded' => true ))
            ->add('updated','choice',
                array(
                'choices' => array('1' => 'Oui', '0' => 'Non'),
                    'preferred_choices' => array('0'),
                    'multiple' => false,
                    'expanded' => true ))
            ->remove('user')
            ->remove('updated')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Snoozit\PlatformBundle\Entity\Notification'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'snoozit_platformbundle_notification';
    }
}
