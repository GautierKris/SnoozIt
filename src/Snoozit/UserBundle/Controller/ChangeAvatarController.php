<?php

namespace Snoozit\UserBundle\Controller;

use Snoozit\UserBundle\Entity\User;
use Snoozit\UserBundle\Form\AvatarType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Snoozit\UserBundle\Entity\Avatar;

class ChangeAvatarController extends Controller{

    public function changeAvatarAction(Request $request)
    {
        $user = $this->getUser();
        if (!is_object($user) || !$user instanceof User) {
            throw new AccessDeniedException('This user does not have access to this section.');
        }

        $em = $this->getDoctrine()->getManager();

        $user_avatar = $user->getAvatar();

        //$avatar = ($user_avatar->getId() == 1 )? new Avatar(): $user_avatar;

        if($user_avatar->getId() === 1){
            $avatar = new Avatar();
        }else{
            $avatar = $user_avatar;
        }

        $form = $this->createForm(new AvatarType(), $avatar);

        if($request->isMethod('POST')){

            $form->handleRequest($request);

            $session = $this->get('session');

            if ($form->isValid()){

                $em->persist($avatar);
                $em->flush();

                /** @var $userManager \FOS\UserBundle\Model\UserManagerInterface */
                $userManager = $this->get('fos_user.user_manager');
                $userManager->updateUser($user->setAvatar($avatar));

                $response = $this->redirect($this->generateUrl('snoozit_dashboard_user_change_avatar'));

                $session->getFlashBag()->add('success', 'Votre avatar à bien été modifié');

                return $response;
            }

            $session->getFlashBag()->add('error', 'Oups il y a une erreur');

        }

        return $this->render('SnoozitUserBundle:Profile:change_avatar.html.twig', array(
            'form' => $form->createView()
        ));
    }
}