<?php

/*
 * This file is part of the FOSUserBundle package.
 *
 * (c) FriendsOfSymfony <http://friendsofsymfony.github.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Snoozit\UserBundle\Form\Type;

use Symfony\Component\Form\FormBuilderInterface;
use FOS\UserBundle\Form\Type\ProfileFormType as BaseType;

class ProfileFormType extends BaseType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        parent::buildUserForm($builder, $options); // Charge les champs d'origine

        $builder
            ->add('email', 'email',       array('label' => 'form.email',    'translation_domain' => 'FOSUserBundle'))
            ->add('firstname', null,      array('required' => false ))
            ->add('name', null,           array('required' => false ))
            ->add('phone', 'text',        array('required' => false ))
            ->add('showphone', 'checkbox',array('required' => false ))
            ->add('finalword',null,      array('attr' => array('class' => 'form-control input-sm', 'placeholder' => 'Laisser un mot à ceux qui visite votre profile...')))
            ->add('age', 'birthday',      array('required' => false,
                'label'    => 'Date de naissance:',
                'years'    => range(2000, 1920),
                'attr'     => array('class' => 'form-group'),
                'empty_value' => array('year' => 'Année', 'month' => 'Mois', 'day' => 'Jour')))
            ->remove('city')
            ->remove('username', null,       array('label' => 'form.username', 'translation_domain' => 'FOSUserBundle'))
        ;

    }

    public function getParent()
    {
        return 'fos_user_profile';
    }

    public function getName()
    {
        return 'snoozit_user_profile';
    }


}
