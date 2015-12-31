<?php

namespace Snoozit\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class SearchEngineController extends Controller
{
    public function catchAdvertAction()
    {

        $searchEngineHandler = $this->getSearchEngineHandler();
        $em                  = $this->getDoctrine()->getEntityManager();

        if($searchEngineHandler->process()){

            $entity = $searchEngineHandler->getFormValidateData();

            $regionSlug     = null;
            $categorySlug   = null;
            $routeSlug      = $entity->getSlug();

            if($entity->getRegion()){
                $region = $em->getRepository('SnoozitPlatformBundle:Localisation\Region')->find($entity->getRegion());
                if($region){
                    $regionSlug = $region->getSlug();
                }
            }

            if($entity->getCategory()){
                $category = $em->getRepository('SnoozitPlatformBundle:Categories\Category')->find($entity->getCategory());
                if($category){
                    $categorySlug = $category->getSlug();
                }
            }


            if(empty($routeSlug)){

                if(!$categorySlug and $regionSlug)
                {
                    return $this->redirect($this->generateUrl('snoozit_platform_show_by_region',array('slug' => $regionSlug)));
                }
                if($categorySlug and !$regionSlug){
                    $this->get('session')->set('noRegionSelected', true);
                    return $this->redirect($this->generateUrl('snoozit_platform_show_by_category',array('slug' => $categorySlug)));
                }
                if($categorySlug and $regionSlug){
                    return $this->redirect($this->generateUrl('snoozit_platform_search_result_without_slug', array(
                        'category'  => $categorySlug,
                        'region'    => $regionSlug
                    )));
                }
                else{
                    return $this->redirect($this->generateUrl('snoozit_platform_homepage'));
                }

            }else{

                if(!$categorySlug and $regionSlug )
                {
                    return $this->redirect($this->generateUrl('snoozit_platform_search_result_region', array(
                        'slug'      => $routeSlug,
                        'region'    => $regionSlug
                    )));


                }
                if($categorySlug and !$regionSlug){


                    $this->get('session')->set('noRegionSelected', true);
                    return $this->redirect($this->generateUrl('snoozit_platform_search_result_category', array(
                        'category'  => $categorySlug,
                        'slug'      => $routeSlug,
                    )));
                }
                if($categorySlug and $regionSlug){

                    return $this->redirect($this->generateUrl('snoozit_platform_search_result_full', array(
                        'slug'      => $routeSlug,
                        'category'  => $categorySlug,
                        'region'    => $regionSlug
                    )));
                }
                else{
                    return $this->redirect($this->generateUrl('snoozit_platform_search_simple_result', array('slug' => $routeSlug)));
                }

            }

        }

        return $this->redirect($this->generateUrl('snoozit_platform_homepage'));
    }

    public function searchAdvertSimpleResultAction(Request $request, $slug)
    {
        $advertManager = $this->getAdvertManager();
        $searchEngineManager = $this->getSearchEngineManager();

        $choices = null;

        if($request->isMethod('post')){
            $choices = $advertManager->recordChoiceFilter();
        }else{
            $advertManager->removeChoiceSession();
        }

        $parameters = array('slug' => $slug,
            'region' => $request->get('region'),
            'category'  => $request->get('category')
        );

        // La listes des annonces sans distinctions
        $advertListToPaginate = $advertManager->getAdvertForSearchEngine($parameters,$choices, null);

        $advertList  = $this->get('knp_paginator')->paginate($advertListToPaginate, $request->query->getInt('page', 1), 10);
        $usersFound = $this->getDoctrine()->getRepository('SnoozitUserBundle:User')->getTimelineUsersFound($searchEngineManager->getPageTitle());

        return $this->getResultTemplate($advertList, $searchEngineManager->getBreadcrumb(),$choices, $searchEngineManager->getPageTitle(), null, $usersFound);
    }

    public function searchAdvertResultAction(Request $request)
    {
        $advertManager = $this->getAdvertManager();
        $searchEngineManager = $this->getSearchEngineManager();

        $choices = null;

        if($request->isMethod('post')){
            $choices = $advertManager->recordChoiceFilter();
        }else{
            $advertManager->removeChoiceSession();
        }

        $parameters = array('slug' => $request->get('slug'),
                            'region' => $request->get('region'),
                            'category'  => $request->get('category')
        );

        // La listes des annonces sans distinctions
        $advertListToPaginate = $advertManager->getAdvertForSearchEngine($parameters,$choices, null);

        $advertList  = $this->get('knp_paginator')->paginate($advertListToPaginate, $request->query->getInt('page', 1), 10);
        $usersFound = $this->getDoctrine()->getRepository('SnoozitUserBundle:User')->getTimelineUsersFound($searchEngineManager->getPageTitle());

        return $this->getResultTemplate($advertList,$searchEngineManager->getBreadcrumb(),$choices, $searchEngineManager->getPageTitle(), null, $usersFound);

    }

    public function getHeaderTemplateAction()
    {
        $searchEngineHandler = $this->getSearchEngineHandler();

        return $this->render('SnoozitPlatformBundle:Site/Templating/Header:header.html.twig', array('form' => $searchEngineHandler->createView()));
    }

    private function getAdvertManager()
    {
        return $this->get('sz_advert_manager');
    }

    private function getSearchEngineManager()
    {
        return $this->get('sz_search_engine_manager');
    }

    private function getSearchEngineHandler()
    {
        return $this->get('sz_search_engine_handler');
    }

    private function getResultTemplate($advertList = null, $breadcrumb = array(),$choices = null, $pageTitle = null, $localisation = null, $usersFound = null )
    {
        return $this->render('SnoozitPlatformBundle:Site/Search:search.html.twig', array(
            'advertList' => $advertList,
            'breadcrumb' => $breadcrumb,
            'choices'    => $choices,
            'page_title' => $pageTitle,
            'localisation'=> $localisation,
            'searchModule' => true,
            'usersFound'  => $usersFound));
    }

}
