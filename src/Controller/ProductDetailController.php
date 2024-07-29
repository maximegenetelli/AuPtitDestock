<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProductDetailController extends AbstractController
{
    #[Route('/produits/detail/{slug}', name: 'app_product_detail')]
    public function index($slug, ProductRepository $productRepository): Response
    {

        $products = $productRepository->findOneBySlug($slug);

        if (!$products) {
            return $this->redirectToRoute('app_home');
        }

        return $this->render('product_detail/index.html.twig', [
            'products' => $products,
        ]);
    }
}
