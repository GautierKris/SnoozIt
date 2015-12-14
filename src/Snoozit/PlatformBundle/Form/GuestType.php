<?php

namespace Snoozit\PlatformBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class GuestType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('username','text', array('attr' => array('class' => 'form-control input-sm', 'placeholder' => 'John Doe')))
            ->add('email','email', array('attr' => array('class' => 'form-control input-sm', 'placeholder' => 'Johndoe@email.com')))
            ->add('phone', 'text', array('attr' => array('class' => 'form-control input-sm', 'placeholder' => 'John Doe')))
            ->add('showphone','checkbox')
        ;

        $builder->remove('created');
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Snoozit\PlatformBundle\Entity\Guest'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'snoozit_platformbundle_guest';
    }
}
