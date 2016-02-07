<?php

namespace Snoozit\UserBundle\Controller;

use FOS\UserBundle\Event\FilterUserResponseEvent;
use FOS\UserBundle\Event\GetResponseUserEvent;
use FOS\UserBundle\FOSUserEvents;
use FOS\UserBundle\Model\UserInterface;
use Snoozit\PlatformBundle\Entity\UserProfileComment;
use Snoozit\UserBundle\Entity\User;
use FOS\UserBundle\Controller\ProfileController as BaseController;
use Snoozit\UserBundle\Form\LocalisationType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

/**
 * Controller managing the user profile
 *
 * @author Christophe Coevoet <stof@notk.org>
 */
class ProfileController extends BaseController
{

    /**
     * Show the user
     */
    public function showAction(User $user = null)
    {
        if( $user == null ) {
            $user = $this->container->get('security.token_storage')->getToken()->getUser();
            if (!is_object($user) || !$user instanceof UserInterface) {
                return $this->redirect($this->generateUrl('snoozit_error_is_not_member'));
            }
        }

        $userProfileCommentHandler = $this->get('sz_user_profile_comment_handler');

        if($userProfileCommentHandler->process()){
            $userProfileCommentHandler->getSuccessFlashMessage();
            return $this->redirect($this->generateUrl('fos_user_profile_show_name',array('username' => $user->getUsername())));
        }

        $breadcrumb = array(array(
           'Profile de '.$user->getUsername().'', $this->generateUrl('fos_user_profile_show_name', array('username' => $user->getUsername()))),
            );

        $lastComment = $this->getDoctrine()->getRepository('SnoozitPlatformBundle:UserProfileComment')->findOneBy(array('userProfile' => $user), array('created' => 'desc'));

        $advertListToPaginate = $this->container->get('sz_advert_manager')->getUserAdvertList($user);
        $advertList  = $this->get('knp_paginator')->paginate($advertListToPaginate, $this->get('request')->query->getInt('page', 1), 10);
        $advertListBoughted = $this->getDoctrine()->getRepository('SnoozitPlatformBundle:Advert')->findBy(array('soldTo' => $user));

        $userFollow = $this->checkIfUserFollow($user);

        return $this->render('SnoozitUserBundle:Profile:show.html.twig', array(
            'user' => $user,
            'advertList' => $advertList,
            'breadcrumb' => $breadcrumb,
            'userFollow' => $userFollow,
            'lastComment' => $lastComment,
            'advertListBoughted'  => $advertListBoughted,
            'form'      => $userProfileCommentHandler->createView()
        ));
    }

    private function checkIfUserFollow(User $user)
    {
        $me = $this->container->get('security.token_storage')->getToken()->getUser();

        if(is_object($me) || $me instanceof User)
        {
            $toArray = array();
            $followedByMe = $me->getFolloweduser();

            foreach($followedByMe as $i)
            {
                $toArray[] = $i->getId();
            }

            if(in_array($user->getId(), $toArray)){
                return true;
            }

            return false;
        }

        return false;

    }

    // Affiche un commentaire précis
    public function editAction(Request $request)
    {
        $user = $this->getUser();
        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('This user does not have access to this section.');
        }

        /** @var $dispatcher \Symfony\Component\EventDispatcher\EventDispatcherInterface */
        $dispatcher = $this->get('event_dispatcher');

        $event = new GetResponseUserEvent($user, $request);
        $dispatcher->dispatch(FOSUserEvents::PROFILE_EDIT_INITIALIZE, $event);

        if (null !== $event->getResponse()) {
            return $event->getResponse();
        }

        /** @var $formFactory \FOS\UserBundle\Form\Factory\FactoryInterface */
        $formFactory = $this->get('fos_user.profile.form.factory');

        $form = $formFactory->createForm();
        $form->setData($user);

        $form->handleRequest($request);

        if ($form->isValid()) {
            /** @var $userManager \FOS\UserBundle\Model\UserManagerInterface */
            $userManager = $this->get('fos_user.user_manager');

            $event = new FormEvent($form, $request);
            $dispatcher->dispatch(FOSUserEvents::PROFILE_EDIT_SUCCESS, $event);

            $userManager->updateUser($user);

            if (null === $response = $event->getResponse()) {
                $url = $this->generateUrl('fos_user_profile_show');
                $response = new RedirectResponse($url);
            }

            $dispatcher->dispatch(FOSUserEvents::PROFILE_EDIT_COMPLETED, new FilterUserResponseEvent($user, $request, $response));

            return $response;
        }


        return $this->render('FOSUserBundle:Profile:edit.html.twig', array(
            'form' => $form->createView(),
            'generalActive' => true,
        ));
    }

    // Affiche tous les commentaires postés pour cette utilisateur
    public function profileCommentAction(User $user, UserProfileComment $comment)
    {

        $em = $this->getDoctrine()->getManager();

        $lastComment = $em->getRepository('SnoozitPlatformBundle:UserProfileComment')->findOneBy(array('userProfile' => $user), array('created' => 'desc'));
        $userFollow = $this->checkIfUserFollow($user);
        $breadcrumb = array(array(
            'Profile de '.$user->getUsername().'', $this->generateUrl('fos_user_profile_show_name', array('username' => $user->getUsername()))),
        );

        $commentToCommentHandler = $this->get('sz_user_profile_comment_to_comment_handler');

        if($commentToCommentHandler->process()){
            return $this->redirect($this->generateUrl('fos_user_profile_show_comment', array('user' => $user->getId(), 'id' => $comment->getId())));
        }

        $commentsToComment = $em->getRepository('SnoozitPlatformBundle:UserProfileCommentToComment')->findBy(array('userProfileComment' => $comment));

        return $this->render('SnoozitUserBundle:Profile/Comment:comment.html.twig',array(
            'breadcrumb' => $breadcrumb,
            'comment'     => $comment,
            'user' => $user,
            'lastComment' => $lastComment,
            'userFollow' => $userFollow,
            'commentsToComment'     => $commentsToComment,
            'form'      => $commentToCommentHandler->createView()
        ));
    }

    public function profileCommentsPageAction(Request $request, User $user)
    {
        $userFollow = $this->checkIfUserFollow($user);
        $breadcrumb = array(array(
            'Profile de '.$user->getUsername().'', $this->generateUrl('fos_user_profile_show_name', array('username' => $user->getUsername()))),
        );

        $commentListToPaginate = $user->getProfileComments();


        $lastComment = $this->getDoctrine()->getManager()->getRepository('SnoozitPlatformBundle:UserProfileComment')->findOneBy(array('userProfile' => $user), array('created' => 'desc'));


        $comments  = $this->get('knp_paginator')->paginate($commentListToPaginate, $request->query->getInt('page', 1), 10);

        return $this->render('SnoozitUserBundle:Profile/Comment:comments_page.html.twig',array(
            'breadcrumb' => $breadcrumb,
            'user' => $user,
            'lastComment' => $lastComment,
            'comments' => $comments,
            'userFollow' => $userFollow,
        ));

    }

    /**
     * Edit user notifications
     */
    public function editNotificationsAction()
    {
        $notificationHandler = $this->get('sz_notification_handler');

        if($notificationHandler->process()){
            $notificationHandler->sendSuccessResponse();
            return $this->redirect($this->generateUrl('snoozit_user_notifications_edit'));
        }
        return $this->render('SnoozitUserBundle:Profile:edit_notification.html.twig', array('form' => $notificationHandler->createView(), 'notificationActive' => true));
    }

    /**
     * Upgrade Account
     */
    public function upgradeAccountAction()
    {
        return $this->render('SnoozitUserBundle:Profile:upgrade_account.html.twig', array('accountActive' => true));
    }

    // Les abonnements
    /**
     * Modifie la localisation de l'utilisateur
     */
    public function editLocalisationAction(Request $request)
    {
        $user = $this->getUser();
        $doctrine = $this->getDoctrine()->getEntityManager();
        $form = $this->createForm(new LocalisationType($doctrine), $user);

        if($request->isMethod('POST')){

            $form->handleRequest($request);

            if($form->isValid()){
                $doctrine->persist($user);
                $doctrine->flush();
            }

        }

        return $this->render('SnoozitUserBundle:Profile:edit_localisation.html.twig', array('localisationActive' => true, 'form' => $form->createView()));
    }

    //Edit les abonnés afin d'en refuser eventuellement
    public function editAbonnementAction()
    {
        $user = $this->getUser();

        $userFollow = $user->getFolloweduser();
        $cityFollow = $user->getFollowedCity();
        $departementFollow = $user->getFollowedDepartement();
        $regionFollow = $user->getFollowedRegion();
        $categoriesFollow = $user->getFollowedCategories();

        return $this->render('SnoozitUserBundle:Profile:edit_abonnement.html.twig', array('abonnementActive' => true,
            'userFollow' => $userFollow,
            'cityFollow' => $cityFollow,
            'departementFollow' => $departementFollow,
            'regionFollow' => $regionFollow,
            'categoriesFollow' => $categoriesFollow,
            ));
    }

    public function editAbonneAction()
    {
        $user = $this->getUser();
        $em = $this->container->get('doctrine')->getManager();
        $userRep = $em->getRepository('SnoozitUserBundle:User');
        $users = $userRep->findAll();

        $userFollow = array();

        foreach ($users as $row){

            $followed = $row->getFolloweduser();

            if($followed){
                if(in_array($user, $followed->toArray() )){
                    $userFollow[] = $row;
                }
            }


        }

        return $this->render('SnoozitUserBundle:Profile:edit_abonne.html.twig', array('abonneActive' => true,
            'userFollow' => $userFollow,
        ));
    }

}
