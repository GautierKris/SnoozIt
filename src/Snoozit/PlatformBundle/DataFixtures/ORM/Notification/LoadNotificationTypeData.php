<?php

namespace SnoozIt\PlatformBundle\DataFixtures\ORM\Notification;


use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

use SnoozIt\PlatformBundle\Entity\Categories\Category;
use Snoozit\PlatformBundle\Entity\NotificationType;


class LoadNotificationTypeData extends AbstractFixture implements OrderedFixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $abonnement = $this->createNotificationtype('Abonnement');
        $interet = $this->createNotificationtype('Interêt');
        $negoce = $this->createNotificationtype('Négociation');
        $system = $this->createNotificationtype('Systeme');
        $rejectInterest = $this->createNotificationtype('Refus de vente');
        $removedInterest = $this->createNotificationtype('Intérêt supprimé');
        $registerInterest = $this->createNotificationtype('Inscription');
        $refusNegoce = $this->createNotificationtype('Négociation refusé');
        $reglage = $this->createNotificationtype('Réglage');
        $acceptInterest = $this->createNotificationtype('Interet Accepté');
        $soldSuccess = $this->createNotificationtype('Vente réussie');


        $manager->persist($abonnement);
        $manager->persist($interet);
        $manager->persist($negoce);
        $manager->persist($system);
        $manager->persist($rejectInterest);
        $manager->persist($removedInterest);
        $manager->persist($registerInterest);
        $manager->persist($refusNegoce);
        $manager->persist($reglage);
        $manager->persist($acceptInterest);
        $manager->persist($soldSuccess);

        $manager->flush();
    }

    // Fonction de création globale
    private function createNotificationtype($type) {
        $notificationtype = new  NotificationType();
        $notificationtype->setType($type);

        return $notificationtype;
    }

    public function getOrder()
    {
        return 16;
    }

}