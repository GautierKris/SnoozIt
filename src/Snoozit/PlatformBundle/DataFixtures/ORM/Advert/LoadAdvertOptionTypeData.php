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
        $default            = $this->createNotificationtype('En cours');
        $success            = $this->createNotificationtype('Félicitation!');
        $refus              = $this->createNotificationtype('Refus');
        $vendu              = $this->createNotificationtype('Vendu');
        $desistement        = $this->createNotificationtype('Désistement');
        $attenteValidation  = $this->createNotificationtype('Attente validation');
        $attentePaiement    = $this->createNotificationtype('Attente de paiement');
        $attenteProduit     = $this->createNotificationtype('Attente du produit');
        $finish             = $this->createNotificationtype('Terminé');
        $goldSuccess        = $this->createNotificationtype('Argent reçu');
        $itemSuccess        = $this->createNotificationtype('Produit reçu');

        $manager->persist($default);
        $manager->persist($success);
        $manager->persist($refus);
        $manager->persist($vendu);
        $manager->persist($desistement);
        $manager->persist($attenteValidation);
        $manager->persist($attentePaiement);
        $manager->persist($attenteProduit);
        $manager->persist($finish);
        $manager->persist($goldSuccess);
        $manager->persist($itemSuccess);

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