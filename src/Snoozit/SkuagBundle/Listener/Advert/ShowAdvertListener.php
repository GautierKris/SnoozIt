<?php
/**
 * Created by PhpStorm.
 * User: Kris
 * Date: 02/11/15
 * Time: 09:40
 */

namespace Snoozit\SkuagBundle\Listener\Advert;

use Doctrine\ORM\EntityManager;
use Snoozit\SkuagBundle\SkuagEvents\AdvertEvent;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;

class ShowAdvertListener
{
    protected $entityManager;
    protected $session;
    protected $requestStack;

    public function __construct(EntityManager $entityManager, Session $session, RequestStack $requestStack)
    {
        $this->entityManager = $entityManager;
        $this->session       = $session;
        $this->requestStack  = $requestStack->getCurrentRequest();
    }

    public function processShow(AdvertEvent $event)
    {
        if($this->checkSession($event)){

            $count = $event->getViews();
            $count += 1;

            $advert = $event->getAdvert()->setViews($count);

            $this->entityManager->persist($advert);
            $this->entityManager->flush();
        }

        return;
    }

    public function checkSession(AdvertEvent $event)
    {
        if(!$this->session->has('advertShow')) $this->session->set('advertShow', array());

        $advertShowSession = $this->session->get('advertShow');

        $key = $event->getAdvert()->getId();

        if(!array_search($key, $advertShowSession)){

            $advertShowSession[$key] = $key;

            $this->session->set('advertShow', $advertShowSession);

            return true;
        }

    }

}