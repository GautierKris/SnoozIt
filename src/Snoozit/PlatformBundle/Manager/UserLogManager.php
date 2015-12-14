<?php

namespace Snoozit\PlatformBundle\Manager;


use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Router;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class UserLogManager extends UserLogMessageInterface
{
    private $entityManager;
    private $requestStack;
    private $tokenStorage;
    private $session;
    private $router;

    public function __construct(EntityManager $entityManager, RequestStack $requestStack, TokenStorage $tokenStorage, Session $session, Router $router)
    {
        $this->entityManager = $entityManager;
        $this->requestStack  = $requestStack->getCurrentRequest();
        $this->tokenStorage  = $tokenStorage;
        $this->session       = $session;
        $this->router        = $router;

    }



}