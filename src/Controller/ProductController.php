<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProductController extends AbstractController
{
    #[Route('/produits', name: 'app_product')]
    public function index(ProductRepository $productRepository, CategoryRepository $categoryRepository): Response
    {

        $categorys = $categoryRepository->findAll();

        $products = $productRepository->findAll();

        if (!$products) {
            return $this->render('product/no_product.html.twig');
        }

        return $this->render('product/index.html.twig', [
            'products' => $products,
            'categorys' => $categorys,
        ]);
    }

    #[Route('/produits/{slug}', name: 'app_product_by_slug')]
    public function slug($slug, CategoryRepository $categoryRepository): Response
    {

        $categorys = $categoryRepository->findAll();

        $products = $categoryRepository->findOneBySlug($slug)->getProducts();

        if (!$products) {
            return $this->redirectToRoute('app_home');
        } else if (!$categorys) {
            return $this->redirectToRoute('app_home');
        }

        return $this->render('product/index.html.twig', [
            'products' => $products,
            'categorys' => $categorys,
        ]);
    }

    #[Route('/rayons/{slug}', name: 'app_rayons_products')]
    public function listrayons($slug, CategoryRepository $categoryRepository): Response
    {

        $categorys = $categoryRepository->findAll();

        $products = $categoryRepository->findOneBySlug($slug)->getProducts();

        if (!$products) {
            return $this->redirectToRoute('app_home');
        } else if (!$categorys) {
            return $this->redirectToRoute('app_home');
        }

        return $this->render('home/index.html.twig', [
            'products' => $products,
            'categorys' => $categorys,
        ]);
    }
}
