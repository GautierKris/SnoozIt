<?php
/**
 * Created by PhpStorm.
 * User: Kris
 * Date: 06/01/16
 * Time: 13:29
 */

namespace Snoozit\SkuagBundle\Listener\Interest;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityNotFoundException;
use Snoozit\PlatformBundle\Entity\UserLog;
use Snoozit\SkuagBundle\SkuagEvents\InterestEvent;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\DependencyInjection\ContainerInterface;

class SoldSuccessListener
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
        $type = $this->entityManager->getRepository('SnoozitPlatformBundle:NotificationType')->find(11);

        if(!$type){
            throw new EntityNotFoundException();
        }

        return $type;
    }

    public function processSoldSuccess(InterestEvent $event)
    {
        // Initialisation
        $userLogCustomer = new UserLog();

        $userLogCustomer->setType($this->getNotificationType());

        $userLogCustomer->setOwner($event->getCustomer()); // L'acheter potentiel ( interest ) est le propriétaire du log
        $userLogCustomer->setUser($event->getCustomer());
        $userLogCustomer->setUserAsked($event->getOwner());

        $userLogCustomer->setAdvert($event->getAdvert());
        $userLogCustomer->setContent('');

        $this->recordLog($userLogCustomer);

        // Si l'utilisateur n'est pas un membre

            $userLog = new UserLog();

            $userLog->setType($this->getNotificationType())

                ->setOwner($event->getOwner())
                ->setUser($event->getOwner())
                ->setUserAsked($event->getCustomer())

                ->setAdvert($event->getAdvert())
                ->setContent('');

            $this->recordLog($userLog);

            /*if($event->getOwnerNotifications()){
                $this->sendMessage($event);
            }*/

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

        $message = new \Swift_Message("Vente réussie à modifier SoldSuccessListener",

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
}