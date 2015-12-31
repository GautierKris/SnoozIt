<?php

namespace Snoozit\PlatformBundle\Controller;

use FOS\UserBundle\Model\UserInterface;
use Snoozit\PlatformBundle\Entity\Advert;
use Snoozit\PlatformBundle\Entity\AdvertInterest;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class InterestController extends Controller
{
    //////////////////////////////////
    //      LA PAGES DU PANIER
    //////////////////////////////////

    // Je suis interessé ou plus interessé par une annonce
    public function interestedByAction(Request $request, Advert $advert)
    {
        if (!is_object($this->getUser()) || !$this->getUser() instanceof UserInterface) {
            throw new AccessDeniedException('Vous devez etre identifié pour pouvoir acceder à cette zone.');
        }

        $advertManager = $this->getAdvertManager();
        $response = $this->redirect($this->generateUrl('snoozit_platform_add_in_panier', array('id' => $advert->getId()) ));
        $session = $this->get('session');

        // ProcessInterest va controller si oui ou non
        // l'interet existe en BDD et ajuste le résultat
        if ($advertManager->processInterest($advert)) {

            // Si l'interet est supprimé et que donc la session "_interestRemove" existe
            if($session->has('_interestRemove'))
            {
                // La session "_interestRemove" correspond à notre annonce
                if($session->get('_interestRemove') == $advert->getId())
                {
                    return $this->redirect($this->generateUrl('snoozit_platform_remove_in_panier', array('id' => $advert->getId())));
                }
                // Ca ne correspond pas a notre annonce
                return $this->redirect($this->generateUrl('snoozit_dashboard_homepage'));
            }

            $session->set('add_in_panier', true);
            return $response;
        }

        $session->set('add_in_panier', true);
        return $response;
    }

    // Refuse un interet
    public function removeInterestAction(Request $request, AdvertInterest $advertInterest)
    {
        if ($this->getUser() != $advertInterest->getAdvert()->getUser()) {
            throw new AccessDeniedException('Cet interet ne vous concerne pas.');
        }

        $advertManager = $this->getAdvertManager();

        $advertManager->removeInterest($advertInterest);

        return $this->redirect($this->generateUrl('snoozit_dashboard_interest'));

    }

    // Accepte un interet
    public function acceptInterestAction(Request $request, AdvertInterest $advertInterest)
    {
        if ($this->getUser() != $advertInterest->getAdvert()->getUser()) {
            throw new AccessDeniedException('Cet interet ne vous concerne pas.');
        }

        $advertManager = $this->getAdvertManager();

        $advertManager->acceptInterest($advertInterest);

        return $this->redirect($this->generateUrl('snoozit_dashboard_interest'));

    }

    // Désistement d'un interet
    public function desistInterestAction(Request $request, AdvertInterest $advertInterest)
    {
        if ($this->getUser() != $advertInterest->getUser()) {
            throw new AccessDeniedException('Cet interet ne vous concerne pas.');
        }

        $advertManager = $this->getAdvertManager();

        $advertManager->desistInterest($advertInterest);

        return $this->redirect($this->generateUrl('snoozit_platform_panier_homepage'));

    }

    // Supprime l'interet de la page interet de l'utilisateur
    public function removeDesistInterestFromInterfaceAction(Request $request, AdvertInterest $advertInterest)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('Vous devez être identifié pour pouvoir acceder à cette zone.');
        }

        // Si on n'est pas dans la situation actuelle de 5 ( Desistement )
        if (($advertInterest->getAdvertOptionType()->getId() == 5) or ($advertInterest->getAdvertOptionType()->getId() == 3)) {
            // Si l'utilisateur n'est ni le créateur de l'annonce ni l'interessé
            if (($advertInterest->getUser() != $user) and ($advertInterest->getAdvert()->getUser() != $user)) {
                throw new AccessDeniedException('Vous n\'êtes pas concerné par cette interet.');
            }

            if ($advertInterest->getUser() == $user) {
                $entity = $advertInterest->setCustomerFade(true);
                $em->persist($entity);
                $em->flush();

                return $this->redirect($this->generateUrl('snoozit_platform_panier_homepage'));
            }

            // Si on est le créateur de l'annonce
            if ($advertInterest->getAdvert()->getUser() == $user) {
                $entity = $advertInterest->setOwnerFade(true);
                $em->persist($entity);
                $em->flush();

                return $this->redirect($this->generateUrl('snoozit_dashboard_interest'));
            }

            throw new AccessDeniedException('Cet interet ne peut pas etre effacer');
        }

        throw new AccessDeniedException('Il y a un probleme de traitement dans removeDesistInterestFromInterface');
    }

    // Je me désiste d'une annonce
    public function desistForAction(Request $request, AdvertInterest $interest)
    {

    }

    // Je supprime un interet de mon interface
    public function removeInterestInterfaceAction(AdvertInterest $interest)
    {

    }

    // Je suis d'accord pour vendre à un utilisateur
    public function sellValidAction(Request $request, AdvertInterest $interest)
    {

    }

    // Je ne souhaite pas vendre à cette utilisateur
    public function refuseInterestAction(Request $request, AdvertInterest $interest)
    {

    }

    //////////////////////////////////
    //      LA PAGES DES INTERETS
    //////////////////////////////////

    // Affiche les interets
    public function getInterestCenterAction()
    {
        $advertManager = $this->getAdvertManager();

        $stats  = array('income' => $advertManager->getDashboardInterest(), 'desist' => $advertManager->getDashboardUserInterestByStatus(5), 'archives' => $advertManager->getInterestArchives());

        // Création du formulaire pour les commentaires de chaque annonces
        $sellCommentHandler = $this->get('sz_panier_comment_handler');

        if($sellCommentHandler->process()){
            return $this->redirect($this->generateUrl('snoozit_dashboard_interest'));
        }

        $breadcrumb = array(
            array('Dashboard', $this->generateUrl('snoozit_dashboard_homepage')),
            array('Interest center', '#', true)
        );

        return $this->render('SnoozitPlatformBundle:DashBoard/Interest:interest.html.twig', array(
            'breadcrumb' => $breadcrumb,
            'advertList' => $advertManager->getDashboardInterest(),
            'stats' => $stats,
            'form'  => $sellCommentHandler->createView()
        ));
    }

    // Affiche les interets ayant recu un desistement
    public function getInterestCenterDesistementAction(Request $request)
    {
        $advertManager = $this->getAdvertManager();

        $status = 5; // Desistement
        $interestListToPaginate = $advertManager->getDashboardUserInterestByStatus($status);
        $advertList = $this->get('knp_paginator')->paginate($interestListToPaginate, $request->query->getInt('page', 1), 20);
        $stats  = array('income' => $advertManager->getDashboardInterest(), 'desist' => $advertManager->getDashboardUserInterestByStatus(5), 'archives' => $advertManager->getInterestArchives());

        $breadcrumb = array(
            array('Dashboard', $this->generateUrl('snoozit_dashboard_homepage')),
            array('Interest center', $this->generateUrl('snoozit_dashboard_interest')),
            array('Désistement', '#', true)
        );

        return $this->render('SnoozitPlatformBundle:DashBoard/Interest:interest_desistement.html.twig', array(
            'breadcrumb' => $breadcrumb,
            'advertList' => $advertList,
            'stats' => $stats
        ));
    }

    // Affiche les interets dans les archives
    public function getInterestCenterArchivesAction(Request $request)
    {
        $advertManager = $this->getAdvertManager();

        $interestListToPaginate = $advertManager->getInterestArchives();
        $advertList = $this->get('knp_paginator')->paginate($interestListToPaginate, $request->query->getInt('page', 1), 20);
        $stats  = array('income' => $advertManager->getDashboardInterest(), 'desist' => $advertManager->getDashboardUserInterestByStatus(5), 'archives' => $advertManager->getInterestArchives());

        $breadcrumb = array(
            array('Dashboard', $this->generateUrl('snoozit_dashboard_homepage')),
            array('Interest center', '#', true)
        );

        return $this->render('SnoozitPlatformBundle:DashBoard/Interest:interest_archives.html.twig', array(
            'breadcrumb' => $breadcrumb,
            'advertList' => $advertList,
            'stats' => $stats
        ));
    }

    // Archive les annonces ayant recues un interet
    public function archiveInterestAction(Request $request, AdvertInterest $advertInterest)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('Vous devez être identifié pour pouvoir acceder à cette zone.');
        }

        // Si on n'est pas dans la situation actuelle de 5 ( Desistement ) ou 3 ( Refuser )
        if (($advertInterest->getAdvertOptionType()->getId() == 5) or ($advertInterest->getAdvertOptionType()->getId() == 3)) {
            // Si l'utilisateur n'est ni le créateur de l'annonce ni l'interessé
            if ($advertInterest->getAdvert()->getUser() != $user) {
                throw new AccessDeniedException('Vous n\'êtes pas concerné par cette interet.');
            }

            // Si on est le créateur de l'annonce
            $entity = $advertInterest->setOwnerFade(true);
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('snoozit_dashboard_interest'));
        }

        throw new AccessDeniedException('Il y a un probleme de traitement dans removeDesistInterestFromInterface');
    }

    ////////////////////////////////////
    // FONCTIONS INTERNE AU CONTROLLER
    //////////////////////////////////
    private function getAdvertManager()
    {
        return $this->get('sz_advert_manager');
    }
}