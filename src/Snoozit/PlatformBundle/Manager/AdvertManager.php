<?php

namespace Snoozit\PlatformBundle\Manager;

use Doctrine\ORM\EntityManager;
use FOS\UserBundle\Model\UserInterface;
use Snoozit\PlatformBundle\Entity\Advert;
use Snoozit\PlatformBundle\Entity\AdvertInterest;
use Snoozit\PlatformBundle\Entity\AdvertNegoce;
use Snoozit\SkuagBundle\SkuagEvents\InterestEvent;
use Snoozit\SkuagBundle\SkuagEvents\NegoceEvent;
use Snoozit\SkuagBundle\SkuagEvents\SkuagEvents;
use Snoozit\UserBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

/**
 * Class AdvertManager
 * @package Snoozit\PlatformBundle\Manager
 */
class AdvertManager
{
    private $entityManager;
    private $requestStack;
    private $tokenStorage;
    private $session;
    private $router;
    protected $containerAware;

    const ADVERT_LIMIT_LIST = 20;
    const SESSION_INTEREST_COUNT_START = 1;
    const MAX_ADDING_INTEREST = 3; // Le nombre limite d'ajout d'interet pour une annonce sur un temps limité

    /**
     * @param EntityManager $entityManager
     * @param RequestStack $requestStack
     * @param TokenStorage $tokenStorage
     * @param Session $session
     */
    public function __construct(EntityManager $entityManager, RequestStack $requestStack,TokenStorage $tokenStorage, Session $session, Router $router, ContainerInterface $containerAware )
    {
        $this->entityManager    = $entityManager;
        $this->requestStack     = $requestStack;
        $this->tokenStorage     = $tokenStorage;
        $this->session          = $session;
        $this->router           = $router;
        $this->containerAware  = $containerAware;
    }

    // Récupere la liste des annonces sans distinctions
    /**
     * @return array
     */
    public function getLastAdverts($choices, $localisation)
    {
        $response = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getLastAdverts($choices, $localisation);

        return $response;
    }

    // Controle la validité des slug lors de l'affichage des annonces
    /**
     * @param $slug
     * @param $advert
     * @return bool
     */
    public function verifSlug($slug, $advert)
    {
        $entity = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->findOneBy(array('slug' => $slug, 'id' => $advert));

        if($entity){
            return true;
        }

    }

    // Récupere une liste d'annonces en corélation avec l'annonces affichée
    /**
     * @param $advert
     * @return array
     */
    public function getAdvertListToPropose($advert)
    {
        $advertList = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getAdvertListToPropose($advert);

        return $advertList;
    }

    // Réhydration des annonces pour la partie Show Advert afin d'uniformiser l'affichage
    /**
     * @param $advert
     * @return array
     * @throws \Doctrine\ORM\EntityNotFoundException
     */
    public function rehydrateAdvert($advert)
    {
        return $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->rehydrateAdvert($advert);
    }

// PARTIE CONCERNANT LES INTERETS POUR LES ANNONCES EMISES

    // Gere les interets pour les annonces
    /**
     * @param Advert $advert
     * @return bool
     */
    public function processInterest(Advert $advert)
    {
        // Message pour les flashbags
        $error_msg = 'Vous devez patienter 1 heure pour retransmettre votre interet pour cette annonce.';
        $success_msg = 'Votre interet pour cette annonce a bien été pris en compte.';
        $success_msg_remove = 'Votre interet pour cette annonce a été retirée';

        // La session n'existe pas
        if(!$this->session->has('advertInterest'))
        {
            // On crée la session avec un tableau vide
            $this->session->set('advertInterest', array());

            // On enregistre la session dans cette variable $advertInterestSession
            $advertInterestSession = $this->session->get('advertInterest');

            // On controle la base de données si une entrée est déja présente si c'est le cas
            // Ca veut dire que l'utilisateur n'est plus interessé par cette annonce
            if($this->checkAdvertInterestByUser($advert)){

                // Il y a déja une entrée pour cette annonce en base de données
                // on initialise donc la session.
                $this->initializeInterestSession($advertInterestSession, $advert->getId());

                // On envoi le flashbag de validation de suppression d'interet pour cette annonce
                $this->session->getFlashBag()->add('success' , $success_msg_remove );
            }
            // Il n'y a rien en base de données on lance l'initialisation
            else{

                $this->initializeInterestSession($advertInterestSession, $advert->getId());
                $this->createInterestAdvert($advert);

                $this->session->getFlashBag()->add('success' , $success_msg );
            }

            return true;

        }
        // La session existe
        else{

            $advertInterestSession = $this->session->get('advertInterest');

            // On controle si notre advert est dedans
            if(array_key_exists($advert->getId(), $advertInterestSession)){


                // Si compteur est inférieur a 3 ( MAX_ADDING_INTEREST ) on enregistre le changement
                // et on incrémente la session
                if ($advertInterestSession[$advert->getId()] <= self::MAX_ADDING_INTEREST) {

                    if($this->checkAdvertInterestByUser($advert)){

                        $this->session->getFlashBag()->add('success' , $success_msg_remove );
                    }
                    else{
                        $this->createInterestAdvert($advert);
                        $this->session->getFlashBag()->add('success' , $success_msg );
                    }

                    $compteur = $advertInterestSession[$advert->getId()];
                    $compteur++;

                    $advertInterestSession[$advert->getId()] = $compteur;
                    $this->session->set('advertInterest', $advertInterestSession);

                    return true;

                }
                else {
                    $this->session->getFlashBag()->add('error', $error_msg);

                    return false;
                }
            }
            // Si elle n'est pas dedans on la créer
            else{

                $this->initializeInterestSession($advertInterestSession, $advert->getId());
                $this->createInterestAdvert($advert);

                $this->session->getFlashBag()->add('success' , $success_msg );
                return true;
            }
        }

    }

    private function initializeInterestSession($advertInterestSession, $advertId)
    {
        $advertInterestSession[$advertId] = 1;
        $this->session->set('advertInterest', $advertInterestSession);

        return;
    }

    // Controle si l'utilisateur est déja interessé par l'annonce
    // Si c'est le cas alors on supprime car c'est une annulation d'interet
    /**
     * @param $advert
     * @return bool
     */
    private function checkAdvertInterestByUser($advert)
    {
        $advertInterest = $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertInterest')->findOneBy(array('user' => $this->tokenStorage->getToken()->getUser(), 'advert' => $advert));

        if($advertInterest){

            $this->entityManager->remove($advertInterest);
            $this->entityManager->flush();

            $this->containerAware->get('event_dispatcher')->dispatch(SkuagEvents::ON_REMOVE_INTEREST, new InterestEvent($advert, $this->getUser()));

            return true;
        }

        return false;

    }

    // Créer l'objet annonceInterest
    /**
     * @param Advert $advert
     * @return bool
     */
    private function createInterestAdvert(Advert $advert)
    {
        $optionType = $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertOptionType')->find(1);

        //Sinon on lance la procédure
        $advertInterest = new AdvertInterest();

        $advertInterest
            ->setUser($this->tokenStorage->getToken()->getUser())
            ->setAdvert($advert)
            ->setAdvertOptionType($optionType)
        ;

        $this->entityManager->persist($advertInterest);
        $this->entityManager->flush();

        $this->containerAware->get('event_dispatcher')->dispatch(SkuagEvents::ON_ADD_INTEREST, new InterestEvent($advert, $this->getUser()));

        return true;
    }

// NEGOCIATION


// FIN DE LA PARTIE POUR L'INTERET et NEGOCIATIONS DES ANNONCES EMISES

    // Controle du slug transmis pour les régions
    public function checkExistRegion($slug){
         $entity = $this->entityManager->getRepository('SnoozitPlatformBundle:Localisation\Region')->findOneBy(array('slug' => $slug));

        if($entity){
            return $entity;
        }

        return false;
    }

    public function checkExistDepartement($slug)
    {
        $entity = $this->entityManager->getRepository('SnoozitPlatformBundle:Localisation\Departement')->findOneBy(array('slug' => $slug));

        if($entity){
            return $entity;
        }

        return false;
    }

    public function checkExistCity($slug)
    {
        $entity = $this->entityManager->getRepository('SnoozitPlatformBundle:Localisation\City')->findOneBy(array('slug' => $slug));

        if($entity){
            return $entity;
        }

        return false;
    }

    public function checkExistCategory($slug)
    {
        $entity = $this->entityManager->getRepository('SnoozitPlatformBundle:Categories\Category')->findOneBy(array('slug' => $slug));

        if($entity){
            return $entity;
        }

        return false;
    }

    // Récupere la liste des annonces de la région
    public function getAdvertByRegion($region, $choices)
    {
        $adverts = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getByRegion($region, $choices);

        return $adverts;
    }

    // Récupere la liste des annonces de la région
    public function getAdvertByDepartement($departement, $choices)
    {
        $adverts = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getByDepartement($departement, $choices);

        return $adverts;
    }

    // Récupere la liste des annonces de la région
    public function getAdvertByCity($city, $choices)
    {
        $adverts = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getByCity($city, $choices);

        return $adverts;
    }

    // Récupere la liste des annonces par catégorie
    public function getAdvertByCategory($category, $choices, $localisation = null)
    {
        $adverts = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getByCategory($category, $choices, $localisation);

        return $adverts;
    }

    public function getAdvertForSearchEngine($parameters, $choices,  $localisation = null)
    {
        $adverts = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getAdvertForSearchEngine($parameters,$choices, $localisation);

        return $adverts;
    }

 // CREATIONS DES FILTRES POUR LES ANNONCES

    // Génération des filtres
    public function getAdvertFilters()
    {
        $localisation = $this->entityManager->getRepository('SnoozitPlatformBundle:Localisation\Region')->findAll();
        $showBy = array('les membres', 'avec image', 'sans image', 'mes centres d\'interets');
        $userSuggestion = $this->getUserToPropose();

        return array('localisation' => $localisation, 'showBy' => $showBy, 'userSuggestion' => $userSuggestion);
    }

    private function getUserToPropose()
    {
        $user = $this->getUser();

        if(!is_object($user) || !$user instanceof User){
            $suggestion = $this->entityManager->getRepository('SnoozitUserBundle:User')->findUserToPropose();

            return $suggestion;
        }

        $suggestion = $this->entityManager->getRepository('SnoozitUserBundle:User')->findUserToPropose($user, $user->getFolloweduser()->toArray());

        return $suggestion;
    }

    private function getUser()
    {
        return $this->tokenStorage->getToken()->getUser();
    }

    public function recordChoiceFilter()
    {
        // Une session existe t'elle ? on la crée si c'est pas le cas
        if(!$this->session->has('choicesFilters')) $this->session->set('choicesFilters', array());

        // On entre la session dans la variable $choicesFilters
        $choicesFiltersSession = $this->session->get('choicesFilters');
        $choice  = $this->requestStack->getCurrentRequest()->get('cBox');
        $toReturn = array();

        if($choice){
            foreach($choice as $key => $value){

                if(array_search($value, $choicesFiltersSession)){
                    unset($choicesFiltersSession[$key]);
                }
                else{
                    $choicesFiltersSession[$key] = $value;
                }
                $toReturn[] = $value;
            }
        }else{
            $this->removeChoiceSession();
        }

        // On envoi la session modifié
        $this->session->set('choicesFilters', $toReturn);

        $choices = array();
        if($toReturn){
            foreach($toReturn as $key => $value)
            {
                $choices[$key] = $value;
            }
        }

        return $choices;
    }

    public function removeChoiceSession()
    {
        if($this->session->has('choicesFilters')){
           $this->session->remove('choicesFilters');
        }

        return;
    }

    public function getRegionFilterValidate()
    {
        if(!$this->requestStack->getCurrentRequest()->isMethod('POST')){
            return false;
        }

        $regionSearch = $this->requestStack->getCurrentRequest()->get('localisation');

        $region = $this->entityManager->getRepository('SnoozitPlatformBundle:Localisation\Region')->find($regionSearch);

        if($region){
            $this->checkRegionBySession($region->getId());
            return true;
        }

        return false;
    }

    public function regionFilterRedirection()
    {
        $regionSearch = $this->requestStack->getCurrentRequest()->get('localisation');
        $region = $this->entityManager->getRepository('SnoozitPlatformBundle:Localisation\Region')->find($regionSearch);
        $this->session->set('RegionFilter', $region->getId());

        return $this->router->generate('snoozit_platform_show_by_region', array('slug' => $region->getSlug()));
    }

// MEDIA PUBS

    // Affichage des publicité sous le breadcrumb
    public function getMediaToPropose()
    {
        return  $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getMediaToPropose();

    }

    public function checkRegionBySession($region)
    {
        if(!$this->session->has('selectedRegion')) $this->session->set('selectedRegion', null);

        $selectedRegionSession = $this->session->get('selectedRegion');

        if($selectedRegionSession == $region){
            return;
        }
        $selectedRegionSession = $region;

        $this->session->remove('lastSearch');
        $this->session->set('selectedRegion', $selectedRegionSession);

        return;
    }

    public function getAdvertLocalisationSession()
    {
       /* // Si on se trouve hors de la route "snoozit_platform_show_by_category" on ne fait rien
        // Sinon on renvoi la région
        if($route != 'snoozit_platform_show_by_category'){
            return null;
        }*/

        if($this->session->has('selectedRegion')){
            $check = $this->session->get('selectedRegion');

            $region = $this->entityManager->getRepository('SnoozitPlatformBundle:Localisation\Region')->find($check);
            if($region){
                return array( 'id' => $region->getId(), 'nom' => $region->getNom(), 'slug' => $region->getSlug());
            }
        }

        return null;

    }

    public function checkLocalisationSessionStatus()
    {
        if($this->session->has('selectedRegion')){
            return true;
        }

        return false;
    }

    public function removeFilters()
    {
        if($this->session->has('choicesFilters')){
            $this->session->remove('choicesFilters');

            return;
        }
        return;
    }

// Profile utilisateur

    // Affiche les annonces dans le dashboard en prenant en compte les abonnements
    public function getAdvertListForUser(User $user)
    {
        $followedList = $this->getAllUserFollow($user);
        $hiddenUsersIds = $this->getHiddenUsers($user);

        return $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getAdvertListForUser($followedList, $user,$hiddenUsersIds);
    }

    public function getUserAdvertList(User $user)
    {
        return $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getUserAdvertList($user);
    }

    private function getAllUserFollow(User $user)
    {
        $regions        = $user->getFollowedregion();
        $departements   = $user->getFolloweddepartement();
        $citys          = $user->getFollowedcity();
        $categories     = $user->getFollowedcategories();
        $users          = $user->getFolloweduser();

        $regionIds = array();
        $departementsIds = array();
        $citysIds = array();
        $categoriesIds = array();
        $usersIds = array();

        $advertsRegionsListId = array();
        $advertsDepartementsListId = array();
        $advertsCitysListId = array();
        $advertsUsersListId = array();
        $advertsCategoriesListId = array();

        // Synchro par région
        foreach($regions as $r)
        {
            $regionIds[] = $r->getId();
        }

        $advertByRegion = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getAdvertByRegionFollowed($regionIds);
        if($advertByRegion){
            foreach ($advertByRegion as $row) {
                $advertsRegionsListId[] = $row['id'];
            }
        }

        // Synchro par département
        foreach($departements as $r)
        {
            $departementsIds[] = $r->getId();
        }
        $advertByDepartements = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getAdvertByDepartementFollowed($departementsIds);
        if($advertByDepartements){

            foreach ($advertByDepartements as $row) {
                $advertsDepartementsListId[] = $row['id'];
            }
        }

        // Synchro par city
        foreach($citys as $r)
        {
            $citysIds[] = $r->getId();
        }
        $advertByCity = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getAdvertByCityFollowed($citysIds);
        if($advertByCity){

            foreach ($advertByCity as $row) {
                $advertsCitysListId[] = $row['id'];
            }

        }

        // Synchro par categorie
        foreach($categories as $r)
        {
            $categoriesIds[] = $r->getId();
        }
        $advertByCategories = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getAdvertByCategoriesFollowed($categoriesIds);
        if($advertByCategories){

            foreach ($advertByCategories as $row) {
                $advertsCategoriesListId[] = $row['id'];
            }

        }

        // Synchro par Utilisateur
        foreach($users as $r)
        {
            $usersIds[] = $r->getId();
        }
        $advertByUsers = $this->entityManager->getRepository('SnoozitPlatformBundle:Advert')->getAdvertByUsersFollowed($usersIds);
        if($advertByUsers){

            foreach ($advertByUsers as $row) {
                $advertsUsersListId[] = $row['id'];
            }
        }

        $advertList = array_merge($advertsRegionsListId,$advertsDepartementsListId, $advertsCitysListId, $advertsCategoriesListId, $advertsUsersListId);
        return array_unique($advertList);

    }

    //Les utilisateurs à ne pas afficher
    public function getHiddenUsers(User $user)
    {
        $hiddenUsers    = $user->getHiddenUsers();
        $hiddenUsersIds = array();

        foreach ($hiddenUsers as $r ) {
            $hiddenUsersIds[] =  $r->getId();
        }

        return $hiddenUsersIds;
    }

// NEGOCE
    private function getAdvertNegoceRepository()
    {
        return $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertNegoce');
    }

    private function getAdvertInterestRepository()
    {
        return $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertInterest');
    }

    public function getDashboardNegoce()
    {
        return $this->getAdvertNegoceRepository()->findUserAdvertInNegoce($this->getUser());
    }

    public function removeNegoce(AdvertNegoce $negoce)
    {
        $this->entityManager->remove($negoce);
        $this->entityManager->flush();

        return;
    }

// Manager d'annonce

// DASHBOARD INTEREST
    public function getDashboardInterest()
    {
        return $this->getAdvertInterestRepository()->findUserAdvertInInterest($this->getUser());
    }

    public function getDashboardUserInterest()
    {
        return $this->getAdvertInterestRepository()->findAdvertUserInterest($this->getUser());
    }

    public function getDashboardUserInterestByStatus($status)
    {
        return $this->getAdvertInterestRepository()->findDashboardUserInterestByStatus($this->getUser(),$status);
    }

    public function getInterestArchives()
    {
        return $this->getAdvertInterestRepository()->getInterestArchives($this->getUser());
    }

    // Accept un interet pour une de mes annonces
    public function acceptInterest(AdvertInterest $interest)
    {
        // Renvoi " Feliciation! "
        $optionType = $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertOptionType')->find(2);

        // On lance le dispatch d'évenement
        $this->containerAware->get('event_dispatcher')->dispatch(SkuagEvents::ON_ACCEPT_INTEREST, new InterestEvent($interest->getAdvert(), $interest->getUser()));

        $interest->setAdvertOptionType($optionType);

        $this->entityManager->persist($interest);
        $this->entityManager->flush();

        return;
    }

    // Refuse un interet pour une de mes annonces
    public function removeInterest(AdvertInterest $interest)
    {
        // Renvoi " Refus "
        $optionType = $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertOptionType')->find(3);

        // On lance le dispatch d'évenement
        $this->containerAware->get('event_dispatcher')->dispatch(SkuagEvents::ON_REFUSE_INTEREST, new InterestEvent($interest->getAdvert(), $interest->getUser()));

        $interest->setAdvertOptionType($optionType);

        $this->entityManager->persist($interest);
        $this->entityManager->flush();

        return;
    }

    // Desistement  d'un interet pour une de mes annonces
    public function desistInterest(AdvertInterest $interest)
    {
        // Renvoi " Desistement ! "
        $optionType = $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertOptionType')->find(5);

        // On lance le dispatch d'évenement
        $this->containerAware->get('event_dispatcher')->dispatch(SkuagEvents::ON_DESIST_INTEREST, new InterestEvent($interest->getAdvert(), $interest->getUser()));

        $interest->setAdvertOptionType($optionType);

        $this->entityManager->persist($interest);
        $this->entityManager->flush();

        return;
    }

}