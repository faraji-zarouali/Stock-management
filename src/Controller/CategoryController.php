<?php

namespace App\Controller;

use App\Entity\Category;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{
    #[Route('/category', name: 'app_category')]
    public function index(): Response
    {
        return $this->render('category/index.html.twig', [
            'controller_name' => 'CategoryController',
        ]);
    }

    #[Route('/category/getlist', options: ['expose'=>true], methods: 'GET', name: 'app_category_getlist')]
    public function getCategory(EntityManagerInterface $em): JsonResponse
    {
            
        $results  = $em->getRepository(Category::class)->findAll();
        
        // dd($results);
        $formattedData = [];
        foreach ($results as $category) {
            $formattedData[] = [
                'id' => $category->getId(),
                'name' => $category->getName(),
                'description' => $category->getDescription(),
                'code' => $category->getCode(),
                'isActive' => $category->isIsActive(),
                ];
        }
        
        // dd($formattedData);
        return new JsonResponse([
          'data' => $formattedData,
      ]);
    }

    #[Route(path: '/category/new', options: ['expose'=>true], methods: 'POST', name: 'app_new_category')]
    public function newCategory(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $jsonData = $request->getContent();
        $categoryData = json_decode($jsonData, true);

        $name = $categoryData['name'];
        $description = $categoryData['description'];
        $code = $categoryData['code'];
        
        // Validate email ans pass
        if ($name == "" or $code == "") {
            return new JsonResponse(['errors' => 'Name and Code is required'], JsonResponse::HTTP_BAD_REQUEST);
        }

        $category = new Category();
 
        $category->setName($name);
        $category->setDescription($description);
        $category->setCode($code);

        $em->persist($category);
        $em->flush();
        
            return new JsonResponse(['message' => 'Category added successfully'], JsonResponse::HTTP_OK);
    }

    #[Route('/category/get/{id}', options: ['expose'=>true], methods: 'GET', name: 'app_get_category')]
    public function getCategoryData(EntityManagerInterface $em, $id)
    {
        $category = $em->getRepository(Category::class)->find($id);
        
        if (!$category) {
            throw $this->createNotFoundException(
                'No category found for id ' . $id
            );
        }
        $categoryData = [
            'id' => $category->getId(),
            'name' => $category->getName(),
            'description' => $category->getDescription(),
            'code' => $category->getCode(),
            'isActive' => $category->isIsActive(),
        ];
        // dd($categoryData);
        return new JsonResponse(['category' => $categoryData]);
    }

    #[Route('/category/update', options: ['expose'=>true], methods: 'POST', name: 'app_update_category')]
    public function UpdateCategoryData(EntityManagerInterface $em, Request $request)
    {

        $jsonData = $request->getContent();
        $categoryData = json_decode($jsonData, true);
            //  dd($categoryData);
        $id = $categoryData['id'];
        $name = $categoryData['name'];
        $description = $categoryData['description'];
        $code = $categoryData['code'];

        $category = $em->getRepository(Category::class)->find($id);
        if (!$category) {
            throw $this->createNotFoundException(
                'No category found for id ' . $id
            );
        }
        $category->setName($name);
        $category->setDescription($description);
        $category->setCode($code);

        $em->flush();

        $updateSuccessful = true;

            if ($updateSuccessful) {
                return new Response('Update successful', Response::HTTP_OK);
            } else {       
                return new Response('Update failed', Response::HTTP_BAD_REQUEST);
            }
    }

    #[Route('/status/category/{id}', options: ['expose'=>true], methods: 'GET', name: 'app_update_category_status')]
    public function UpdateCategoryStatus(EntityManagerInterface $em, $id)
    {
        $category = $em->getRepository(Category::class)->find($id);
        if (!$category) {
            throw $this->createNotFoundException(
                'No category found for id ' . $id
            );
        }
        // dd($category);
        $category->setIsActive(!$category->isIsActive());
        $em->flush();

        $updateSuccessful = true;

                    if ($updateSuccessful) {
                        return new Response('Update successful', Response::HTTP_OK);
                    } else {
                        return new Response('Update failed', Response::HTTP_BAD_REQUEST);
                    }
    }
}
