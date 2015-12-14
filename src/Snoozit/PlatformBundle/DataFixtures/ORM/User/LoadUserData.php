<?php

namespace Snoozit\PlatformBundle\DataFixtures\ORM\User;


use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Snoozit\PlatformBundle\Entity\Notification;
use Snoozit\UserBundle\Entity\User;

class LoadUserData extends AbstractFixture implements FixtureInterface, OrderedFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        // Create User
        $user   = $this->createUser('John','john@do.com','0000');
        $user1  = $this->createUser('AmandineG','amandine_d89@yahoo.fr','0000', $this->getReference('avatar8'));
        $user2  = $this->createUser('Kris','gaucks@gmail.com','0000', $this->getReference('avatar'));
        $user3  = $this->createUser('Emma','emma@gmail.com','0000', $this->getReference('avatar1'));
        $user4  = $this->createUser('Seb','seb@gmail.com','0000',$this->getReference('avatar2'));
        $user5  = $this->createUser('Muriel','muriel@gmail.com','0000',$this->getReference('avatar3'));
        $user6  = $this->createUser('LoKan','lokan@gmail.com','0000',$this->getReference('avatar4'));
        $user7  = $this->createUser('w0rder','wordergmail.com','0000',$this->getReference('avatar5'));
        $user8  = $this->createUser('b0b','b0b@gmail.com','0000',$this->getReference('avatar6'));
        $user9  = $this->createUser('Coluche','coluche@gmail.com','0000',$this->getReference('avatar7'));
        $user10 = $this->createUser('Guytounet0129','guytounet0129@gmail.com','0000');
        $user11 = $this->createUser('Merellan','merellan@gmail.com','0000');
        $user12 = $this->createUser('Uthurbak','uthurbak@gmail.com','0000');
        $user13 = $this->createUser('Faysek','faysek@gmail.com','0000');
        $user14 = $this->createUser('Achevard','achevard@gmail.com','0000');
        $user15 = $this->createUser('Rushsander','rushsander@gmail.com','0000');
        $user16 = $this->createUser('Mouldson','mouldson@gmail.com','0000');
        $user17 = $this->createUser('Hooffram','hooffram@gmail.com','0000');
        $user18 = $this->createUser('Boastnard','boastnard@gmail.com','0000');
        $user19 = $this->createUser('Urukubal','urukubal@gmail.com','0000');
        $user20 = $this->createUser('Daeyll','daeyll@gmail.com','0000');
        $user21 = $this->createUser('Tirna','tirna@gmail.com','0000');
        $user22 = $this->createUser('Cillana','cillana@gmail.com','0000');
        $user23 = $this->createUser('Sayreth','sayreth@gmail.com','0000');
        $user24 = $this->createUser('Cornfird','cornfird@gmail.com','0000');
        $user25 = $this->createUser('Sayshell','sayshell@gmail.com','0000');
        $user26 = $this->createUser('Wailridge','wailridge@gmail.com','0000');
        $user27 = $this->createUser('Redrard','redrard@gmail.com','0000');

        // On sauvegarde en mémoires
        $manager->persist($user);
        $manager->persist($user1);
        $manager->persist($user2);
        $manager->persist($user3);
        $manager->persist($user4);
        $manager->persist($user5);
        $manager->persist($user6);
        $manager->persist($user7);
        $manager->persist($user8);
        $manager->persist($user9);
        $manager->persist($user10);
        $manager->persist($user11);
        $manager->persist($user12);
        $manager->persist($user13);
        $manager->persist($user14);
        $manager->persist($user15);
        $manager->persist($user16);
        $manager->persist($user17);
        $manager->persist($user18);
        $manager->persist($user19);
        $manager->persist($user20);
        $manager->persist($user21);
        $manager->persist($user22);
        $manager->persist($user23);
        $manager->persist($user24);
        $manager->persist($user25);
        $manager->persist($user26);
        $manager->persist($user27);

        $not1   = $this->createNotification($user);
        $not2   = $this->createNotification($user1);
        $not3   = $this->createNotification($user2);
        $not4   = $this->createNotification($user3);
        $not5   = $this->createNotification($user4);
        $not6   = $this->createNotification($user5);
        $not7   = $this->createNotification($user6);
        $not8   = $this->createNotification($user7);
        $not9   = $this->createNotification($user8);
        $not11  = $this->createNotification($user9);
        $not12  = $this->createNotification($user10);
        $not13  = $this->createNotification($user11);
        $not14  = $this->createNotification($user12);
        $not15  = $this->createNotification($user13);
        $not16  = $this->createNotification($user14);
        $not17  = $this->createNotification($user15);
        $not18  = $this->createNotification($user16);
        $not19  = $this->createNotification($user17);
        $not20  = $this->createNotification($user18);
        $not21  = $this->createNotification($user19);
        $not22  = $this->createNotification($user20);
        $not23  = $this->createNotification($user21);
        $not24  = $this->createNotification($user22);
        $not25  = $this->createNotification($user23);
        $not26  = $this->createNotification($user24);
        $not27  = $this->createNotification($user25);
        $not28  = $this->createNotification($user26);
        $not29  = $this->createNotification($user27);

// On sauvegarde en mémoires
        $manager->persist($not1);
        $manager->persist($not2);
        $manager->persist($not3);
        $manager->persist($not4);
        $manager->persist($not5);
        $manager->persist($not6);
        $manager->persist($not7);
        $manager->persist($not8);
        $manager->persist($not9);
        $manager->persist($not11);
        $manager->persist($not12);
        $manager->persist($not13);
        $manager->persist($not14);
        $manager->persist($not15);
        $manager->persist($not16);
        $manager->persist($not17);
        $manager->persist($not18);
        $manager->persist($not19);
        $manager->persist($not20);
        $manager->persist($not21);
        $manager->persist($not22);
        $manager->persist($not23);
        $manager->persist($not24);
        $manager->persist($not25);
        $manager->persist($not26);
        $manager->persist($not27);
        $manager->persist($not28);
        $manager->persist($not29);

        // Enregistrement
        $manager->flush();

        //Ajout des références pour les données à enregistrer
        $this->addReference('user',   $user);
        $this->addReference('user-1', $user1);
        $this->addReference('user-2', $user2);
        $this->addReference('user-3', $user3);
        $this->addReference('user-4', $user4);
        $this->addReference('user-5', $user5);
        $this->addReference('user-6', $user6);
        $this->addReference('user-7', $user7);
        $this->addReference('user-8', $user8);
        $this->addReference('user-9', $user9);
        $this->addReference('user-10',$user10);
    }

    private function createNotification($user)
    {
        $notification = new Notification();
        $notification->setUser($user);

        return $notification;
    }

    private function createUser($username, $email, $password , $avatar = null)
    {
        $user = new User();

        if($avatar == null){
            $avatar = $this->getReference('avatar');
        }
        $finalWord = 'Make It Possible';
        $user->setUsername($username);
        $user->setEmail($email);
        $user->setPlainPassword($password);
        $user->setEnabled(true);
        $user->setLastActivity(new \DateTime());
        $user->setFinalword($finalWord);
        $user->setCity($this->getReference('ville-rians'));
        $user->setAvatar($avatar);

        return $user;
    }

    public function getOrder()
    {
        return 16;
    }

}