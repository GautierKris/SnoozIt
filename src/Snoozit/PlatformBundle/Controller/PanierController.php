<?php

namespace Snoozit\PlatformBundle\Controller;

use FOS\UserBundle\Model\User;
use FOS\UserBundle\Model\UserInterface;
use Snoozit\PlatformBundle\Entity\Advert;
use Snoozit\PlatformBundle\Entity\AdvertInterest;
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
            throw new AccessDeniedException("Vous devez être identifié pour acceder à cette zone");
        }

        $advertManager = $this->getAdvertManager();

        $advertListToPaginate = $advertManager->getDashboardUserInterest();
        $advertConsoleList  = $this->get('knp_paginator')->paginate($advertListToPaginate, $request->query->getInt('page', 1), 20);

        $stats  = array('refus' => $advertManager->getDashboardUserInterestByStatus(3) , 'finish' => $advertManager->getDashboardUserInterestByStatus(4) ,'income' => $advertManager->getDashboardUserInterest(), 'desist' => $advertManager->getDashboardUserInterestByStatus(5));

        // Création du formulaire pour les commentaires de chaque annonces
        $sellCommentHandler = $this->get('sz_panier_comment_handler');

        if($sellCommentHandler->process()){
            return $this->redirect($this->generateUrl('snoozit_platform_panier_homepage'));
        }

        $breadcrumb = array(
            array('Dashboard', $this->generateUrl('snoozit_dashboard_homepage')),
            array('Panier','#', true)
        );

        return $this->render('SnoozitPlatformBundle:DashBoard/Panier:panier.html.twig', array(
            'breadcrumb' => $breadcrumb,
            'advertConsoleList' => $advertConsoleList,
            'stats' => $stats,
            'form'  => $sellCommentHandler->createView()
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

    // Ajoute une annonce dans le panier
    public function addInPanierAction(Request $request, Advert $advert)
    {
        $referer = $request->headers->get('referer');
        $session = $this->get('session');

        if(is_null($referer) or !$session->has('add_in_panier')){
            return $this->redirect($this->generateUrl('snoozit_platform_panier_homepage'));
        }

        // On supprime la session qui permet de ne pas acceder à cette page directement
        $session->remove('add_in_panier');

        $user = $this->getUser();
        if(!is_object($user) || !$user instanceof User){
            throw new AccessDeniedException("Vous devez etre identifié pour acceder à cette zone");
        }

        $breadcrumb = array(
            array('Panier','#', true)
        );

        $advertListToPropose = $this->getAdvertManager()->getAdvertListToProposeForPanier($advert, 3);

        return $this->render('SnoozitPlatformBundle:Site/Templating/Panier:ajout_panier.html.twig',array(
            'breadcrumb'        => $breadcrumb,
            'advert'            => $advert,
            'advertListToPropose'     => $advertListToPropose,
            'referer'           => $referer
        ));
    }

    // Retire une annonce dans le panier
    public function removeInPanierAction(Request $request, Advert $advert)
    {
        $referer = $request->headers->get('referer');

        if(is_null($referer)){
            return $this->redirect($this->generateUrl('snoozit_platform_panier_homepage'));
        }

        $user = $this->getUser();
        if(!is_object($user) || !$user instanceof User){
            throw new AccessDeniedException("Vous devez etre identifié pour acceder à cette zone");
        }

        $breadcrumb = array(
            array('Panier','#', true)
        );

        $advertListToPropose = $this->getAdvertManager()->getAdvertListToProposeForPanier($advert, 3);

        return $this->render('SnoozitPlatformBundle:Site/Templating/Panier:remove_panier.html.twig',array(
            'breadcrumb'        => $breadcrumb,
            'advert'            => $advert,
            'advertListToPropose'     => $advertListToPropose,
            'referer'           => $referer
        ));
    }

    // Remove refus dans le panier
    public function removeRefusInPanierAction(Request $request, AdvertInterest $advertInterest)
    {
        $user = $this->getUser();
        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('Vous devez être identifié pour pouvoir acceder à cette zone.');
        }

        // Si on n'est pas dans la situation actuelle de 5 ( Desistement )
        if ($advertInterest->getAdvertOptionType()->getId() == 3 and $advertInterest->getUser() == $user) {

            $em = $this->getDoctrine()->getManager();

            $entity = $advertInterest->setCustomerFade(true);
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('snoozit_platform_panier_homepage'));
        }

        throw new AccessDeniedException('Il y a un probleme de traitement dans removeRefusInPanierAction');
    }

    // Le manager d'annonce
    private function getAdvertManager()
    {
        return $this->get('sz_advert_manager');
    }



}
