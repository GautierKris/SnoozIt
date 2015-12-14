<?php

namespace Snoozit\PlatformBundle\Controller;

use Snoozit\PlatformBundle\Manager\Breadcrumb;
use Snoozit\UserBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class SiteController extends Controller
{
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $advertManager = $this->getAdvertManager();

        if($advertManager->checkLocalisationSessionStatus()){

            $session = $this->get('session')->get('selectedRegion');

            $region = $em->getRepository('SnoozitPlatformBundle:Localisation\Region')->find($session);

            if($region){
                return $this->redirect($this->generateUrl('snoozit_platform_show_by_region', array("slug" =>  $region->getSlug()) ));
            }
        }

        $regions = $em->getRepository('SnoozitPlatformBundle:Localisation\Region')->findAll();
        $searchEngineHandler = $this->getSearchEngineHandler();

        return $this->render('SnoozitPlatformBundle:Site/Welcome:welcome.html.twig', array('regions' => $regions, 'form' => $searchEngineHandler->createView()));
    }

    private function getSearchEngineHandler()
    {
        return $this->get('sz_search_engine_handler');
    }

    public function welcomeAction()
    {
        $em = $this->getDoctrine()->getManager();
        $searchEngineHandler = $this->getSearchEngineHandler();

        $regions = $em->getRepository('SnoozitPlatformBundle:Localisation\Region')->findAll();
        return $this->render('SnoozitPlatformBundle:Site/Welcome:welcome.html.twig', array('regions' => $regions, 'form' => $searchEngineHandler->createView()));
    }

    public function advertFiltersAction($choices)
    {
        $advertManager = $this->getAdvertManager();

        $filters    = $advertManager->getAdvertFilters();
        $filters['choices'] = $choices;

        return $this->render('SnoozitPlatformBundle:Site/Templating/Annonce:shop_filters.html.twig', $filters);
    }

    public function categoriesMenuAction(Request $request, $categoryID = null)
    {
        $user = $this->getUser();
        if(!is_object($user) || !$user instanceof User){
            $stats = null;
        }else{
            $stats = $this->get('sz_stats_manager')->getAllStats();
        }


        $categories = $this->getDoctrine()->getRepository('SnoozitPlatformBundle:Categories\Category')->findAll();
        $parentsCategories = $this->getDoctrine()->getRepository('SnoozitPlatformBundle:Categories\ParentCategory')->findAll();

        return $this->render('SnoozitPlatformBundle:Site/Templating/Menu:menu_left.html.twig', array(
            'categories' => $categories,
            'stats'          => $stats,
            'parentsCategories' => $parentsCategories,
            'categoryID' => $categoryID));

    }

    public function breadcrumbAction(array $breadcrumb , $localisation = null)
    {
        $breadcrumb = new Breadcrumb($breadcrumb);

        return $this->render('SnoozitPlatformBundle:Site/Templating/Breadcrumb:breadcrumb.html.twig', array('breadcrumb' => $breadcrumb::$_list, 'localisation' => $localisation ));
    }

    private function getAdvertManager()
    {
        return $this->get('sz_advert_manager');
    }

    public function regionFiltersAction()
    {
        $advertManager = $this->getAdvertManager();

        if($advertManager->getRegionFilterValidate()){
            return $this->redirect($advertManager->regionFilterRedirection());
        }

        return $this->redirect($this->generateUrl('snoozit_platform_homepage'));

    }

    public function mediaPubAction()
    {
        $advertManager = $this->getAdvertManager();

        $mediaPubs = $advertManager->getMediaToPropose();

        return $this->render('SnoozitPlatformBundle:Site/Templating/MediaPub:mediaPub.html.twig', array('mediaPubs' => $mediaPubs ));
    }

    public function removeFiltersAction()
    {
        $this->getAdvertManager()->removeFilters();

        return $this->redirect($this->generateUrl('snoozit_platform_homepage'));
    }

    // Les erreurs
    public function errorUserNotMemberAction()
    {
        $breadcrumb = array(
            array("Erreur 404","#", true)
        );
        return $this->render('SnoozitPlatformBundle:Error404:errorUserNotMember.html.twig', array('breadcrumb' => $breadcrumb));
    }

}
