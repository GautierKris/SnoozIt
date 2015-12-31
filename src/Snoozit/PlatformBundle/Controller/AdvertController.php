<?php

namespace Snoozit\PlatformBundle\Controller;

use Doctrine\ORM\EntityNotFoundException;
use FOS\UserBundle\Model\UserInterface;
use Snoozit\PlatformBundle\Entity\Advert;
use Snoozit\PlatformBundle\Entity\Categories\Category;
use Snoozit\PlatformBundle\Entity\Localisation\City;
use Snoozit\PlatformBundle\Entity\Localisation\Departement;
use Snoozit\PlatformBundle\Entity\Localisation\Region;
use Snoozit\SkuagBundle\SkuagEvents\AdvertEvent;
use Snoozit\SkuagBundle\SkuagEvents\InterestEvent;
use Snoozit\SkuagBundle\SkuagEvents\SkuagEvents;
use Snoozit\UserBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class AdvertController extends Controller
{
    private function getAdvertManager()
    {
        return $this->get('sz_advert_manager');
    }

    // Affiche une annonce
    public function showAction(Request $request,Advert $advert, $slug)
    {
        $user = $this->getUser();
        $userFollow = false;
        if(is_object($user) || $user instanceof User) {
            if($advert->getUser()){
                $userFollow = $this->checkIfUserFollow($advert->getUser());
            }
        }

        // Le manager des annonces et l'handler des comments
        $advertManager          = $this->get('sz_advert_manager');
        $advertCommentHandler   = $this->get('sz_advert_comment_handler');
        $advertNegoceHandler    = $this->get('sz_advert_negoce_handler');

        // Les annonces à proposer en fonction de l'annonce afficher
        $advertListToPropose = $advertManager->getAdvertListToPropose($advert, 6);

        // Réhydrate function pour uniformisé l'affichage de l'annonce si c'est une annonce
        // d'un membre ou d'un invité
        $hydratedAdvert = $advertManager->rehydrateAdvert($advert);

        // Breadcrumb génération
        $breadcrumb = array(
            array('Annonce',  $this->generateUrl('snoozit_platform_homepage')),
            array( $advert->getCity()->getDepartement()->getRegion()->getNom(),
                $this->generateUrl('snoozit_platform_show_by_region', array('slug' => $advert->getCity()->getDepartement()->getRegion()->getSlug()))),
            array( $advert->getCity()->getDepartement()->getNom(),
                $this->generateUrl('snoozit_platform_show_by_departement', array('slug' => $advert->getCity()->getDepartement()->getSlug() ))),
            array( $advert->getCity()->getNom(),
                $this->generateUrl('snoozit_platform_show_by_city', array('slug' => $advert->getCity()->getSlug() ))),
            array( $advert->getTitle(),
                '#', true),
        );

        // Formulaire des commentaires
        if($advertCommentHandler->process()){
            return $this->redirect($this->generateUrl('snoozit_show_advert', array('id' => $advert->getId(), 'slug' => $slug)));
        }

        if($advertNegoceHandler->process()){
            return $this->redirect($this->generateUrl('snoozit_show_advert', array('id' => $advert->getId(), 'slug' => $slug)));
        }

        $this->get('event_dispatcher')->dispatch(SkuagEvents::ON_SHOW_ADVERT, new AdvertEvent($advert));

        return $this->render('SnoozitPlatformBundle:Advert/Show:show.html.twig', array(
                'advert'        => $hydratedAdvert,
                'advertListToPropose' => $advertListToPropose,
                'form'          => $advertCommentHandler->createView(),
                'formNegoce'    => $advertNegoceHandler->createView(),
                'breadcrumb'    => $breadcrumb,
                'userFollow'    => $userFollow,
            ));
    }

    // Formulaire pour ajouter une annonce
    public function addAction()
    {
        $advertHandler = $this->get('sz_advert_handler');

        // Génération du breadcrumb
        $breadcrumb = array(
            array('Publier une annonce','#', true )
        );

        if($advertHandler->process()){
            $entity = $advertHandler->getFormValidationData();
            return $this->redirect($this->generateUrl('snoozit_show_advert', array('id' => $entity->getId(), 'slug' => $entity->getSlug())));
        }
        return $this->render('SnoozitPlatformBundle:Advert/Add:addAdvert.html.twig', array('form' => $advertHandler->createView(), 'breadcrumb' => $breadcrumb));
    }

    // Affiche les annonces en fonction de la région
    public function showByRegionAction(Request $request, Region $region)
    {
        // Le manager des annonces
        $advertManager = $this->getAdvertManager();
        $choices = null;

        $page_title = $region->getNom();

        $advertManager->checkRegionBySession($region->getId());

        if($request->isMethod('post')){
            $choices = $advertManager->recordChoiceFilter();
        }else{
            $advertManager->removeChoiceSession();
        }

        $advertListToPaginate = $advertManager->getAdvertByRegion($region, $choices);

        $advertList  = $this->get('knp_paginator')->paginate($advertListToPaginate, $request->query->getInt('page', 1), 10);
        $usersFound = $this->getDoctrine()->getRepository('SnoozitUserBundle:User')->getTimelineUsersFound($this->get('sz_search_engine_manager')->getPageTitle());

        $breadcrumb = array(
            array($region->getNom(), $this->generateUrl('snoozit_platform_show_by_region', array('slug' => $region->getSlug())), true),
        );

        $user = $this->getUser();
        $userFollow = false;

        if(is_object($user) || $user instanceof User) {
            $userFollow = $this->checkIfUserFollow($region);
        }

        $requestRubriqueId = $region->getId();

        return $this->getGlobalAdvertTemplating($advertList, $breadcrumb, $choices, $page_title, null ,$userFollow, $requestRubriqueId, $usersFound);

    }

    // Affiche les annonces par Departement
    public function showByDepartementAction(Request $request, Departement $departement)
    {
        // Le manager des annonces
        $advertManager = $this->getAdvertManager();
        $choices = null;
        $user = $this->getUser();
        $userFollow = false;

        // Controle si la région demandé existe
        $page_title = $departement->getNom();

        $advertManager->checkRegionBySession($departement->getRegion()->getId());

        if($request->isMethod('post')){
            $choices = $advertManager->recordChoiceFilter();
        }else{
            $advertManager->removeChoiceSession();
        }

        $advertListToPaginate = $advertManager->getAdvertByDepartement($departement, $choices);
        $advertList  = $this->get('knp_paginator')->paginate($advertListToPaginate, $request->query->getInt('page', 1), 10);



        $breadcrumb = array(
            array($departement->getRegion()->getNom(), $this->generateUrl('snoozit_platform_show_by_region', array('slug' => $departement->getRegion()->getSlug()))),
            array($departement->getNom(), '#', true),
        );

        if(is_object($user) || $user instanceof User) {
            $userFollow = $this->checkIfUserFollow($departement);
        }

        $requestRubriqueId = $departement->getId();

        return $this->getGlobalAdvertTemplating($advertList, $breadcrumb, $choices, $page_title, null, $userFollow, $requestRubriqueId);
    }

    // Affiche les annonces par Departement
    public function showByCityAction(Request $request, City $city)
    {
        // Le manager des annonces
        $advertManager = $this->getAdvertManager();
        $choices = null;
        $user = $this->getUser();
        $userFollow = false;

        // Controle si la région demandé existe
        $page_title = $city->getNom();
        if($request->isMethod('post')){
            $choices = $advertManager->recordChoiceFilter();
        }else{
            $advertManager->removeChoiceSession();
        }

        $advertListToPaginate = $advertManager->getAdvertByCity($city, $choices);
        $advertList  = $this->get('knp_paginator')->paginate($advertListToPaginate, $request->query->getInt('page', 1), 10);


        $breadcrumb = array(
            array($city->getDepartement()->getRegion()->getNom(), $this->generateUrl('snoozit_platform_show_by_region', array('slug' => $city->getDepartement()->getRegion()->getSlug()))),
            array($city->getDepartement()->getNom(), $this->generateUrl('snoozit_platform_show_by_departement', array('slug' => $city->getDepartement()->getSlug()))),
            array($city->getNom(), '#' , true ),
        );

        if(is_object($user) || $user instanceof User) {
            $userFollow = $this->checkIfUserFollow($city);
        }

        $requestRubriqueId = $city->getId();

        return $this->getGlobalAdvertTemplating($advertList, $breadcrumb, $choices, $page_title, null, $userFollow, $requestRubriqueId);

    }

    // Affiche les annonces par Category
    public function showByCategoryAction(Request $request, Category $category)
    {
        // Le manager des annonces
        $advertManager = $this->getAdvertManager();
        $choices = null;

        $noRegionSelected = $this->get('session')->get('noRegionSelected');

        $page_title = $category->getCategory();

        if($request->isMethod('post')){
            $choices = $advertManager->recordChoiceFilter();
        }else{
            $advertManager->removeChoiceSession();
        }
        if($noRegionSelected){
            $localisation = null;
        }else{
            $localisation = $advertManager->getAdvertLocalisationSession();
        }

        $user = $this->getUser();
        $userFollow = false;

        if(is_object($user) || $user instanceof User) {
            $userFollow = $this->checkIfUserFollow($category);
        }

        $advertListToPaginate = $advertManager->getAdvertByCategory($category, $choices, $localisation);

        $advertList  = $this->get('knp_paginator')->paginate($advertListToPaginate, $request->query->getInt('page', 1), 10);

        $breadcrumb = array(
            array($category->getCategory(), '#' , true ),
        );

        $requestRubriqueId = $category->getId();

        return $this->getGlobalAdvertTemplating($advertList, $breadcrumb, $choices, $page_title, $localisation, $userFollow, $requestRubriqueId, $category->getId());
    }

    // Modification de l'annonce par un Invité
    public function editAction(Advert $advert)
    {
        $session = $this->get('session');

        // On vérifie si l'annonce est modifiable par cette interface qui est réservé au Guest
        if($advert->getUser()){
            return $this->redirect($this->generateUrl('snoozit_dashboard_homepage', array('advert' => $advert->getId())));
        }

        // Si il n'y a pas de session advert on redirige direct
        if( !$session->has('editAdvert') || !array_key_exists($advert->getId(), $session->get('editAdvert')) || $session->get('editAdvert')[$advert->getId()] != $advert->getHash()   ){
            return $this->redirect($this->generateUrl('snoozit_security_access', array('advert' => $advert->getId())));
        }

        $advertHandler = $this->get('sz_advert_handler');

        // Génération du breadcrumb
        $breadcrumb = array(
            array('Editer une annonce','#'),
            array($advert->getTitle(),'#',true )
        );

        if($advertHandler->process()){
            return $this->redirect($this->generateUrl('snoozit_show_advert', array(
                'slug' => $advert->getSlug(),
                'id'  => $advert->getId())));
        }

        return $this->render('SnoozitPlatformBundle:Advert/Edit:editAdvert.html.twig',
            array(
                'form' => $advertHandler->createView(),
                'breadcrumb' => $breadcrumb,
                'advert' => $advert)
        );
    }

    // Permet de s'identifier avec d'éditer une annonce quand on est invité
    public function securityAccessAction(Advert $advert, Request $request)
    {
        $session = $this->get('session');

        // On vérifie si l'annonce est modifiable par cette interface qui est réservé au Guest
        if($advert->getUser()){
            return $this->redirect($this->generateUrl('snoozit_edit_advert_error_user', array('advert' => $advert->getId())));
        }

        // On créer la session si elle existe pas
        if(!$session->has('editAdvert')) $session->set('editAdvert', array());

        $editAdvertArray = $session->get('editAdvert');

        // Si la clé existe bien dans le tableau et que la clé correspond bien au hash de l'annonce on redirige
        // Sinon il y a un soucis quelque part et on supprime cette clé et donc on continue normalement avec le formulaire
        if(array_key_exists($advert->getId(), $editAdvertArray) and ($editAdvertArray[$advert->getId()] == $advert->getHash())){
            return $this->redirect($this->generateUrl('snoozit_edit_advert', array('advert' => $advert->getId())));
        }else{
            // Clé supprimée
            $session->remove('editAdvert/'.$advert->getId().'');
        }

        // Si la clé n'existe pas on contine pour le formulaire

        // Création du breadCrumb
        $breadcrumb = array(
            array('Editer mon annonce' , $this->generateUrl('snoozit_edit_advert', array('advert' => $advert->getId(), 'slug', $advert->getSlug()))),
            array($advert->getTitle(), '#', true)
        );

        // Initialisation
        $data = array();
        $error = null;

        $form = $this->createFormBuilder($data)
            ->add('hashkey' , 'text', array('attr' => array('placeholder' => 'dosq1ds0çds769dsdjqd77712Pqhsidkhqsdkhqsidqs87sgdqsjhd',
                'class'     => 'form-control input-sm'
            )))
            ->getForm();

        // Vérification du formulaire
        if($request->isMethod('POST')){

            $form->handleRequest($request);

            $data = $form->getData();

            if($data['hashkey'] === $advert->getHash()){

                // On enregistre la clé dans la session
                $editAdvertArray[$advert->getId()] = $data['hashkey'];

                $session->set('editAdvert', $editAdvertArray);

                return $this->redirect($this->generateUrl('snoozit_edit_advert', array('advert' => $advert->getId())));
            }else{
                $error = 'Cette combinaison est invalide';
            }

            return $this->render('SnoozitPlatformBundle:Advert/Edit/SecurityAccess:securityAccess.html.twig',
                array('advert' => $advert, 'form' => $form->createView(), 'error' => $error, 'breadcrumb' => $breadcrumb));


        }
        return $this->render('SnoozitPlatformBundle:Advert/Edit/SecurityAccess:securityAccess.html.twig',
            array('advert' => $advert, 'form' => $form->createView(), 'error' => $error, 'breadcrumb' => $breadcrumb));
    }

    // Renvoie le hashKey à un utilisateur par mail
    public function changeCombinaisonAction(Advert $advert, Request $request)
    {
        // Création du breadCrumb
        $breadcrumb = array(
            array('Réinitialiser une combinaison' , $this->generateUrl('snoozit_edit_advert', array('advert' => $advert->getId(), 'slug', $advert->getSlug()))),
            array($advert->getTitle(), '#', true)
        );

        // Une demande vient d'etre faite
        if($request->isMethod('post')){
            $em = $this->getDoctrine()->getEntityManager();
            $entity = $em->getRepository('SnoozitPlatformBundle:Advert')->find($advert->getId());

            if(!$entity){
                throw new EntityNotFoundException("L'annonce demande n'existe pas..");
            }

            $lastCombinaisonRequest = $entity->getCombinaisonRequest();

            if(!is_null($lastCombinaisonRequest)){

                $now = new \DateTime();
                $difference = $now->diff($lastCombinaisonRequest);

                if($difference->i < 30){
                    $error = 'Impossible de demander une nouvelle combinaison, veuillez attendre 30 minutes entre deux demandes.';

                    return $this->render('SnoozitPlatformBundle:Advert/Edit/SecurityAccess:changeCombinaison.html.twig', array('advert' => $advert , 'breadcrumb' => $breadcrumb, 'error' => $error));
                }

                $newHashKey = md5(rand(0, 999999999));

                $advert->setHash($newHashKey);
                $advert->setCombinaisonRequest(new \DateTime('now'));

                $em->flush();

                return $this->redirect($this->generateUrl('snoozit_change_combinaison_success', array('advert' => $advert->getId())));
            }

            $newHashKey = md5(rand(0, 999999999));

            $advert->setHash($newHashKey);
            $advert->setCombinaisonRequest(new \DateTime('now'));

            $em->flush();

            return $this->redirect($this->generateUrl('snoozit_change_combinaison_success', array('advert' => $advert->getId())));
        }

        return $this->render('SnoozitPlatformBundle:Advert/Edit/SecurityAccess:changeCombinaison.html.twig', array('advert' => $advert , 'breadcrumb' => $breadcrumb, 'error' => null));
    }

    public function changeCombinaisonSuccessAction(Advert $advert)
    {
        // Création du breadCrumb
        $breadcrumb = array(
            array('Editer mon annonce' , $this->generateUrl('snoozit_edit_advert', array('advert' => $advert->getId(), 'slug', $advert->getSlug()))),
            array($advert->getTitle(), '#', true)
        );

        return $this->render('SnoozitPlatformBundle:Advert/Edit/SecurityAccess:changeCombinaison_success.html.twig', array('advert'=> $advert,'breadcrumb' => $breadcrumb));

    }

    public function editAdvertErrorUserAction(Advert $advert)
    {
        // Génération du breadcrumb
        $breadcrumb = array(
            array('Erreur d\'édition', $this->generateUrl('snoozit_show_advert', array('id' => $advert->getId(), 'slug' => $advert->getSlug()))),
            array($advert->getTitle(),'#',true )
        );

        return $this->render('SnoozitPlatformBundle:Advert/Edit/SecurityAccess:editAdvertErrorUser.html.twig', array('advert' => $advert,'breadcrumb' => $breadcrumb));
    }

    private function getGlobalAdvertTemplating($advertList, $breadcrumb, $choices, $page_title, $localisation = null, $userFollow = false, $requestRubriqueId = null, $categoryID = null, $usersFound = null )
    {
        return $this->render('SnoozitPlatformBundle:Site:Index/index.html.twig', array(
            'advertList'    => $advertList,
            'breadcrumb'    => $breadcrumb,
            'choices'       => $choices,
            'page_title'    => $page_title,
            'localisation'  => $localisation,
            'followLink'    => $this->getRouteForFollowingButton($requestRubriqueId),
            'userFollow'    => $userFollow,
            'categoryID'    => $categoryID,
            'usersFound'    => $usersFound
            ));
    }

    private function getRouteForFollowingButton($requestRubriqueId)
    {
        $requestStack = $this->get('request_stack')->getCurrentRequest();
        $route = $requestStack->attributes->get('_route');

        if( ($route == 'snoozit_platform_show_by_category') or
            ($route == 'snoozit_platform_show_by_region') or
            ($route == 'snoozit_platform_show_by_departement') or
            ($route == 'snoozit_platform_show_by_city')
        ){
            $slug = $requestStack->attributes->get('slug');

            $em = $this->getDoctrine()->getEntityManager();

            $newRoad = null;
            $type = null;

            if($route == 'snoozit_platform_show_by_category'){ $newRoad = 'snoozit_follow_category'; $type = 'Cat';}
            if($route == 'snoozit_platform_show_by_region'){ $newRoad = 'snoozit_follow_region'; $type = 'Reg'; }
            if($route == 'snoozit_platform_show_by_departement'){ $newRoad = 'snoozit_follow_departement'; $type = 'Dep'; }
            if($route == 'snoozit_platform_show_by_city'){ $newRoad = 'snoozit_follow_city'; $type = 'City'; }

            return array('route' => $newRoad, 'id' => $requestRubriqueId, 'type' => $type );
        }

        return null;

    }

    // Contole si l'utilisateur est abonné à la rubrique
    private function checkIfUserFollow($item)
    {
        $user = $this->getUser();

        if($item instanceof Category){
           return $this->checkIfUserFollowProcess($user->getFollowedcategories(), $item);
        }

        if($item instanceof Region){
            return $this->checkIfUserFollowProcess($user->getFollowedregion(), $item);
        }

        if($item instanceof Departement){
            return $this->checkIfUserFollowProcess($user->getFolloweddepartement(), $item);
        }

        if($item instanceof City){
            return $this->checkIfUserFollowProcess($user->getFollowedcity(), $item);
        }

        if($item instanceof User){
            return $this->checkIfUserFollowProcess($user->getFolloweduser(), $item);
        }
    }

    private function checkIfUserFollowProcess($followed, $item)
    {
        $toArray = array();

        foreach($followed as $i)
        {
            $toArray[] = $i->getId();
        }

        if(in_array($item->getId(), $toArray)){
            return true;
        }

        return false;
    }

}
