<?php

namespace Snoozit\PlatformBundle\Manager;


class UserLogMessageInterface
{
    const ADVERT_VALIDATION_SUCCESS = "Merci, votre annonce est maintenant activée";

    const ADVERT_VALIDATION_ERROR   = "Une erreur est survenue lors de la validation de cette annonce.";

    const ADVERT_CUSTOMER_INTEREST_REMOVE    = "ne donne pas suite à votre interet pour :";

    const ADVERT_OWNER_INTEREST_REMOVE    = "Vous avez refusé l'interet de ";

}