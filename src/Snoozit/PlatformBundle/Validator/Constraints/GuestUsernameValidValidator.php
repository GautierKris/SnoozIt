<?php
/**
 * Created by PhpStorm.
 * User: Kris
 * Date: 14/10/15
 * Time: 13:13
 */

namespace Snoozit\PlatformBundle\Validator\Constraints;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class GuestUsernameValidValidator extends ConstraintValidator
{
    private $requestStack;
    private $em;

    public function __construct(EntityManagerInterface $em, RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
        $this->em           = $em;
    }

    public function validate($value, Constraint $constraint)
    {
        $usernameExist = $this->em->getRepository('SnoozitUserBundle:User')->findOneBy(array('username' => $value));
        $guestUsernameExist = $this->em->getRepository('SnoozitPlatformBundle:Guest')->findOneBy(array('username' => $value));

        if($usernameExist or $guestUsernameExist){
            $this->context->addViolation($constraint->message);
        }
    }

}