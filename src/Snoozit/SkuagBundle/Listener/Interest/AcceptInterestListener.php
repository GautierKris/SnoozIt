<?php

namespace Snoozit\SkuagBundle\Listener\Interest;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityNotFoundException;
use Snoozit\PlatformBundle\Entity\UserLog;
use Snoozit\SkuagBundle\SkuagEvents\InterestEvent;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\DependencyInjection\ContainerInterface;

class AcceptInterestListener
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
        $type = $this->entityManager->getRepository('SnoozitPlatformBundle:NotificationType')->find(10);

        if(!$type){
            throw new EntityNotFoundException();
        }

        return $type;
    }

    public function processAcceptInterest(InterestEvent $event)
    {
        // Le propriétaire
        $userLog = new UserLog();
        $userLog
            ->setUser($event->getOwner())
            ->setType($this->getNotificationType())
            ->setOwner($event->getCustomer())
            ->setUserAsked($event->getOwner())
            ->setAdvert($event->getAdvert())
            ->setContent('');
        ;

        // Le propriétaire
        $userLogCustomer = new UserLog();
        $userLogCustomer
            ->setUser($event->getCustomer())
            ->setType($this->getNotificationType())
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

    private function sendMessage(InterestEvent $event)
    {
        $templating = $this->containerAware->get('templating');

        $message = new \Swift_Message("Féliciation, interet validé!",

            $templating->render('SnoozitSkuagBundle:Mail/Interest:AcceptMail.html.twig',
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