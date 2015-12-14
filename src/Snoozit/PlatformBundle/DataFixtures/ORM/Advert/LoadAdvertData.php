<?php

namespace Snoozit\PlatformBundle\DataFixtures\ORM\Advert;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Snoozit\PlatformBundle\Entity\Advert;


class LoadAdvertData extends AbstractFixture implements OrderedFixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {

        $lorem = "Lorem ipsum dolor sit amet occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id est laborum.";

        $lorem1 = "DE DISPO Calandre VW NEUVE golf VI gti ET GTD sanS sigle neuve
                   DE DISPO AUSSI DES CALES 20MM AVEC GOUJON 5/112
                   DE DISPO 2 JANTE DETROIT GTI EN 19 A REPEINDRE IDEAL";
        $lorem2 = "Joli débardeur couleur marron chocolat avec détail de pierres turquoises autour du décolleté,
                   de la marque italienne apepazza. 95% coton et 5% spandex.
                   Porté une seule fois, en parfait état, taille L (correspond au 42).
                    Contactez-nous au 04.93.99.25.50.";

        $lorem3 = "Mobile conçu pour apaiser bébé met en scène de jolis oursons. Une fonction projection fait de la chambre de bébé une douce nuit étoilée.
                    6 sons au choix (berceuse, classique, sons de la nature, musiques relaxantes...) et de nombreuses variations de lumières. 2 positions:
                    il s'attache aux barreaux du lit ou se pose sur la commode de la chambre. Astucieux : la télécommande permet à la maman de déclencher
                    le mobile à distance. Fonctionne avec 2 piles LR6 (télécommande) et 4 piles LR20 (mobile), non fournies.
                    Très bon état. Envoi possible";

        $lorem4 = "Sony xperia E bloque sur SFR vendu dans sa boite avec tous ses accessoires";

        $lorem5 = "royeur professionnel pour broyer sans effort des grandes quantitées de végétaux et des branches jusqu'à 9 cm diamètre.

                    Le broyeur dans la classe compact qui fonctionne comme il faut:
                    Moteur Honda tres fiable avec une longue duree de vie (garantie 3 ans).

                    Éjection des copeaux directement dans la remorque, benne ou brouet.

                    Auto-alimentation. Pas besoin de pousser
                    La goulotte d'éjection ne se bouche pas

                    Idéal pour elagueur, espaces verts et paysagiste.

                    Les avantages:
                    - compact
                    - rapide: jusqu'à 5 m3 de branches/h ou 24 stères/h
                    - auto alimentation
                    - pièces détachées de haute qualité
                    - construction tres rigide
                    - moteur Honda GX 390 13 ch. - 4 temps (Euro 95)
                    - construction Européenne
                    - SAV rapide et efficace
                    - livraison dans toute la France

                    Prix, fiches techniques et liens pour vidéo de démonstration sur demande par email (marquez votre code postal)";

        $lorem6 = 'Vend iMac de 2009 24"
                    Parfait etat suivie par Apple Store de lyon
                    Aucun défaut vendu avec sourie apple et clavier filaire
                    Os Maverick a jour

                    Côté 930Euro(s)
                    Vendu 850Euro(s) ou échange contre MacBook même cote

                    Pas sérieux s\'abstenir , pas d\'autre échange merci';

        $lorem7 = 'Robinet thermostatique RH de radiateur complet avec la tête neuf 4€ pies
                    Tel 0782977417';

        $lorem8 = 'vends très belle jupe NEUVE, très CHIC asymétrique sur un côté de la jupe, couleur blanche presque écrue, fluide, tissu voile qualité et doublure polyester , taille 46/48, fermeture éclair sur côté, avec ceinture noire offerte, DE LA MARQUE FASHION : longueur 80 cm en comptant l\'asymétrie.

                    Prix étudié si achat de mes autres
                vêtements 44 46 48 :tee shirts,tops,
                chemisiers,tuniques,chemises de
                jour,blouses,liquettes,boléros,nuisettes,ga
                inettes,soutiens gorges 105 100,ceintures grande
                taille,etc... et pantalons et leggings en 42 44 46
                    - le tout NEUF

                TAPEZ Dès l\'ACCUEIL DU BON COIN le mot clé : REPAS puis Vêtements puis Var puis enfin Hyères 83400

                Tel heures repas ou mails sérieux -
                Hyères VAR ou Envoi

                prix : 10 euros';

        $lorem9 = 'Dans immeuble rénové, T3 en duplex en cours de rénovation,
                avec 2 chambres à l\'étage, salon cuisine, salle d\'eau et wc.
                Chauffe-eau, chauffage électrique dans les chambres; clim réversible dans le salon cuisine.
                Loyer 660 € + 40 € de charges. ( Electricité parties communes, eau et taxe ordures ménagères)';


        $lorem10 = 'état neuf
                    SANS LES CHAISES!!!!!!
                    celle de la photo
                    160X90
                    en verre couleur noir
                    Pieds en metal laqué noir STYLE baroque/ Gotique
                    prix d\'achat 300€
                    ';
        $lorem11 = 'suite à changement de RDV et réservations d\'hôtel non remboursable,
                    chambre standard avec un lit double pour les nuits du 1er et 02 septembre 2015 à l\'IBIS GARE ST CHARLES - MARSEILLE';

        $lorem12 = 'fontaine mural 2m10 de long profondeur 1m hauteur du bassin 50 cm hauteur du fronton 1m60 avec 2 sorties d eau et bec verseur en fer fabrication francaise en pierre reconstituee';

        $lorem13 = 'A louer type 2 comprenant

                    Un séjour avec canapé clic clac couchage 2 personnes avec un coffre de rangement table de salon tapis meubles de rangement TV et internet
                    Une cuisine équipée avec hotte aspirante plaque chauffante frigidaire table et chaises
                    .une chambre avec lit pour couchage 2 personnes avec grande penderie murale.
                    .une salle e bain avec machine à laver sechante.
                    Une terrasse avec table et chaise
                    cet appartement est situé dans une copropriété très calme au deuxième étage avec vue sur la mer sur la corniche de Sausset les Pins..
                    un portail sécurisé ferme cette copropriété avec le parking .
                    libre tout de suite .
                    idéal pour personne en déplacement ou couplé
                    le loyer est de 730 euros par mois plus 50 euros de charges.
                    références sérieuses demandées.
                    Pour tous renseignements ou visites contactez moi uniquement sur mon mobile au 0616491697';

        $lorem14 = "Plat rectangulaire en cristal, 10 euros
                    Excellent état, 37,5 x 11, 5 cm";

        $lorem15 = 'Très beau livre 24x15cm. de Christian JACQ, paru aux éditions XO en 2003 mais resté comme NEUF sur ABYDOS ou le mystère de la résurrection.
63 pages avec une carte et de magnifiques photos couleurs sur l\'Egypte ancienne et ABYDOS avec ses richesses spirituelles et artistiques, ville sacrée consacrée au Dieu OSIRIS.
    MLM';

        $lorem16 = 'Harley Davidson DYNA SUPER GLIDE 1584 cm3 Custom 2007, noir, mise en circulation le 06/11/2007.

                    Autres équipements et informations :
                    Options : Garantie, possible, BULLE AMOVIBLE, SISSI BAR AMOVIBLE, ECHAPPEMENT SCREAMING EAGLE, STAGE 1LA MAISON DE LA MOTO - 06250 MOUGINS - FRANCETel :04, 93, 75, 18, 40 - email : info@maisondelamoto, frWebsite: http://www, maisondelamoto, fr, chez LA MAISON DE LA MOTO au 0493751840

                    Référence annonce : 1540405

                    NOUS CONTACTER :
                    0493751840';

        $lorem17 = 'Livre REFERENCE TRES POINTU photos couleur, index, biographies, glossaire, 224p, couverture rigide, papier glaçé, flles intactes ni froissées ni tachées (traces de stylo sur tranche du haut)
Cm29,6X24X2 Changts surface globe, vendéen, cambrien supr, ordovicien, silurien, dévonien, carbonifère, permien, trias, jurassique, crétacé infr, supr,transition K-T,début tertiaire,milieu,fin, quaternaire

CONTACT Tél./SMS(si courriel DONNEZ N°PORTABLE pour REPONSE) livraison Parking gratuit Métro Malpassé Marseille ou B.Rhône Sud Vaucluse (suppl.)

COLISSIMO + 9 € sous huitaine à réception du chèque

Pour voir mes OFFRES svp tapez "uuu""toute catégorie""13013" : tableaux vêtemets chaussures sacs jeans layette bibelots...';

        $lorem18 = 'Je vends ma citroen Berlingo Multispace exclusive HDI 115 cv
    pour cause de départ retraite
    mise en circulation : 06 novembre 2012
    Kilométrage : 39000 kms
    Nombre de portes : 5 portes
    Puissance fiscale : 6 CV
    Boîte de vitesse : mécanique
    Énergie : Diesel
    Couleur extérieure : gris fer
    Options & équipements
    Extérieur et Châssis
    - radar de recul
    - rétroviseurs électriques
    - porte latérale coulissante
    - rétroviseurs dégivrants
    Intérieur
    - prises audio auxiliaires
    - siège conducteur réglable hauteur
    - lunette arrière ouvrante
    - banquette rabattable
    - climatisation automatique multi zone
    - prise 12V
    - système audio CD
    - direction assistée
    Sécurité
    - AFU
    - fixations ISOFIX
    - projecteurs antibrouillard
    - phares av. de jour
    Autre
    - filtre à pollen
    - miroir surveillance enfant places ar
    - compte tours
    - rangement sous siège conducteur
    - FAP
    - kit fumeur
    - ceintures avant ajustables en hauteur
    - phares halogènes
    - rangement sous siège passager avant
    - bacs de portes avant
    - miroir de courtoisie passager
    - siège passager avec dossier repliable
    - miroir de courtoisie conducteur
    - kit de réparation crevaison
    - 3 sièges individuels en rang 2
    - roue de secours
    - bacs de portes arrière
    - boite à gants fermée
    - 2 portes latérales
    - porte-gobelets avant
    - boucliers av et ar couleur caisse
    - poches d\'aumônières
        - 5 places
        - porte-gobelets arrière
        - pare-brise thermique
    très bon état
    citroen assistance xl 24h/24 7j/7
    non fumeur';


        $option_trade_true = true;
        $option_livraison_true = true;
        $option_cb_true = true;
        $option_paypal_true = true;
        $option_cheque_true = true;
        $option_espece_true = true;

        $option_trade_false = false;
        $option_livraison_false = false;
        $option_cb_false = false;
        $option_paypal_false = false;
        $option_cheque_false = false;
        $option_espece_false = false;

        // Creation des categorys Multimédia
        $advert1  = $this->createAnnonce('Calandre VW NEUVE golf 6 GTi ET GTD',
            $lorem1,
            $this->getReference('ville-rians'),
            '3000',
            $this->getReference('category-1'),
            $this->getReference('user'),
            null,
            $option_trade_false,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_false,
            $option_cheque_true,
            $option_paypal_true);
        $advert2  = $this->createAnnonce('Joli débardeur avec détail décolleté turquoise',
            $lorem2,
            $this->getReference('ville-rians'),
            '1120',
            $this->getReference('category-2'),
            $this->getReference('user-2'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_false);
        $advert3  = $this->createAnnonce('MacBook Pro 2012 13Pouces',
            $lorem6,
            $this->getReference('ville-rians'),
            '1000',
            $this->getReference('category-3'),
            $this->getReference('user-2'),
            null,
            $option_trade_false,
            $option_livraison_true,
            $option_cb_true,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert4  = $this->createAnnonce('Sony xperia E operateur sfr',
            $lorem4,
            $this->getReference('ville-rians'),
            '50',
            $this->getReference('category-4'),
            $this->getReference('user'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert5  = $this->createAnnonce('Téléphone portable Iphone 4S niquel',
            $lorem,

            $this->getReference('ville-rians'),
            '3200',
            $this->getReference('category-1'),
            $this->getReference('user-1'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert6  = $this->createAnnonce('Un titre d\'annonce je sais pas',
            $lorem14,
            $this->getReference('ville-rians'),
            '1000',
            $this->getReference('category-1'),
            $this->getReference('user-1'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_false,
            $option_cheque_false,
            $option_paypal_true);
        $advert7  = $this->createAnnonce('Une porsche 911 cabriolet noir parfait état !',
            $lorem,
            $this->getReference('ville-rians'),
            NULL,
            $this->getReference('category-1'),
            $this->getReference('user-2'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_false,
            $option_cheque_false,
            $option_paypal_true);
        $advert8  = $this->createAnnonce('Broyeur de branches compact -PRO-',
            $lorem5,
            $this->getReference('ville-rians'),
            '50',
            $this->getReference('category-1'),
            $this->getReference('user'),
            null,
            $option_trade_true,
            $option_livraison_false,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_false);
        $advert9  = $this->createAnnonce('Opel Corsa bleu',
            $lorem,
            $this->getReference('ville-rians'),
            '100000',
            $this->getReference('category-1'),
            $this->getReference('user'),
            null,
            $option_trade_true,
            $option_livraison_false,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert10 = $this->createAnnonce('10 CD d\'Elvis presley !',
            $lorem,
            $this->getReference('ville-rians'),
            '1000',
            $this->getReference('category-1'),
            $this->getReference('user-2'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_false,
            $option_cheque_false,
            $option_paypal_true);
        $advert11 = $this->createAnnonce('Mobile Doux Rêves Papillons Fisher Price',
            $lorem3,
            $this->getReference('ville-rians'),
            '1000',
            $this->getReference('category-1'),
            $this->getReference('user-2'),
            null,
            $option_trade_false,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert12 = $this->createAnnonce('Jupe taille 46/48 NEUVE asymétrique MARQUE FASHION',
            $lorem8,
            $this->getReference('ville-rians'),
            '10',
            $this->getReference('category-1'),
            $this->getReference('user-10'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert13 = $this->createAnnonce('T3 EN DUPLEX PROCHE MAIRIE 15ème, 16ème',
            $lorem9,
            $this->getReference('ville-rians'),
            '1100',
            $this->getReference('category-1'),
            $this->getReference('user-3'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert14 = $this->createAnnonce('Robinet thermostatique RH',
            $lorem7,
            $this->getReference('ville-rians'),
            '40',
            $this->getReference('category-1'),
            $this->getReference('user-6'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert15 = $this->createAnnonce('Canapé d\'angle 6 places taupe',
            $lorem9,
            $this->getReference('ville-rians'),
            '1000',
            $this->getReference('category-1'),
            $this->getReference('user-1'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert16 = $this->createAnnonce('TABLE sale à manger en verre noire style baroque',
            $lorem10,
            $this->getReference('ville-rians'),
            '1000',
            $this->getReference('category-1'),
            $this->getReference('user-6'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert17 = $this->createAnnonce('Deux nuits d\'hôtel a l\'ibis marseille',
            $lorem11,
            $this->getReference('ville-rians'),
            '1000',
            $this->getReference('category-1'),
            $this->getReference('user-7'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert18 = $this->createAnnonce('Beau type 2 vue mer meuble',
            $lorem13,
            $this->getReference('ville-rians'),
            '730',
            $this->getReference('category-1'),
            $this->getReference('user-5'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert19 = $this->createAnnonce('Fontaine muram 2m10',
            $lorem12,
            $this->getReference('ville-rians'),
            '321',
            $this->getReference('category-1'),
            $this->getReference('user-7'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert20 = $this->createAnnonce('Plat rectangulaire en cristal',
            $lorem1,
            $this->getReference('ville-rians'),
            '30',
            $this->getReference('category-1'),
            $this->getReference('user-8'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert21 = $this->createAnnonce('ABYDOS ou le mystère de la résurrection',
            $lorem15,
            $this->getReference('ville-rians'),
            '300',
            $this->getReference('category-1'),
            $this->getReference('user-10'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert22 = $this->createAnnonce('Harley Davidson DYNA SUPER GLIDE 1584 cm3',
            $lorem16,
            $this->getReference('ville-rians'),
            '11300',
            $this->getReference('category-1'),
            $this->getReference('user-10'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert23 = $this->createAnnonce('Berlingo',
            $lorem17,
            $this->getReference('ville-rians'),
            '11300',
            $this->getReference('category-1'),
            $this->getReference('user-10'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);
        $advert24 = $this->createAnnonce('ATLAS de LA PREHISTOIRE D. Palmer 224p BE 2001 uuu',
            $lorem18,
            $this->getReference('ville-rians'),
            '11300',
            $this->getReference('category-1'),
            $this->getReference('user-10'),
            null,
            $option_trade_true,
            $option_livraison_true,
            $option_cb_false,
            $option_espece_true,
            $option_cheque_false,
            $option_paypal_true);


        // Enregistrement des annonces
        $manager->persist($advert1);
        $manager->persist($advert2);
        $manager->persist($advert3);
        $manager->persist($advert4);
        $manager->persist($advert5);
        $manager->persist($advert6);
        $manager->persist($advert7);
        $manager->persist($advert8);
        $manager->persist($advert9);
        $manager->persist($advert10);
        $manager->persist($advert11);
        $manager->persist($advert12);
        $manager->persist($advert13);
        $manager->persist($advert14);
        $manager->persist($advert15);
        $manager->persist($advert16);
        $manager->persist($advert17);
        $manager->persist($advert18);
        $manager->persist($advert19);
        $manager->persist($advert20);
        $manager->persist($advert21);
        $manager->persist($advert22);
        $manager->persist($advert23);
        $manager->persist($advert24);

        $manager->flush();
    }

    // Fonction de création globale
    private function createAnnonce($title, $content,$ville, $price, $category , $user, $picture, $trade, $livraison, $cb, $espece, $cheque, $paypal) {

        $advert = new  Advert();
        $advert->setTitle($title)
            ->setDescription($content)
            ->setCity($ville)
            ->setPrice($price)
            ->setcategory($category)
            ->setUser($user)
            ->setExchange($trade)
            ->setDelivery($livraison)
            ->setCb($cb)
            ->setEspece($espece)
            ->setCheque($cheque)
            ->setPaypal($paypal)
        ;
        // ->setPicture($picture);

        return $advert;
    }

    public function getOrder()
    {
        return 999;
    }

}