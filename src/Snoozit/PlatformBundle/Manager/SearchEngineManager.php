<?php

namespace Snoozit\PlatformBundle\Manager;

use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class SearchEngineManager
{
    /**
     * @param EntityManager $entityManager
     * @param RequestStack $requestStack
     * @param TokenStorage $tokenStorage
     * @param Session $session
     */
    private $entityManager;
    private $requestStack;
    private $tokenStorage;
    private $session;
    private $router;

    public function __construct(EntityManager $entityManager, RequestStack $requestStack, TokenStorage $tokenStorage, Session $session, Router $router)
    {
        $this->entityManager= $entityManager;
        $this->requestStack = $requestStack->getCurrentRequest();
        $this->tokenStorage = $tokenStorage;
        $this->session      = $session;
        $this->router       = $router;
    }

    public function getBreadcrumb()
    {
        $region     = null;
        $category   = null;

        if($this->requestStack->get('region')){
            $region = $this->getRegion();
        }
        if($this->requestStack->get('category')){
            $category = $this->getCategory();
        }

        $breadcrumb = array(
            array('Recherche', '#',true),
            $region,
            $category,
            $this->findLastBreadcrumb()
        );

        return $breadcrumb;
    }

    public function findLastBreadcrumb()
    {
        $slug   = $this->requestStack->get('slug');

        if(!$slug){
            return null;
        }

       return array($this->getPageTitle(), '#', true);
    }

    public function getPageTitle()
    {
        $slug   = $this->requestStack->get('slug');
        $category   = $this->requestStack->get('category');

        if(!$slug and isset($category)){
            return $this->entityManager->getRepository('SnoozitPlatformBundle:Categories\Category')->findOneBy(array('slug' => $this->requestStack->get('category')))->getCategory();
        }
        $entity = $this->entityManager->getRepository('SnoozitPlatformBundle:SearchEngine')->findOneBy(array('slug' => $slug));

        if(!$entity){
            return false;
        }
        return $entity->getSearch();
    }

    private function getRegion()
    {
        $slug = $this->requestStack->get('region');

        $region = $this->entityManager->getRepository('SnoozitPlatformBundle:Localisation\Region')->findOneBy(array('slug' => $slug));

        if($region){
            return array($region->getNom() , $this->router->generate('snoozit_platform_show_by_region', array('slug' => $slug )));
        }

        return null;

    }

    private function getCategory()
    {
        $slug = $this->requestStack->get('category');

        $category = $this->entityManager->getRepository('SnoozitPlatformBundle:Categories\Category')->findOneBy(array('slug' => $slug));

        if($category){
            return array($category->getCategory(), $this->router->generate('snoozit_platform_show_by_category', array('slug' => $slug )));
        };

    }

}