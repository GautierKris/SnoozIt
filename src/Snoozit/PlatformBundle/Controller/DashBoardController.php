<?php

namespace Snoozit\PlatformBundle\Controller;

use Snoozit\PlatformBundle\Entity\Advert;
use Snoozit\PlatformBundle\Entity\AdvertInterest;
use Snoozit\PlatformBundle\Entity\AdvertNegoce;
use Snoozit\PlatformBundle\Manager\Breadcrumb;
use Snoozit\SkuagBundle\SkuagEvents\HiddenUserAdverts;
use Snoozit\SkuagBundle\SkuagEvents\SkuagEvents;
use Snoozit\UserBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class DashBoardController extends Controller
{
    // Page d'accueil du dashboard
    public function indexAction(Request $request)
    {
        $user = $this->getUser();
        if(!is_object($user) || !$user instanceof User){
            throw new AccessDeniedException("Vous devez etre identifié pour acceder à cette zone");
        }
        // Controle si l'utilisateur est récent pour lui expliquer ce qu'il peu faire
        // Sur le site
        $this->checkWelcomeTutoriel($user);
        $em = $this->getDoctrine()->getManager();

        // Le manager des annonces
        $advertManager = $this->getAdvertManager();
        $stats = $this->getStatsManager()->getAllStats();

        $userList = $em->getRepository('SnoozitUserBundle:User')->findUserToPropose($user);

        $advertListToPaginate = $advertManager->getAdvertListForUser($user);

        // A SUPPRIMER A LA PROCHAINE VERSION DE PRODUCTION
       $merged = $this->mergeAllActivity($advertListToPaginate);

        $advertList  = $this->get('knp_paginator')->paginate($merged, $request->query->getInt('page', 1),20);

        $oneUserPropose = $em->getRepository('SnoozitUserBundle:User')->findOneBy(array('city' => $user->getCity()));

        $breadcrumb = array(
            array('Dashboard', '#', true)
        );

        return $this->render('SnoozitPlatformBundle:DashBoard:index.html.twig', array(
            'advertList'     => $advertList,
            'breadcrumb'     => $breadcrumb,
            'stats'          => $stats,
            'oneUserPropose' => $oneUserPropose,
            'userList'       => $userList,
        ));

    }

    private function mergeAllActivity($advertListToPaginate)
    {
        $userLogs = $this->getUser()->getUserLogs();
        $userLogs = $userLogs->toArray();
        $allActivity = array_merge($userLogs, $advertListToPaginate); // Mix les 4 repertoires d'annonces par date

        usort($allActivity, array($this, 'trie_par_date'));

        return $allActivity;

    }

    private function trie_par_date($a, $b) {

        if(is_array($a)){
            $datea = $a['created'];
        }else{
            $datea = $a->getCreated();
        }

        if(is_array($b)){
            $dateb = $b['created'];
        }else{
            $dateb = $b->getCreated();
        }
        $date1 = strtotime($datea->format('r'));
        $date2 = strtotime($dateb->format('r'));
        return $date1 < $date2 ;
    }
    //////////////////////////////////////////////////

    // Affiche les annonces de l'utilisateurs
    public function userAdvertAction()
    {
        $advertManager = $this->getAdvertManager();

        $breadcrumb = array(
            array('Dashboard', $this->generateUrl('snoozit_dashboard_homepage')),
            array('Vos annonces','#', true)
        );
        $userAdvertList = $advertManager->getUserAdvertList($this->getUser());

        return $this->render('SnoozitPlatformBundle:DashBoard/UserAdvert:userAdvert.html.twig', array(
            'breadcrumb' => $breadcrumb,
            'advertList' => $userAdvertList,
            ));
    }

    // Affiche les filtres d'annonces
    public function seeMoreAction($choices)
    {
        $advertManager = $this->getAdvertManager();

        $filters    = $advertManager->getAdvertFilters();
        $filters['choices'] = $choices;

        return $this->render('SnoozitPlatformBundle:Site/Templating/Annonce:shop_filters.html.twig', $filters);
    }

    // Le menu composer d'icones sur la gauche
    public function menuLeftAction()
    {
        $categories = $this->getDoctrine()->getRepository('SnoozitPlatformBundle:Categories\Category')->findAll();
        $parentsCategories = $this->getDoctrine()->getRepository('SnoozitPlatformBundle:Categories\ParentCategory')->findAll();

        return $this->render('SnoozitPlatformBundle:DashBoard/Templating:menuLeft.html.twig', array(
            'categories' => $categories,
            'parentsCategories' => $parentsCategories ));

    }

    // Edite une annonce
    public function editAdvertAction(Advert $advert)
    {
        if($advert->getUser() != $this->getUser()){
            throw new AccessDeniedException("Vous n'avez rien à faire ici, ce n'est pas votre annonce - Bon message à revoir, je sais");
        }
        $advertHandler = $this->get('sz_advert_handler');

        // Génération du breadcrumb
        $breadcrumb = array(
            array('Dashboard', $this->generateUrl('snoozit_dashboard_homepage')),
            array('Editer une annonce',$this->generateUrl('snoozit_dashboard_edit_advert', array('advert' => $advert->getId()))),
            array($advert->getTitle(),'#',true )
        );

        if($advertHandler->process()){
            return $this->redirect($this->generateUrl('snoozit_show_advert', array(
                'slug' => $advert->getSlug(),
                'id'  => $advert->getId())));
        }

        return $this->render('SnoozitPlatformBundle:DashBoard/EditAdvert:editAdvert.html.twig',  array(
            'form' => $advertHandler->createView(),
            'breadcrumb' => $breadcrumb,
            'advert' => $advert));
    }

    // Affiche les négociations
    public function getNegociationCenterAction()
    {
        $advertManager = $this->getAdvertManager();

        $breadcrumb = array(
            array('Dashboard', $this->generateUrl('snoozit_dashboard_homepage')),
            array('Negociation center','#', true)
        );

        return $this->render('SnoozitPlatformBundle:DashBoard/Negociation:negociation.html.twig', array(
            'breadcrumb' => $breadcrumb,
            'negoces'    => $advertManager->getDashboardNegoce(),
            'userInterest'  => $advertManager->getDashboardUserInterest()
        ));
    }



    // Advert Manager
    private function getAdvertManager()
    {
        return $this->get('sz_advert_manager');
    }

    // Ne plus afficher les annonces d'un utilisateur
    public function hiddenUserAdvertAction(User $hidden)
    {
        $user = $this->getUser();
        if(!is_object($user) || !$user instanceof  User) {
            throw new AccessDeniedException("Vous devez être authentifier pour accedeer à cette zone");
        }

        $advertManager = $this->getAdvertManager();
        $em = $this->getDoctrine()->getManager();
        $session = $this->get('session');

        $hiddenUserList = $advertManager->getHiddenUsers($user);

        if(in_array($hidden->getId(), $hiddenUserList))
        {
            $this->get('event_dispatcher')->dispatch(SkuagEvents::ON_SHOW_USER_ADVERT, new HiddenUserAdverts($user, $hidden) );
            $user->removeHiddenUser($hidden);
            $session->getFlashBag()->add('success', 'Les annonces de '.$hidden->getUsername().'sont de nouveau visibles.');
        }else{
            $user->addHiddenUser($hidden);
            $this->get('event_dispatcher')->dispatch(SkuagEvents::ON_HIDDEN_USER_ADVERT, new HiddenUserAdverts($user, $hidden) );
            $session->getFlashBag()->add('success', 'Vous ne verez plus les annonces de '.$hidden->getUsername());
        }

        $em->flush();

        return $this->redirect($this->generateUrl('snoozit_dashboard_homepage'));

    }

    // Affiche la liste des utilisateurs qui ne sont pas affichés
    public function showHiddenUserAction()
    {
        $user = $this->getUser();
        if(!is_object($user) || !$user instanceof  User) {
            throw new AccessDeniedException("Vous devez être authentifier pour accedeer à cette zone");
        }

        $breadcrumb = array(
            array('Dashboard', $this->generateUrl('snoozit_dashboard_homepage')),
            array('Liste des ignorés','#', true)
        );

        return $this->render('SnoozitPlatformBundle:DashBoard/HiddenUser:hiddenUser.html.twig', array(
            'breadcrumb'        => $breadcrumb,
            'hiddenUserAdvert'  => $user->getHiddenUsers()
        ));
    }

    // Manage une annonce
    public function mangeAdvertAction(advert $advert)
    {
        $user = $this->getUser();
        if(!is_object($user) || !$user instanceof User){
            throw new AccessDeniedException("Vous devez etre identifié pour acceder à cette zone");
        }

        if($advert->getUser() != $user){
            throw new AccessDeniedException("Vous n'avez rien à faire ici, ce n'est pas votre annonce - Bon message à revoir, je sais");
        }

        $advertManager = $this->getAdvertManager();

        // Génération du breadcrumb
        $breadcrumb = array(
            array('Dashboard', $this->generateUrl('snoozit_dashboard_homepage')),
            array('Mes annonces',$this->generateUrl('snoozit_dashboard_user_advert')),
            array($advert->getTitle(),'#',true )
        );

        return $this->render('SnoozitPlatformBundle:DashBoard/Manager:manager.html.twig', array(
                'breadcrumb' => $breadcrumb,
                'interest'      => $advert->getInterested(),
                'negoces'       => $advert->getNegoces(),
                'comments'  => $advert->getComments(),
                'advert'        => $advert )
        );
    }

    // Stats Manager
    private function getStatsManager()
    {
        return $this->get('sz_stats_manager');
    }

    public function removeWelcomeNotificationAction()
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        if(!is_object($user) || !$user instanceof User){
            throw new AccessDeniedException("l'utilisateur demandé n'éxiste pas");
        }

        if($user->getTutonotification()){
            $user->setTutoNotification(false);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('snoozit_dashboard_homepage'));
    }

    private function checkWelcomeTutoriel(User $user){

        $em = $this->getDoctrine()->getManager();

        if($user->getTutonotification()){
            $now = new \DateTime();
            $now->modify('-24 hours');

            if($user->getCreated() < $now)
            {
                $user->setTutonotification(false);
            }else{
                $user->setTutonotification(true);
            }

            $em->flush();
        }

        return;
    }

    // Refuse la négociation
    public function removeNegociationAction(AdvertNegoce $advertNegoce)
    {
        if($this->getUser() != $advertNegoce->getAdvert()->getUser()){
            throw new AccessDeniedException('Cette négociation ne vous concerne pas.');
        }

        $this->get('sz_advert_negoce_handler')->removeNegoce($advertNegoce);

        return $this->redirect($this->generateUrl('snoozit_dashboard_negociation'));
    }









}
