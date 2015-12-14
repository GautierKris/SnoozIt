<?php

namespace Snoozit\PlatformBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class AdvertNegoceType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('price', 'text', array('attr' => array('class' => 'form-control input-sm', 'placeholder' => '100')));

        $builder
            ->remove('notification')
            ->remove('validate')
            ->remove('created')
            ->remove('updated')
            ->remove('user')
            ->remove('advert')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Snoozit\PlatformBundle\Entity\AdvertNegoce'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'snoozit_platformbundle_advertnegoce';
    }
}
