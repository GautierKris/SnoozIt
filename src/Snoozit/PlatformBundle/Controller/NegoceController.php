<?php

namespace Snoozit\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class NegoceController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('', array('name' => $name));
    }
}
