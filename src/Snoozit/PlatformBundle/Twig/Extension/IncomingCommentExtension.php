<?php

namespace Snoozit\PlatformBundle\Twig\Extension;

use Doctrine\ORM\EntityManagerInterface;
use Snoozit\UserBundle\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class IncomingCommentExtension extends \Twig_Extension
{
    private $entityManager;
    private $tokenStorage;

    public function __construct(EntityManagerInterface $entityManager, TokenStorage $tokenStorage)
    {
        $this->entityManager = $entityManager;
        $this->tokenStorage = $tokenStorage;

    }

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('incomingComment', array( $this, 'incomingComment'))
        );
    }

    public function incomingComment(User $user)
    {
        if($this->controleIncoming($user)){
            return true;
        }
        return false;
    }

    private function controleIncoming(User $user)
    {
        $entity = $this->entityManager->getRepository('SnoozitPlatformBundle:sellComment')->findIncomingComment($user, $user->getLastActivity());

        if(!$entity){

            $interestNotifications = $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertInterest')->getInterestNotification($user);

            if($interestNotifications){
               return true;
            }
            return false;
        }


        return true;

    }


    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'incoming_comment';
    }
}
