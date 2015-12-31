<?php

namespace Snoozit\PlatformBundle\Form;

use Doctrine\ORM\EntityManager;
use Snoozit\PlatformBundle\Form\Transformer\IdToAdvertInterestTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class sellCommentType extends AbstractType
{
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $transformer = new IdToAdvertInterestTransformer($this->entityManager);

        $builder
            ->add('content', 'textarea', array('attr' => array('class' => 'form-control input-sm')))
            ->add( $builder->create('advertInterest','hidden')->addModelTransformer($transformer))
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Snoozit\PlatformBundle\Entity\sellComment'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'snoozit_platformbundle_sellcomment';
    }
}
