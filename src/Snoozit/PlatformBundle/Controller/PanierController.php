<?php

namespace Snoozit\PlatformBundle\Controller;

use FOS\UserBundle\Model\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class PanierController extends Controller
{
    // Renvoi la panier complete
    public function indexAction(Request $request)
    {
        $user = $this->getUser();
        if(!is_object($user) || !$user instanceof User){
            throw new AccessDeniedException("Vous devez etre identifié pour acceder à cette zone");
        }

        $advertManager = $this->getAdvertManager();

        $advertListToPaginate = $advertManager->getDashboardUserInterest();
        $advertConsoleList  = $this->get('knp_paginator')->paginate($advertListToPaginate, $request->query->getInt('page', 1), 20);

        $stats  = array('refus' => $advertManager->getDashboardUserInterestByStatus(3) , 'finish' => $advertManager->getDashboardUserInterestByStatus(4) ,'income' => $advertManager->getDashboardUserInterest(), 'desist' => $advertManager->getDashboardUserInterestByStatus(5));

        $breadcrumb = array(
            array('Dashboard', $this->generateUrl('snoozit_dashboard_homepage')),
            array('Panier','#', true)
        );

        return $this->render('SnoozitPlatformBundle:DashBoard/Panier:panier.html.twig', array(
            'breadcrumb' => $breadcrumb,
            'advertConsoleList' => $advertConsoleList,
            'stats' => $stats
        ));
    }

    // Page des désistements
    public function pageDesistementAction(Request $request)
    {
        $user = $this->getUser();
        if(!is_object($user) || !$user instanceof User){
            throw new AccessDeniedException("Vous devez etre identifié pour acceder à cette zone");
        }

        $advertManager = $this->getAdvertManager();
        $status = 5 ; // Desistement
        $interestListToPaginate = $advertManager->getDashboardUserInterestByStatus($status);
        $advertList  = $this->get('knp_paginator')->paginate($interestListToPaginate, $request->query->getInt('page', 1), 20);
        $stats  = array('refus' => $advertManager->getDashboardUserInterestByStatus(3) , 'finish' => $advertManager->getDashboardUserInterestByStatus(4) ,'income' => $advertManager->getDashboardUserInterest(), 'desist' => $advertManager->getDashboardUserInterestByStatus(5));

        $breadcrumb = array(
            array('Dashboard', $this->generateUrl('snoozit_dashboard_homepage')),
            array('Panier',$this->generateUrl('snoozit_platform_panier_homepage')),
            array('Désistement','#', true)
        );

        return $this->render('SnoozitPlatformBundle:DashBoard/Panier:desistement.html.twig', array(
            'breadcrumb' => $breadcrumb,
            'advertList' => $advertList,
            'stats' => $stats
        ));
    }

    // Page des refus
    public function pageRefusAction(Request $request)
    {
        $user = $this->getUser();
        if(!is_object($user) || !$user instanceof User){
            throw new AccessDeniedException("Vous devez etre identifié pour acceder à cette zone");
        }

        $advertManager = $this->getAdvertManager();

        $status = 3 ; // Refus
        $interestListToPaginate = $advertManager->getDashboardUserInterestByStatus($status);
        $advertList  = $this->get('knp_paginator')->paginate($interestListToPaginate, $request->query->getInt('page', 1), 20);
        $stats  = array('refus' => $advertManager->getDashboardUserInterestByStatus(3) , 'finish' => $advertManager->getDashboardUserInterestByStatus(4) ,'income' => $advertManager->getDashboardUserInterest(), 'desist' => $advertManager->getDashboardUserInterestByStatus(5));

        $breadcrumb = array(
            array('Dashboard', $this->generateUrl('snoozit_dashboard_homepage')),
            array('Panier',$this->generateUrl('snoozit_platform_panier_homepage')),
            array('Refus','#', true)
        );

        return $this->render('SnoozitPlatformBundle:DashBoard/Panier:refus.html.twig', array(
            'breadcrumb' => $breadcrumb,
            'advertList' => $advertList,
            'stats' => $stats
        ));
    }

    // Page des annonces terminées
    public function pageFinishedAction(Request $request)
    {
        $user = $this->getUser();
        if(!is_object($user) || !$user instanceof User){
            throw new AccessDeniedException("Vous devez etre identifié pour acceder à cette zone");
        }

        $advertManager = $this->getAdvertManager();

        $status = 4 ; // Vendu
        $interestListToPaginate = $advertManager->getDashboardUserInterestByStatus($status);
        $advertList  = $this->get('knp_paginator')->paginate($interestListToPaginate, $request->query->getInt('page', 1), 20);
        $stats  = array('refus' => $advertManager->getDashboardUserInterestByStatus(3) , 'finish' => $advertManager->getDashboardUserInterestByStatus(4) ,'income' => $advertManager->getDashboardUserInterest(), 'desist' => $advertManager->getDashboardUserInterestByStatus(5));

        $breadcrumb = array(
            array('Dashboard', $this->generateUrl('snoozit_dashboard_homepage')),
            array('Panier',$this->generateUrl('snoozit_platform_panier_homepage')),
            array('Annonce terminée','#', true)
        );

        return $this->render('SnoozitPlatformBundle:DashBoard/Panier:finished.html.twig', array(
            'breadcrumb' => $breadcrumb,
            'advertList' => $advertList,
            'stats' => $stats
        ));
    }

    // Le manager d'annonce
    private function getAdvertManager()
    {
        return $this->get('sz_advert_manager');
    }

}
