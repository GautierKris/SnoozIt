<?php

namespace Snoozit\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class TemplatingController extends Controller
{
    protected function getAdvertManager()
    {
        return $this->get('sz_advert_manager');
    }
}
