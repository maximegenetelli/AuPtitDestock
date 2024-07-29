<?php

namespace App\Controller;

use App\Entity\Address;
use App\Form\AddressUserType;
use App\Repository\AddressRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class AddressController extends AbstractController
{

    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/mon-profil/mes-adresses', name: 'app_address')]
    public function index(): Response
    {
        return $this->render('address/index.html.twig', [
            'controller_name' => 'AddressController',
        ]);
    }

    #[Route('/mon-profil/ajouter-une-adresse/{id}', name: 'app_address_add', defaults: ['id' => null])]
    public function add($id, Request $request, AddressRepository $addressRepository): Response
    {

        if ($id)
        {
            $address = $addressRepository->findOneById($id);
            if (!$address OR $address->getUser() !== $this->getUser())
            {
                return $this->redirectToRoute('app_account_addresses');
            }
        } else {
            $address = new Address();
            $address->setUser($this->getUser());
        }

        $form = $this->createForm(AddressUserType::class, $address);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($address);
            $this->entityManager->flush();

            $this->addFlash(
                'succes',
                "Votre adresse à bien été ajouté"
            );

        }

        return $this->render('address/form.html.twig', [
            'addressForm' => $form,
        ]);
    }

    #[Route('/mon-profil/mes-adresses/delete/{id}', name: 'app_address_delete')]
    public function delete($id, AddressRepository $addressRepository): Response
    {
        $address = $addressRepository->findOneById($id);

        if (!$address OR $address->getUser() !== $this->getUser())
            {
                return $this->redirectToRoute('app_address');
            }
        
            $this->addFlash(
                'notice',
                'Votre adresse à bien été supprimé'
            );

        $this->entityManager->remove($address);
        $this->entityManager->flush();

        return $this->redirectToRoute('app_address');
    }
}
