<?php

namespace Snoozit\SkuagBundle\Listener\Interest;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityNotFoundException;
use Snoozit\PlatformBundle\Entity\UserLog;
use Snoozit\SkuagBundle\SkuagEvents\InterestEvent;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\DependencyInjection\ContainerInterface;

class DesistInterestListener
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
        $type = $this->entityManager->getRepository('SnoozitPlatformBundle:NotificationType')->find(6);

        if(!$type){
            throw new EntityNotFoundException();
        }

        return $type;
    }

    public function processDesistInterest(InterestEvent $event)
    {
        // L'acheteur
        $userLogCustomer = new UserLog();
        $userLogCustomer
            ->setUser($event->getCustomer())
            ->setOwner($event->getCustomer())
            ->setUserAsked($event->getOwner())
            ->setAdvert($event->getAdvert())
            ->setType($this->getNotificationType())
            ->setContent('')
        ;

        $this->recordLog($userLogCustomer);

        // Si l'utilisateur n'est pas un membre
        if(is_null($event->getOwner())) {
            $this->sendGuestMessage($event);
        }else{
            // Le propriétaire
            $userLog = new UserLog();
            $userLog
                ->setUser($event->getOwner())
                ->setOwner($event->getCustomer())
                ->setUserAsked($event->getCustomer())
                ->setType($this->getNotificationType())
                ->setAdvert($event->getAdvert())
                ->setContent('')
            ;

            $this->recordLog($userLog);
        }

        return;
    }

    private function recordLog($userLog)
    {
        $this->entityManager->persist($userLog);

        $this->entityManager->flush();

        return;
    }

    private function sendMessage(InterestEvent $event)
    {
        $templating = $this->containerAware->get('templating');

        $message = new \Swift_Message("Désistement sur votre annonce!",

            $templating->render('SnoozitSkuagBundle:Mail/Interest:UnInterestedMail.html.twig',
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

    private function sendGuestMessage(InterestEvent $event)
    {
        $templating = $this->containerAware->get('templating');

        $message = new \Swift_Message("Désistement sur votre annonce!",

            $templating->render('SnoozitSkuagBundle:Mail/Interest:UnInterestedMail.html.twig',
                array(
                    'slug'              => $event->getAdvertSlug(),
                    'id'                => $event->getAdvertId(),
                    'title'             => $event->getAdvertTitle(),
                    'userInterested'    => $event->getCustomerUsername(),
                    'ownername'         => $event->getGuestOwnerName()
                )
            ),
            'text/html');

        $message->addTo('gautierkris@gmail.com')
            ->addFrom('gautierkris@gmail.com');

        $this->mailer->send($message);
    }

}