<?php

namespace Snoozit\SkuagBundle\Listener\Interest;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityNotFoundException;
use Snoozit\PlatformBundle\Entity\UserLog;
use Snoozit\SkuagBundle\SkuagEvents\InterestEvent;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\DependencyInjection\ContainerInterface;

class AddInterestListener
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
        $type = $this->entityManager->getRepository('SnoozitPlatformBundle:NotificationType')->find(2);

        if(!$type){
            throw new EntityNotFoundException();
        }

        return $type;
    }

    public function processAddInterest(InterestEvent $event)
    {
        // Initialisation
        $userLogCustomer = new UserLog();

        $userLogCustomer->setOwner($event->getCustomer()); // L'acheter potentiel ( interest ) est le propriétaire du log
        $userLogCustomer->setUser($event->getCustomer());
        $userLogCustomer->setAdvert($event->getAdvert());
        $userLogCustomer->setUserAsked($event->getCustomer());
        $userLogCustomer->setContent('');
        $userLogCustomer->setType($this->getNotificationType());

        $this->recordLog($userLogCustomer);

        // Si l'utilisateur n'est pas un membre
        if(is_null($event->getOwner())) {
            $this->sendGuestMessage($event);
        }else{
            $userLog = new UserLog();

            $userLog->setType($this->getNotificationType())
                    ->setUser($event->getOwner())
                    ->setAdvert($event->getAdvert())
                    ->setOwner($event->getCustomer())
                    ->setUserAsked($event->getOwner())
                    ->setContent('');

            $this->recordLog($userLog);

            if($event->getOwnerNotifications()){
                $this->sendMessage($event);
            }
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

        $message = new \Swift_Message("Vous avez reçu une demande!",

            $templating->render('SnoozitSkuagBundle:Mail/Interest:InterestedMail.html.twig',
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

        $message = new \Swift_Message("Vous avez reçu une demande!",

            $templating->render('SnoozitSkuagBundle:Mail/Interest:InterestedMail.html.twig',
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