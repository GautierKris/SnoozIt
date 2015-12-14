<?php

namespace Snoozit\PlatformBundle\Manager;

class Breadcrumb
{
    public static $_list = array();

    public function __construct(array $items)
    {
        $breadcrumb = array();

        foreach ($items as $key => $value) {

            $last = null;
            $href = '#';
            $localisation = null;

            if ($value){
                if (isset($value[2])) {
                    $last = $value[2];
                }
            if (isset($value[1])) {
                $href = $value[1];
            }
            if (isset($value[3])) {
                $localisation = $value[3];
            }
            $breadcrumb[] = array('title' => $value[0], 'href' => $href, 'last' => $last, 'localisation' => $localisation);
        }
    }

        self::$_list = $breadcrumb;
    }

}