<?php

namespace Snoozit\PlatformBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class AdvertPictureType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('file', 'file', array('label' => false,'attr' => array('class' => 'upload imgUpl')))
        ;

         $builder
            ->remove('date')
            ->remove('path')
            ->remove('rank')
            ->remove('advert')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Snoozit\PlatformBundle\Entity\AdvertPicture'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'snoozit_platformbundle_advertpicture';
    }
}
