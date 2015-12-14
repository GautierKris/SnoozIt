<?php

namespace SnoozIt\PlatformBundle\DataFixtures\ORM\Notification;


use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

use Snoozit\PlatformBundle\Entity\AdvertOptionType;
use SnoozIt\PlatformBundle\Entity\Categories\Category;
use Snoozit\PlatformBundle\Entity\NotificationType;


class LoadAdvertOptionTypeData extends AbstractFixture implements OrderedFixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $default        = $this->createNotificationtype('En cours');
        $success        = $this->createNotificationtype('Féliciation!');
        $refus          = $this->createNotificationtype('Refus');
        $vendu          = $this->createNotificationtype('Vendu');
        $desistement    = $this->createNotificationtype('Desistement');

        $manager->persist($default);
        $manager->persist($success);
        $manager->persist($refus);
        $manager->persist($vendu);
        $manager->persist($desistement);

        $manager->flush();
    }

    // Fonction de création globale
    private function createNotificationtype($type) {
        $advertOptionType = new  AdvertOptionType();
        $advertOptionType->setType($type);

        return $advertOptionType;
    }

    public function getOrder()
    {
        return 16;
    }

}