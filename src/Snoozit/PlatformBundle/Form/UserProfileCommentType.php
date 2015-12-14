<?php

namespace Snoozit\PlatformBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class UserProfileCommentType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->remove('created')
            ->add('content','textarea', array('attr' => array('class' => 'form-control input-sm')))
            ->remove('user')
            ->remove('userProfile')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Snoozit\PlatformBundle\Entity\UserProfileComment'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'snoozit_platformbundle_userprofilecomment';
    }
}
