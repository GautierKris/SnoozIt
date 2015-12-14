<?php

namespace Snoozit\UserBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class SnoozitUserBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
