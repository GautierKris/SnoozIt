<?php

namespace Snoozit\PlatformBundle\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class AntiSpaceWord extends Constraint
{
    public $message = "Attention, les espaces ne sont pas autorisés dans votre nom d'utilisateur";

}