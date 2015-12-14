<?php

namespace Snoozit\SkuagBundle\Listener\Registration;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityNotFoundException;
use Snoozit\PlatformBundle\Entity\Localisation\Region;
use Snoozit\SkuagBundle\SkuagEvents\RegistrationSuccess;
use Snoozit\UserBundle\Entity\User;
use Snoozit\PlatformBundle\Entity\UserLog;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\DependencyInjection\ContainerInterface;

class RegistrationSuccessListener
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
        $type = $this->entityManager->getRepository('SnoozitPlatformBundle:NotificationType')->find(7);

        if(!$type){
            throw new EntityNotFoundException();
        }

        return $type;
    }

    public function processRegistration(RegistrationSuccess $event)
    {
        $userLog = new UserLog();
        $userLog
            ->setUser($event->getUser())
            ->setOwner($event->getUser())
            ->setRegion($event->getRegion())
            ->setType($this->getNotificationType())
            ->setContent('');

        $this->recordLog($userLog, $event->getUser(), $event->getRegion());
        $this->sendMessage($event->getUser());

        return;
    }

    private function recordLog($userLog, User $user, Region $region)
    {
        // Enregistre la région dans la liste des abonnements
        $user->addFollowedregion($region);

        $this->entityManager->persist($userLog);
        $this->entityManager->flush();

        return;
    }

    private function sendMessage(User $user)
    {
        $templating = $this->containerAware->get('templating');

        $message = new \Swift_Message("Snoozit vous souhaite la bienvenue!",

            $templating->render('SnoozitSkuagBundle:Mail/Registration:RegistrationMail.html.twig',
                array(
                    'user'              => $user->getUsername(),
                )
            ),
            'text/html');

        $message->addTo('gautierkris@gmail.com')
            ->addFrom('gautierkris@gmail.com');

        $this->mailer->send($message);
    }
}