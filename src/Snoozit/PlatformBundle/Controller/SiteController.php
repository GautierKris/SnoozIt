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

    // La pub du haut des timeline
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

    // Incoming Comment Template pour le breadcrumb
    public function IncomingCommentTemplateAction()
    {
        $em = $this->getDoctrine()->getManager();

        $newList = $em->getRepository('SnoozitPlatformBundle:AdvertInterest')->getInterestNotification($this->getUser());
        $incomingComments = $em->getRepository('SnoozitPlatformBundle:sellComment')->findIncomingComment($this->getUser(), $this->getUser()->getLastActivity());

        $incomingList = array_merge($newList, $incomingComments);

        usort($incomingList, array($this, 'trie_par_date'));

        return $this->render('SnoozitPlatformBundle:Site/Templating/Breadcrumb:incomingComment.html.twig', array('incomingList' => $incomingList));
    }

    private function trie_par_date($a, $b) {

        if(is_array($a)){
            $datea = $a['updated'];
        }else{
            $datea = $a->getUpdated();
        }

        if(is_array($b)){
            $dateb = $b['updated'];
        }else{
            $dateb = $b->getUpdated();
        }
        $date1 = strtotime($datea->format('r'));
        $date2 = strtotime($dateb->format('r'));
        return $date1 < $date2 ;
    }

    public function ErrorPageAction($codeErreur)
    {
        $breadcrumb = array(
            array('Il y a une erreur', '#', true)
        );
        if($codeErreur == 1){
            $motif = "L'annonce qui vous interesse appartient a un invité et ne peut donc pas etre comptabilisé.";
        }else{
            $motif = "L'annonce qui vous interesse appartient a un invité et ne peut donc pas etre comptabilisé.";
        }

        return $this->render('SnoozitPlatformBundle:Error404:errorPage.html.twig', array('breadcrumb' => $breadcrumb, 'motif' => $motif));
    }



}
