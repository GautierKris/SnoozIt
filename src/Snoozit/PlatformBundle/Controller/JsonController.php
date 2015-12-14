<?php

namespace Snoozit\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class JsonController extends Controller
{
    public function cityAction()
    {
        $request = $this->get('request');

        if($request->isXmlHttpRequest())
        {
            $term = $request->request->get('city');
            $array= $this->getDoctrine()
                ->getEntityManager()
                ->getRepository('SnoozitPlatformBundle:Localisation\City')
                ->findCityLike($term);

            $response = new JsonResponse($array);

            return $response;
        }
    }

    public function codesPostauxAction()
    {
        $request = $this->get('request');

        if($request->isXmlHttpRequest())
        {
            $term = $request->request->get('codePostal');
            $array = $this->getDoctrine()
                ->getEntityManager()
                ->getRepository('SnoozitPlatformBundle:Localisation\City')
                ->findCodesPostauxLike($term);

            $response = new JsonResponse($array);

            return $response;
        }
    }

}
