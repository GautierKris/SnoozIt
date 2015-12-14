<?php

namespace Snoozit\UserBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class AvatarType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('file', 'file', array('label' => false,'attr' => array('class' => 'upload imgUpl')))
            ->remove('date')
            ->remove('path')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Snoozit\UserBundle\Entity\Avatar'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'snoozit_userbundle_avatar';
    }
}
