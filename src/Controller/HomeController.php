<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(CategoryRepository $categoryRepository, ProductRepository $productRepository): Response
    {

        $categorys = $categoryRepository->findAll();

        $products = $productRepository->findAll();

        if (!$products) {
            return $this->redirectToRoute('app_home');
        }

        return $this->render('home/index.html.twig', [
            'products' => $products,
            'categorys' => $categorys,
        ]);

        // return $this->render('home/index.html.twig', [
        //     'controller_name' => 'HomeController',
        // ]);
    }
}
