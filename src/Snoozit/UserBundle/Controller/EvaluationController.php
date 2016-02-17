<?php

namespace Snoozit\UserBundle\Controller;

use FOS\UserBundle\Model\UserInterface;
use Snoozit\UserBundle\Entity\Evaluation;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class EvaluationController extends Controller
{
    public function indexAction(Request $request, $id, $note)
    {
        $user = $this->getUser();
        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('This user does not have access to this section.');
        }

        if($request->isXmlHttpRequest()){

            $doctrine = $this->getDoctrine()->getManager();

            $evaluated = $doctrine->getRepository('SnoozitUserBundle:User')->find($id);

            $evaluation = new Evaluation();
            $evaluation->setUser($user)
                        ->setEvaluated($evaluated)
                        ->setNote($note)
            ;

            $doctrine->persist($evaluation);
            $doctrine->flush();

            $array = array('note' => $note, 'userId' => $id);
            $response = new JsonResponse();

            $response->setData($array);

            return $response;

        }

        return false;

    }
}
