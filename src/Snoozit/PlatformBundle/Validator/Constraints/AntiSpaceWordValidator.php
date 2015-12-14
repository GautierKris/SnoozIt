<?php

namespace Snoozit\PlatformBundle\Validator\Constraints;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class AntiSpaceWordValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint)
    {
        if (preg_match("/\\s/", $value, $matches)) {
            $this->context->addViolation($constraint->message);
        }
    }
}