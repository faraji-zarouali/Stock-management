<?php

namespace App\Controller;

use App\Entity\Supplier;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validation;
use Symfony\Component\Validator\Constraints\Email;

class SupplierController extends AbstractController
{
    #[Route('/supplier', name: 'app_supplier')]
    public function index(): Response
    {
        return $this->render('supplier/index.html.twig', [
            'controller_name' => 'SupplierController',
        ]);
    }

    #[Route('/supplier/getlist', options: ['expose'=>true], methods: 'GET', name: 'app_supplier_getlist')]
    public function getSupplier( EntityManagerInterface $em): JsonResponse
    {
            
        $results  = $em->getRepository(Supplier::class)->findAll();
        
        // dd($results);
        $formattedData = [];
        foreach ($results as $supplier) {
            $formattedData[] = [
                'id' => $supplier->getId(),
                'name' => $supplier->getName(),
                'address' => $supplier->getAddress(),
                'email' => $supplier->getEmail(),
                'phone' => $supplier->getPhone(),
                'isActive' => $supplier->isIsActive(),
                ];
        }
        
        return new JsonResponse([
          'data' => $formattedData,
      ]);
    }

    #[Route(path: '/supplier/new', options: ['expose'=>true], methods: 'POST', name: 'app_new_supplier')]
    public function newSupplier(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $jsonData = $request->getContent();
        $SupplierData = json_decode($jsonData, true);

        $name = $SupplierData['name'];
        $address = $SupplierData['address'];
        $email = $SupplierData['email'];
        $phone = $SupplierData['phone'];

        // Validate email ans pass
        if ($email == "" or $phone == "") {
            return new JsonResponse(['errors' => 'Email and phone  is required'], JsonResponse::HTTP_BAD_REQUEST);
        }

        // Validate email
        $emailErrors = $this->validateEmail($email);
        if (!empty($emailErrors)) {
            return new JsonResponse(['errors' => $emailErrors], JsonResponse::HTTP_BAD_REQUEST);
        }

        $Supplier = new Supplier();
 
        $Supplier->setName($name);
        $Supplier->setAddress($address);
        $Supplier->setEmail($email);
        $Supplier->setPhone($phone);

        $em->persist($Supplier);
        $em->flush();
        
            return new JsonResponse(['message' => 'Supplier added successfully'], JsonResponse::HTTP_OK);
    }

    #[Route('/supplier/get/{id}', options: ['expose'=>true], methods: 'GET', name: 'app_get_supplier')]
    public function getsupplierData(EntityManagerInterface $em, $id)
    {
        $supplier = $em->getRepository(Supplier::class)->find($id);
        
        if (!$supplier) {
            throw $this->createNotFoundException(
                'No supplier found for id ' . $id
            );
        }
        $supplierData = [
            'id' => $supplier->getId(),
            'name' => $supplier->getName(),
            'address' => $supplier->getAddress(),
            'email' => $supplier->getEmail(),
            'phone' => $supplier->getPhone(),
        ];
        // dd($supplierData);
        return new JsonResponse(['supplier' => $supplierData]);
    }

    #[Route('/supplier/update', options: ['expose'=>true], methods: 'POST', name: 'app_update_supplier')]
    public function UpdateSupplierData(EntityManagerInterface $em, Request $request)
    {

        $jsonData = $request->getContent();
        $supplierData = json_decode($jsonData, true);
            // dd($supplierData);
        $id = $supplierData['id'];
        $name = $supplierData['name'];
        $address = $supplierData['address'];
        $email = $supplierData['email'];
        $phone = $supplierData['phone'];


        $supplier = $em->getRepository(Supplier::class)->find($id);

        $supplier->setName($name);
        $supplier->setAddress($address);
        $supplier->setEmail($email);
        $supplier->setPhone($phone);

        $em->flush();

        $updateSuccessful = true;

            if ($updateSuccessful) {
                return new Response('Update successful', Response::HTTP_OK);
            } else {       
                return new Response('Update failed', Response::HTTP_BAD_REQUEST);
            }
    }

    #[Route('/status/supplier/{id}', options: ['expose'=>true], methods: 'GET', name: 'app_update_supplier_status')]
    public function UpdateSupplierStatus(EntityManagerInterface $em, $id)
    {

        $supplier = $em->getRepository(Supplier::class)->find($id);
        if (!$supplier) {
            throw $this->createNotFoundException(
                'No supplier found for id ' . $id
            );
        }
        // dd($supplier);
        $supplier->setIsActive(!$supplier->isIsActive());
        $em->flush();

        $updateSuccessful = true;

                    if ($updateSuccessful) {
                        return new Response('Update successful', Response::HTTP_OK);
                    } else {
                        return new Response('Update failed', Response::HTTP_BAD_REQUEST);
                    }
    }


    private function validateEmail(string $email): array
    {
        // Use Symfony's built-in Email constraint for email validation
        $validator = Validation::createValidator();
        $errors = $validator->validate($email, new Email());

        $emailErrors = [];
        if (count($errors) > 0) {
            foreach ($errors as $error) {
                $emailErrors[] = $error->getMessage();
            }
        }

        return $emailErrors;
    }

} 
