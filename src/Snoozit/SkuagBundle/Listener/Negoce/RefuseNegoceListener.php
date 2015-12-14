<?php

namespace Snoozit\SkuagBundle\Listener\Negoce;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityNotFoundException;
use Snoozit\PlatformBundle\Entity\UserLog;
use Snoozit\SkuagBundle\SkuagEvents\InterestEvent;
use Snoozit\SkuagBundle\SkuagEvents\NegoceEvent;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\DependencyInjection\ContainerInterface;


class RefuseNegoceListener
{
    protected $entityManager;
    protected $mailer;
    protected $router;
    protected $containerAware;

    public function __construct(EntityManager $entityManager, \Swift_Mailer $mailer, Router $router, ContainerInterface $containerAware)
    {
        $this->entityManager = $entityManager;
        $this->mailer = $mailer;
        $this->router = $router;
        $this->containerAware = $containerAware;
    }

    public function getNotificationType()
    {
        $type = $this->entityManager->getRepository('SnoozitPlatformBundle:NotificationType')->find(8);

        if(!$type){
            throw new EntityNotFoundException();
        }

        return $type;
    }

    public function processRefuseNegoce(NegoceEvent $event)
    {
        $userLog = new UserLog();
        $userLog
            ->setType($this->getNotificationType())
            ->setUser($event->getOwner())
            ->setOwner($event->getOwner())
            ->setUserAsked($event->getCustomer())
            ->setAdvert($event->getAdvert())
            ->setContent('');
        ;

        $userLogCustomer = new UserLog();
        $userLogCustomer
            ->setType($this->getNotificationType())
            ->setUser($event->getCustomer())
            ->setOwner($event->getCustomer())
            ->setUserAsked($event->getOwner())
            ->setAdvert($event->getAdvert())
            ->setContent('');
        ;

        $this->recordLog($userLog, $userLogCustomer);
        $this->sendMessage($event);

        return;
    }

    private function recordLog($userLog, $userLogCustomer)
    {
        $this->entityManager->persist($userLog);
        $this->entityManager->persist($userLogCustomer);
        $this->entityManager->flush();

        return;
    }

    private function sendMessage(NegoceEvent $event)
    {
        $templating = $this->containerAware->get('templating');

        $message = new \Swift_Message("Désolé, la négociation a échouée.",

            $templating->render('SnoozitSkuagBundle:Mail/Negoce:RefuseNegoceMail.html.twig',
                array(
                    'slug'              => $event->getAdvertSlug(),
                    'id'                => $event->getAdvertId(),
                    'title'             => $event->getAdvertTitle(),
                    'userInterested'    => $event->getCustomerUsername(),
                    'ownername'         => $event->getOwnerUsername()
                )
            ),
            'text/html');

        $message->addTo('gautierkris@gmail.com')
            ->addFrom('gautierkris@gmail.com');

        $this->mailer->send($message);
    }

}