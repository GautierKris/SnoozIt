<?php

namespace Snoozit\PlatformBundle\Listener;

use Doctrine\ORM\EntityManager;
use FOS\UserBundle\Model\UserInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class ActivityListener
{
    private $tokenStorage;
    private $entityManager;

    public function __construct(EntityManager $entityManager, TokenStorage $tokenStorage)
    {
        $this->entityManager = $entityManager;
        $this->tokenStorage = $tokenStorage;
    }

    public function onKernelRequest()
    {
        $user  = $this->getUser();

        if(is_object($user) || $user instanceof UserInterface){

            $entity = $this->entityManager->getRepository('SnoozitUserBundle:User')->find($user);

            if($entity){
                $entity->setLastActivity(new \DateTime());

                $this->entityManager->flush();
            }

        }

        return;
    }

    private function getUser()
    {
        if($this->tokenStorage->getToken()) {
            return $this->tokenStorage->getToken()->getUser();
        }

        return null;
    }
}