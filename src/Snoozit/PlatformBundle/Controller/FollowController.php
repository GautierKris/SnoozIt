<?php

namespace Snoozit\PlatformBundle\Controller;

use Snoozit\PlatformBundle\Entity\Categories\Category;
use Snoozit\PlatformBundle\Entity\Localisation\City;
use Snoozit\PlatformBundle\Entity\Localisation\Departement;
use Snoozit\PlatformBundle\Entity\Localisation\Region;
use Snoozit\SkuagBundle\SkuagEvents\FollowCategoryEvent;
use Snoozit\SkuagBundle\SkuagEvents\FollowCityEvent;
use Snoozit\SkuagBundle\SkuagEvents\FollowDepartementEvent;
use Snoozit\SkuagBundle\SkuagEvents\FollowRegionEvent;
use Snoozit\SkuagBundle\SkuagEvents\FollowUserEvent;
use Snoozit\SkuagBundle\SkuagEvents\SkuagEvents;
use Snoozit\UserBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class FollowController extends Controller
{

    // Suivre les Regions
    public function followRegionAction(Request $request, Region $region)
    {
        if ($request->isXmlHttpRequest()) {

            $response = new JsonResponse();
            $em = $this->getDoctrine()->getEntityManager();
            $user = $this->getUser();
            if (!is_object($user) || !$user instanceof User) {
                throw new AccessDeniedException('This user does not have access to this section.');
            }

            $followedRegion = $user->getFollowedregion();
            $toArray = array();

            foreach($followedRegion as $r)
            {
                $toArray[] = $r->getId();
            }

            if(in_array($region->getId(), $toArray))
            {
                $user->removeFollowedregion($region);
                $response->setData(array('username' => $region->getNom(),'subject' => "Vous n'êtes plus abonné à "));


            }else{

                $user->addFollowedregion($region);
                $response->setData(array('username' => $region->getNom(),'subject' => 'Vous êtes abonné à '));

                $this->get('event_dispatcher')->dispatch(SkuagEvents::ON_FOLLOW_REGION, new FollowRegionEvent($region, $user));

            }

            $em->flush();

            return $response;

        }

        return $this->errorMethodRequest();

    }

    // Suivre les Departements
    public function followDepartementAction(Request $request, Departement $departement)
    {
        if ($request->isXmlHttpRequest()) {

            $response = new JsonResponse();
            $em = $this->getDoctrine()->getEntityManager();

            $user = $this->getUser();
            if (!is_object($user) || !$user instanceof User) {
                throw new AccessDeniedException('This user does not have access to this section.');
            }

            $followedDepartement = $user->getFolloweddepartement();
            $toArray = array();

            foreach($followedDepartement as $r)
            {
                $toArray[] = $r->getId();
            }

            if(in_array($departement->getId(), $toArray))
            {
                $user->removeFolloweddepartement($departement);
                $response->setData(array('username' => $departement->getNom(),'subject' => "Vous n'êtes plus abonné à "));


            }else{

                $user->addFolloweddepartement($departement);
                $response->setData(array('username' => $departement->getNom(),'subject' => 'Vous êtes abonné à '));

                $this->get('event_dispatcher')->dispatch(SkuagEvents::ON_FOLLOW_DEPARTEMENT, new FollowDepartementEvent($departement, $user));

            }

            $em->flush();

            return $response;

        }

        return $this->errorMethodRequest();

    }

    // Suivre les City
    public function followCityAction(Request $request, City $city)
    {
        if ($request->isXmlHttpRequest()) {

            $response = new JsonResponse();
            $em = $this->getDoctrine()->getEntityManager();

            $user = $this->getUser();
            if (!is_object($user) || !$user instanceof User) {
                throw new AccessDeniedException('This user does not have access to this section.');
            }

            $followedCity = $user->getFollowedcity();
            $toArray = array();

            foreach ($followedCity as $r) {
                $toArray[] = $r->getId();
            }

            if (in_array($city->getId(), $toArray)) {
                $user->removeFollowedcity($city);
                $response->setData(array('username' => $city->getNom(),'subject' => "Vous n'êtes plus abonné à "));

            } else {

                $user->addFollowedcity($city);
                $response->setData(array('username' => $city->getNom(),'subject' => 'Vous êtes abonné à '));

                $this->get('event_dispatcher')->dispatch(SkuagEvents::ON_FOLLOW_CITY, new FollowCityEvent($city, $user));
            }

            $em->flush();

            return $response;

        }

        return $this->errorMethodRequest();

    }

    // Suivre les categories
    public function followCategoryAction(Request $request, Category $category)
    {

        if($request->isXmlHttpRequest() ) {

            $response = new JsonResponse();
            $em = $this->getDoctrine()->getEntityManager();

            $user = $this->getUser();
            if (!is_object($user) || !$user instanceof User) {
                throw new AccessDeniedException('This user does not have access to this section.');
            }

            $followedCategory = $user->getFollowedcategories();
            $toArray = array();

            foreach ($followedCategory as $cat) {
                $toArray[] = $cat->getId();
            }

            if (in_array($category->getId(), $toArray)) {
                $user->removeFollowedcategory($category);
                $response->setData(array('username' => $category->getCategory(),'subject' => "Vous n'êtes plus abonné à "));

            } else {
                $user->addFollowedcategory($category);

                $this->get('event_dispatcher')->dispatch(SkuagEvents::ON_FOLLOW_CATEGORY, new FollowCategoryEvent($category, $user));
                $response->setData(array('username' => $category->getCategory(),'subject' => 'Vous êtes abonné à '));

            }

            $em->flush();

            return $response;

        }

        return $this->errorMethodRequest();

    }

    // Suivre une personne
    public function followUserAction(Request $request, User $followed)
    {

        if($request->isXmlHttpRequest() ) {

            $user = $this->getUser();
            if (!is_object($user) || !$user instanceof User) {
                return false;
            }

            $response = new JsonResponse();

            $followedUser = $user->getFolloweduser();
            $toArray = array();
            $followedTotalFollower = $followed->getTotalFollower();

            foreach ($followedUser as $r) {
                $toArray[] = $r->getId();
            }

            if (in_array($followed->getId(), $toArray)) {
                $user->removeFolloweduser($followed);
                $followedTotalFollower -= 1;
                $followed->setTotalFollower($followedTotalFollower);

                $hiddenUser = $this->get('sz_advert_manager')->getHiddenUsers($user);
                if (in_array($followed->getId(), $hiddenUser)) {
                    $user->removeHiddenUser($followed);
                }

                // False permet de spécifier que c'est une suppression
                $this->get('event_dispatcher')->dispatch(SkuagEvents::ON_FOLLOW_USER, new FollowUserEvent($user, $followed, false));
                $response->setData(array('username' => $followed->getUsername(),'subject' => "Vous n'êtes plus abonné à "));

            } else {

                $user->addFolloweduser($followed);

                $followedTotalFollower += 1;
                $followed->setTotalFollower($followedTotalFollower);

                $this->get('event_dispatcher')->dispatch(SkuagEvents::ON_FOLLOW_USER, new FollowUserEvent($user, $followed));
                $response->setData(array('username' => $followed->getUsername(),'subject' => 'Vous êtes abonné à '));

            }

            return $response;
        }

        return $this->errorMethodRequest();

    }

    //Refuse un abonnement
    public function refuseAbonnementAction(Request $request, User $follower)
    {
        if($request->isXmlHttpRequest())
        {
            $user = $this->getUser();
            if (!is_object($user) || !$user instanceof User) {
                return false;
            }

            $response = new JsonResponse();
            $toArray = array();
            $em = $this->getDoctrine()->getManager();

            foreach ($follower->getFollowedUser() as $r) {
                $toArray[] = $r->getId();
            }

            if(in_array($user->getId(), $toArray)){

                $follower->removeFolloweduser($user);

                $em->flush();

                $this->get('event_dispatcher')->dispatch(SkuagEvents::ON_REFUSE_FOLLOW, new FollowUserEvent($user, $follower));
                $response->setData(array('username' => $follower->getUsername(),'subject' => "Vous avez annuler l'abonnement de "));

                return $response;
            }

            return false;

        }

        return $this->errorMethodRequest();

    }

    private function errorMethodRequest()
    {
        $this->get('session')->getFlashBag()->add('error', 'La page recherché ne peut pas être appelé de cette façon.');

        return $this->redirect($this->generateUrl('snoozit_dashboard_homepage'));
    }

}
