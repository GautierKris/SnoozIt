<?php

namespace Snoozit\PlatformBundle\DataFixtures\ORM\Avatar;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Snoozit\UserBundle\Entity\Avatar;
use Symfony\Component\HttpFoundation\File\File;


class LoadAvatarData extends AbstractFixture implements FixtureInterface, OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $url = '/Users/Kris/Sites/SnoozIt/src/Snoozit/PlatformBundle/Resources/public/images/avatars/noAvatar.png';
        $url1 = '/Users/Kris/Sites/SnoozIt/src/Snoozit/PlatformBundle/Resources/public/images/avatars/user-1.jpg';
        $url2 = '/Users/Kris/Sites/SnoozIt/src/Snoozit/PlatformBundle/Resources/public/images/avatars/user-2.jpg';
        $url3 = '/Users/Kris/Sites/SnoozIt/src/Snoozit/PlatformBundle/Resources/public/images/avatars/user-3.jpg';
        $url4 = '/Users/Kris/Sites/SnoozIt/src/Snoozit/PlatformBundle/Resources/public/images/avatars/user-4.jpg';
        $url5 = '/Users/Kris/Sites/SnoozIt/src/Snoozit/PlatformBundle/Resources/public/images/avatars/user-5.jpg';
        $url6 = '/Users/Kris/Sites/SnoozIt/src/Snoozit/PlatformBundle/Resources/public/images/avatars/user-6.jpg';
        $url7 = '/Users/Kris/Sites/SnoozIt/src/Snoozit/PlatformBundle/Resources/public/images/avatars/user-7.jpg';
        $url8 = '/Users/Kris/Sites/SnoozIt/src/Snoozit/PlatformBundle/Resources/public/images/avatars/amandine.jpg';

        $avatarDefault = $this->createAvatar($url);
        $avatar1 = $this->createAvatar($url1);
        $avatar2 = $this->createAvatar($url2);
        $avatar3 = $this->createAvatar($url3);
        $avatar4 = $this->createAvatar($url4);
        $avatar5 = $this->createAvatar($url5);
        $avatar6 = $this->createAvatar($url6);
        $avatar7 = $this->createAvatar($url7);
        $avatar8 = $this->createAvatar($url8);

        $manager->persist($avatarDefault);
        $manager->persist($avatar1);
        $manager->persist($avatar2);
        $manager->persist($avatar3);
        $manager->persist($avatar4);
        $manager->persist($avatar5);
        $manager->persist($avatar6);
        $manager->persist($avatar7);
        $manager->persist($avatar8);

        $manager->flush();

        //Ajout des références pour les données à enregistrer
        $this->addReference('avatar', $avatarDefault);
        $this->addReference('avatar1', $avatar1);
        $this->addReference('avatar2', $avatar2);
        $this->addReference('avatar3', $avatar3);
        $this->addReference('avatar4', $avatar4);
        $this->addReference('avatar5', $avatar5);
        $this->addReference('avatar6', $avatar6);
        $this->addReference('avatar7', $avatar7);
        $this->addReference('avatar8', $avatar8);
    }

    private function createAvatar($url)
    {

        $string = str_replace('/Users/Kris/Sites/SnoozIt/src/Snoozit/PlatformBundle/Resources/public/images/avatars/', '', $url);

        $avatar = new Avatar();
        $file = new File($url);
        $avatar->upload($file);
        $avatar->setPath($string);
        return $avatar;
    }

    public function getOrder()
    {
        return 01;
    }
}
