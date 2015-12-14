<?php

namespace Snoozit\PlatformBundle\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

/**
 * Class GuestUsernameValid
 * @package Snoozit\PlatformBundle\Validator\Constraints
 * @Annotation
 */
class GuestUsernameValid extends Constraint
{
    public $message = "Ce nom d'utilisateur est déja utilisé";

    public function validatedBy()
    {
        return 'sz_guest_username_validator'; // Ici, on fait appel à l'alias du service
    }
}