<?php

namespace Snoozit\PlatformBundle\Controller;

use Doctrine\ORM\EntityNotFoundException;
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
        $em = $this->getDoctrine()->getManager();

        // AJOUT DU TRAITEMENT DES ANNONCES DÉJA TERMINÉES

        foreach( $advertListToPaginate as $row){

            if($row->getAdvert()->getSold() == TRUE)
            {
                $advertInterest = $em->getRepository('SnoozitPlatformBundle:AdvertInterest')->findOneBy(array('user' => $this->getUser(), 'advert' => $row->getAdvert() ));

                // On récupere le statut (6) soit attente validation
                $advertOptionType = $em->getRepository("SnoozitPlatformBundle:AdvertOptionType")->find(4);

                // Modification du statut de l'interet
                $advertInterest->setAdvertOptionType($advertOptionType);
            }
        }

        /////////////////////
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

        $interestListToPaginate = $advertManager->getDashboardUserInterestByStatus(4);
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

    // Réactive un interet qui à été mis en désistement
    public function reactiveInterestAction(Request $request, AdvertInterest $advertInterest)
    {
        $user = $this->getUser();
        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('Vous devez être identifié pour pouvoir acceder à cette zone.');
        }

        // Si on n'est pas dans la situation actuelle de 5 ( Desistement )
        if ($advertInterest->getAdvertOptionType()->getId() == 5 and $advertInterest->getUser() == $user) {

            $em = $this->getDoctrine()->getManager();
            $statut  = $em->getRepository('SnoozitPlatformBundle:AdvertOptionType')->find(2);
            $entity = $advertInterest->setAdvertOptionType($statut);

            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('snoozit_platform_panier_homepage'));
        }

        throw new AccessDeniedException('Il y a un probleme de traitement dans reactiveInterestAction');

    }

    // Le manager d'annonce
    private function getAdvertManager()
    {
        return $this->get('sz_advert_manager');
    }

    public function getSellCommentFormAction($form_path, $advertId, $advertInterest)
    {
        // Création du formulaire pour les commentaires de chaque annonces
        $sellCommentHandler = $this->get('sz_panier_comment_handler');

        if($sellCommentHandler->process()){
            return $this->redirect($this->generateUrl('snoozit_platform_panier_homepage'));
        }

        return $this->render('SnoozitPlatformBundle:DashBoard/Panier:sellCommentForm.html.twig', array(
            'form' => $sellCommentHandler->createView(),
            'form_path' => $form_path,
            'advertId' => $advertId,
            'advertInterestId' => $advertInterest
        ));
    }

    // Permet de valider un achat
    public function confirmAchatAction(AdvertInterest $advertInterest)
    {
        $user = $this->getUser();
        // On controle si l'interet est bien avec le statut (2) soit 'Félicitation'
        if($advertInterest->getAdvertOptionType()->getId() != 2){
            throw new EntityNotFoundException('Cette annonce ne remplie pas les conditions requises.');
        }

        // On controle que l'utilisateur est bien l'acheteur.
        if($user != $advertInterest->getUser()){
            throw new AccessDeniedException("Cet interet ne vous appartient pas");
        }

        // Tout les testes sont bien validés on passe au traitement
        $em = $this->getDoctrine()->getEntityManager();

        // On récupere le statut (6) soit attente validation
        $advertOptionType = $em->getRepository("SnoozitPlatformBundle:AdvertOptionType")->find(6);

        // Modification du statut de l'interet
        $advertInterest->setAdvertOptionType($advertOptionType);

        $em->persist($advertInterest);
        $em->flush();

        return $this->redirect($this->generateUrl('snoozit_platform_panier_homepage'));
    }

    // Le produit acheté à bien été recu par l'acheteur
    public function produitRecuAction(AdvertInterest $advertInterest)
    {
        $user = $this->getUser();
        // On controle si l'interet est bien avec le statut (7) soit 'En attente produit'
        if($advertInterest->getAdvertOptionType()->getId() != 7){
            throw new EntityNotFoundException('Cette annonce ne remplie pas les conditions requises.');
        }

        // On controle que l'utilisateur est bien l'acheteur.
        if($user != $advertInterest->getUser()){
            throw new AccessDeniedException("Cet interet ne vous appartient pas");
        }

        // Tout les testes sont bien validés on passe au traitement
        $em = $this->getDoctrine()->getEntityManager();

        // On récupere le statut (4) soit attente validation
        $advertOptionType = $em->getRepository("SnoozitPlatformBundle:AdvertOptionType")->find(4);

        // Modification du statut de l'interet
        $advertInterest->setAdvertOptionType($advertOptionType);

        // On passe donc l'annonce en non visible via setSold() = true
        $advert = $advertInterest->getAdvert();
        $advert->setSold(true);

        $em->persist($advertInterest);
        $em->persist($advert);
        $em->flush();

        return $this->redirect($this->generateUrl('snoozit_platform_panier_homepage'));
    }

}
