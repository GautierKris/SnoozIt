<?php

namespace Snoozit\PlatformBundle\Manager;

use Doctrine\ORM\EntityManager;
use Snoozit\PlatformBundle\Entity\Advert;
use Snoozit\PlatformBundle\Entity\AdvertInterest;
use Snoozit\PlatformBundle\Entity\AdvertNegoce;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Router;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class StatsManager
{
    private $entityManager;
    private $requestStack;
    private $tokenStorage;
    private $session;
    private $router;
    private static $maxAdvert = 50;
    private static $rejectStatus = 2;

    public function __construct(EntityManager $entityManager, RequestStack $requestStack, TokenStorage $tokenStorage, Session $session, Router $router)
    {
        $this->entityManager = $entityManager;
        $this->requestStack  = $requestStack->getCurrentRequest();
        $this->tokenStorage  = $tokenStorage;
        $this->session       = $session;
        $this->router        = $router;
    }

    public function getAllStats()
    {
        $totalAdvert   = $this->countUserAdverts();

        if($totalAdvert){
            $percentAdvert  = $this->countPercentAdvert($totalAdvert); // Le pourcentage d'annonce
            $totalSuccess   = $this->countAdvertsSuccess(); // Le nombre d'annonces réussies
            $totalNegoce    = $this->countUserAdvertsInNegoce(); // Le nombre d'annonce ou les annonces de l'utilisateur sont concernées
            $percentSuccess = $this->countPercentSuccess($totalAdvert, $totalSuccess); // Le pourcentage de vente réussie
            $percentNegoce  = $this->countPercentNegoce($totalAdvert, $totalNegoce); // Le pourcentage d'annonce ou il y a eu au moins une négociation
            $openPercent    = $this->countPercentageView(); // Le taux moyen d'ouverture des annonces
            $toSell         = $this->getAdvertActiveTotalAmount(); // Le montant total des annonces active
            $inNegoce       = $this->countInNegoce(); // Le nombre total d'annonce en négociation pour les annonce de l'utilisateur
            $totalinterest  = $this->countTotalInterest(); // Le nombre total d'annonce ou il y a un interet pour les annonces de l'utilisateur
            $successAmount  = $this->countAdvertSuccessAmount(); // Le total en Euros des ventes réussies
            $recentNegoce   = $this->countRecentNegoce();
            $totalViews     = $this->countTotalView();

        }else{
            $percentAdvert  = 0;
            $totalSuccess   = 0;
            $percentSuccess = 0;
            $percentNegoce  = 0;
            $openPercent    = 0;
            $toSell         = 0;
            $inNegoce       = 0;
            $totalinterest  = 0;
            $successAmount  = 0;
            $recentNegoce   = 0;
            $totalViews     = 0;
        }

        $countAdvertUserIsInterested = $this->countAdvertUserIsInterested();

        $analys = array(
            'totalAdverts'                  => $percentAdvert,
            'totalSuccess'                  => $totalSuccess,
            'percentSuccess'                => $percentSuccess,
            'percentNegoce'                 => $percentNegoce,
            'openPercent'                   => $openPercent,
            'toSell'                        => $toSell,
            'inNegoce'                      => $inNegoce,
            'totalinterest'                 => $totalinterest,
            'successAmount'                 => $successAmount,
            'countAdvertUserIsInterested'   => $countAdvertUserIsInterested,
            'recentNegoce'                  => $recentNegoce,
            'recentInterest'                => $this->countRecentInterest(),
            'recentReject'                  => $this->countRecentReject(),
            'negoceByWeek'                  => $this->countNegoceForUserAdvertByWeek(),
            'interestByWeek'                => $this->countInterestForUserAdvertByWeek(),
            'totalViews'                    => $totalViews,
        );

        return $analys;

    }

    private function countNegoceForUserAdvertByWeek()
    {
        return $this->getAdvertNegoceRepository()->countNegoceForUserAdvertByWeek($this->getUser(),$this->getBeforeOneWeekDateTime());
    }

    private function countInterestForUserAdvertByWeek()
    {
        return $this->getAdvertInterestRepository()->countInterestForUserAdvertByWeek($this->getUser(), $this->getBeforeOneWeekDateTime());
    }

    private function getUser()
    {
        return $this->tokenStorage->getToken()->getUser();
    }

    private function getAdvertRepository()
    {
        return $this->entityManager->getRepository('SnoozitPlatformBundle:Advert');
    }

    private function getAdvertNegoceRepository()
    {
        return $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertNegoce');
    }

    private function getAdvertInterestRepository()
    {
        return $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertInterest');
    }

    private function getAdvertActiveTotalAmount()
    {
        $list =  $this->getAdvertRepository()->findBy(array('user' => $this->getUser()));

        $total = 0;
        foreach ($list as $row) {
            $total += $row->getPrice();
        }

        return $total;
    }

    private function countUserAdverts()
    {
        return count($this->getAdvertRepository()->getUserAdvertList($this->getUser()));
    }

    private function countAdvertsSuccess()
    {
        return count($this->getAdvertRepository()->findBy(array('user' => $this->getUser(), 'success' => true )));
    }

    private function countPercentAdvert($totalAdverts)
    {
        return $totalAdverts/self::$maxAdvert*100;
    }

    private function countPercentSuccess($totalAdverts, $totalSuccess)
    {
        return round($totalSuccess/$totalAdverts*100);
    }

    private function countPercentNegoce($totalAdverts, $totalNegoce)
    {
        return round(($totalNegoce/$totalAdverts) *100);
    }

    private function countUserAdvertsInNegoce()
    {
        $adverts = $this->getAdvertRepository()->findBy(array('user' => $this->getUser()));

        $result = 0;
        if($adverts){
            foreach ( $adverts as $row ) {
                if($row->getNegoces()->toArray() != null){
                    $result += 1;
                }
            }
        }

        return $result;
    }

    private function countInNegoce()
    {
        return $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertNegoce')->getAdvertInNegoceFor($this->getUser());
    }

    private function countTotalInterest()
    {
        return $this->getAdvertInterestRepository()->countTotalInterestForUserAdvert($this->getUser());
    }

    private function countAdvertSuccessAmount()
    {
        $list =  $this->getAdvertRepository()->findBy(array('user' => $this->getUser(), 'success' => true));

        $total = 0;
        foreach ($list as $row) {
            $total += $row->getPrice();
        }

        return $total;
    }

    private function countAdvertUserIsInterested()
    {
        return $this->entityManager->getRepository('SnoozitPlatformBundle:AdvertInterest')->countAdvertUserIsInterested($this->getUser());

    }

    // Renvoi le nombre refus de négociations pour l'utilisateur
    private function countRecentReject()
    {
        return count($this->getAdvertNegoceRepository()->findBy(array('user' => $this->getUser(), 'status' => self::$rejectStatus)));
    }

    // Renvoi le nombre d'annonces ayant recu un interet
    private function countRecentInterest()
    {
        return $this->getAdvertInterestRepository()->getAdvertInterestFor($this->getUser(), $this->getBeforeOneDayDateTime());
    }

    // Renvoi le nombre d'annonces ayant recu une demande de négociation
    private function countRecentNegoce()
    {
        return $this->getAdvertNegoceRepository()->getAdvertNegoceFor($this->getUser(), $this->getBeforeOneDayDateTime());
    }

    // Renvoi un datetime - 24 heures
    private function getBeforeOneDayDateTime()
    {
        $datetime = new \DateTime();

        return $datetime->modify('-24 hour');

    }

    // Renvoi un datetime - 7 jours
    private function getBeforeOneWeekDateTime()
    {
        $datetime = new \DateTime();

        return $datetime->modify('-7 day');

    }

    // Compte le nombre total de visites pour l'utilisateur
    public function countTotalView()
    {
        return $this->getAdvertRepository()->countTotalView($this->getUser());
    }

    private function countPercentageView()
    {
        $count = $this->getAdvertRepository()->countPercentageView($this->getUser());
        $totalAdvert = $this->countUserAdverts();

        return round($count/$totalAdvert*100);
    }

}