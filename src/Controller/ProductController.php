<?php

namespace App\Controller;

use App\Entity\Supplier;
use App\Entity\Product;
use App\Entity\Category;
use Doctrine\ORM\EntityManagerInterface;
use Mpdf\Mpdf;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{

    #[Route('/product/list', options: ['expose'=>true], name: 'app_product_list')]
    public function index(EntityManagerInterface $em): Response
    {
            $suppliers = $em->getRepository(Supplier::class)->findAll();
            $suppliersData = [];
            foreach ($suppliers as $supplier) {
                $suppliersData[] = [
                    'id' => $supplier->getId(), 
                    'name' => $supplier->getName(),
                ];
            }

            $categories = $em->getRepository(Category::class)->findAll();
            $categoriesData = [];
            foreach ($categories as $category) {
                $categoriesData[] = [
                    'id' => $category->getId(),
                    'name' => $category->getName(),
                ];
            }

        return $this->render('product/index.html.twig', [
            'suppliers' => $suppliersData,
            'categories' => $categoriesData,
        ]);
        }

    #[Route('/product/get-list', options: ['expose'=>true], methods: 'GET', name: 'app_product_get_list')]
    public function product_list(Request $request, EntityManagerInterface $em): JsonResponse
    {

    // dd($request->query->all());

        $draw = $request->query->get('draw');
        $start = $request->query->get('start') ?? 0;
        $length = $request->query->get('length') ?? 10;
        $search = $request->query->all('search')["value"];
        $orderColumnIndex = $request->query->all('order')[0]['column'];
        $orderColumn = $request->query->all("columns")[$orderColumnIndex]['name'];
        $orderDir = $request->query->all('order')[0]['dir'] ?? 'asc';


        $queryBuilder = $em->createQueryBuilder()
            ->select('p.id AS id, p.name AS product_name, p.price AS product_price, p.quantity AS product_quantity, s.name  AS supplier_name, c.name AS category_name, p.isActive AS product_is_active')
            ->from(Product::class, 'p')
            ->innerJoin('p.supplier','s')
            ->innerJoin('p.category', 'c');

            // Apply search query
        // dd($search);
        if (!empty($search)) {
            $queryBuilder->andWhere('p.name LIKE :search OR s.name LIKE :search OR c.name LIKE :search ')
                  ->setParameter('search', "%$search%");
        }

        // Apply order

        // dd($orderColumn);
        if (!empty($orderColumn)) {
            $queryBuilder->orderBy("$orderColumn", $orderDir);
        }

        // Paginate results
        $queryBuilder->setFirstResult($start)
            ->setMaxResults($length);
        // dd($queryBuilder->getQuery());
        $results = $queryBuilder->getQuery()->getResult();
        // dd($results);

        $totalRecords = $em->createQueryBuilder()
            ->select('COUNT(p.id)')
            ->from(Product::class, 'p')
            ->getQuery()
            ->getSingleScalarResult();
        // dd($totalRecords);


        $formattedData = [];
        foreach ($results as $item) {
            $formattedData[] = [
                'id' => $item['id'],
                'product_name' => $item['product_name'],
                'product_price' => $item['product_price'],
                'product_quantity' => $item['product_quantity'],
                'supplier_name' => $item['supplier_name'],
                'category_name' => $item['category_name'],
                'status' => $item['product_is_active'],
                ];
        }
        

        // Return the data as a JSON response
        return new JsonResponse([
          'draw' => $draw,
          'recordsTotal' => $totalRecords,
          'recordsFiltered' =>$totalRecords,
          'data' => $formattedData,
      ]);
    }

    #[Route(path: '/new/product', options: ['expose'=>true], methods: 'POST', name: 'app_new_product')]
    public function newproduct(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $jsonData = $request->getContent();
        $productData = json_decode($jsonData, true);

        // dd($productData);

        $name = $productData['name'];
        $price = $productData['price'];
        $quantity = $productData['quantity'];
        $supplierId = $productData['supplier'];
        $supplier = $em->getRepository(Supplier::class)->find($supplierId);
        $categoryId = $productData['category'];
        $category = $em->getRepository(Category::class)->find($categoryId);

        // Validate email ans pass
        if ($name == "" or $price == "") {
            return new JsonResponse(['errors' => 'Name and Price is required'], JsonResponse::HTTP_BAD_REQUEST);
        }


        $product = new Product();

        $product->setName($name);
        $product->setPrice($price);
        $product->setQuantity($quantity);
        $product->setSupplier($supplier);
        $product->setCategory($category);
        // $product->setCreatedBy('CreatedBy');
        // $product->setCreatedAt('CreatedAt');

        $em->persist($product);
        $em->flush();
        
            return new JsonResponse(['message' => 'Product added successfully'], JsonResponse::HTTP_OK);
    }

    #[Route('/status/product', options: ['expose'=>true], methods: 'POST', name: 'app_update_product_status')]
    public function changeStatus(EntityManagerInterface $em, Request $request): JsonResponse
    {
        // Decode the JSON payload
        $data = json_decode($request->getContent(), true);

        // Get the productIds from the decoded data, default to an empty array
        $productIds = $data['productIds'] ?? [];

        // Fetch the corresponding Product entities from the database
        $products = $em->getRepository(Product::class)->findBy(['id' => $productIds]);

            foreach ($products as $product) {
            $product->setIsActive(!$product->isIsActive());
            $em->persist($product);
            $em->flush();
            }

    return new JsonResponse(['message' => 'Status changed successfully'], JsonResponse::HTTP_OK);
    }
    #[Route('/product/export-excel', methods: 'GET', name: 'app_product_export_excel')]
    public function exportExcel(EntityManagerInterface $em)
    {
        
        // Fetch products from the repository
    $products = $em->getRepository(Product::class)->findAll();
            // dd($products);
    // Create a new PhpSpreadsheet instance
    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();

    // Set column headers
    $sheet->setCellValue('A1', 'ID');
    $sheet->setCellValue('B1', 'Name');
    $sheet->setCellValue('C1', 'Price');
    $sheet->setCellValue('D1', 'Quantity');
    $sheet->setCellValue('E1', 'Supplier');
    $sheet->setCellValue('F1', 'Category');
    $sheet->setCellValue('G1', 'Status');

    // Populate data
    $row = 2;
    foreach ($products as $product) {
        $supplier = $em->getRepository(Supplier::class)->find($product->getSupplier());
        $category = $em->getRepository(Category::class)->find($product->getCategory());
        // dd($product->getId());
        $sheet->setCellValue('A' . $row, $product->getId());
        // dd($product->getName());
        $sheet->setCellValue('B' . $row, $product->getName());
        // dd($product->getPrice());
        $sheet->setCellValue('C' . $row, $product->getPrice());
        // dd($product->getQuantity());
        $sheet->setCellValue('D' . $row, $product->getQuantity());
        // dd($supplier->getName());
        $sheet->setCellValue('E' . $row, $supplier->getName());
        // dd($category->getName());
        $sheet->setCellValue('F' . $row, $category->getName());
        // dd($product->isIsActive() ? 'Active' : 'Inactive');
        $sheet->setCellValue('G' . $row, $product->isIsActive() ? 'Active' : 'Inactive');

        $row++;
    }

    $tempFilePath = sys_get_temp_dir() . '/product.xlsx';

        $writer = new Xlsx($spreadsheet);
        $writer->save($tempFilePath);

        $response = new Response(file_get_contents($tempFilePath));

        $response->headers->set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        $response->headers->set('Content-Disposition', 'attachment; filename="product.xlsx"');

        if($tempFilePath)
            unlink($tempFilePath);

        return $response;
    }


    #[Route('/get/product/{id}', options: ['expose'=>true], methods: 'GET', name: 'app_get_product')]
    public function getProductData(EntityManagerInterface $em, $id)
    {
        $product = $em->getRepository(product::class)->find($id);
        
        if (!$product) {
            throw $this->createNotFoundException(
                'No product found for id ' . $id
            );
        }
        
        $supplier = $em->getRepository(Supplier::class)->find($product->getSupplier());
        $category = $em->getRepository(Category::class)->find($product->getCategory());
        $productData = [
            'id' => $product->getId(),
            'name' => $product->getName(),
            'price' => $product->getPrice(),
            'quantity' => $product->getQuantity(),
            'supplier' => $supplier->getId(),
            'category' => $category->getId(),
        ];
        // dd($productData);
        return new JsonResponse(['product' => $productData]);
    }

    #[Route('/update/product', options: ['expose'=>true], methods: 'POST', name: 'app_update_product')]
    public function UpdateproductData(EntityManagerInterface $em, Request $request)
    {

        $jsonData = $request->getContent();
        $productData = json_decode($jsonData, true);


        $id = $productData['id'];
        $name = $productData['name'];
        $price = $productData['price'];
        $quantity = $productData['quantity'];
        $supplierId = $productData['supplier'];
        $supplier = $em->getRepository(Supplier::class)->find($supplierId);
        $categoryId = $productData['category'];
        $category = $em->getRepository(Category::class)->find($categoryId);
        

            $product = $em->getRepository(product::class)->find($id);

            $product->setName($name);
            $product->setPrice($price);
            $product->setQuantity($quantity);
            $product->setSupplier($supplier);
            $product->setCategory($category);
            // $product->setUpdatedBy('UpdatedBy');
            // $product->setUpdatedAt('UpdatedAt');

            $em->persist($product);
            $em->flush();

            $updateSuccessful = true;

                    if ($updateSuccessful) {
                        return new Response('Update successful', Response::HTTP_OK);
                    } else {
                        
                        return new Response('Update failed', Response::HTTP_BAD_REQUEST);
                    }
    }

    
    
     #[Route('product/export-to-pdf/{id}', options: ['expose'=>true], methods: 'GET', name: 'export_to_pdf')]
    public function extractPdf(EntityManagerInterface $em, $id): Response
    {
        $product = $em->getRepository(Product::class)->find($id);

        if (!$product) {
            throw $this->createNotFoundException('Product not found');
        }

        $supplier = $em->getRepository(Supplier::class)->find($product->getSupplier());
        $category = $em->getRepository(Category::class)->find($product->getCategory());

        // Configure mPDF
        $mpdf = new Mpdf();
        // Add CSS for styling
        $css = '
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                margin: 0;
                padding: 0;
            }

            .centered-content {
                text-align: center;
                margin: 20px auto;
                width: 60%;
                padding: 20px;
                border-radius: 10px;
            }
            .bar-code {
                text-align: center;
                margin: 20px auto;
                width: 60%;
                padding: 20px;
                border-radius: 10px;
            }
            h1 {
                color: #000000;
                font-size: 35px;
            }

            p {
                margin: 10px 0;
                font-size: 18px;
                text-align: center;
            }
        ';
        $mpdf->WriteHTML($css, \Mpdf\HTMLParserMode::HEADER_CSS);
        
        $mpdf->WriteHTML('<div class="centered-content"><h1>' . $product->getName() . '</h1>');
        $mpdf->WriteHTML('<p><strong>Price:</strong> ' . $product->getPrice() . ' DH</p>');
        $mpdf->WriteHTML('<p><strong>Quantity:</strong> ' . $product->getQuantity() . '</p>');
        $mpdf->WriteHTML('<p><strong>Supplier:</strong> ' . $supplier->getName() . '</p>');
        $mpdf->WriteHTML('<p><strong>Category:</strong> ' . $category->getName() . '</p></div>');
        $mpdf->WriteHTML('<p><barcode code="' . $product->getId() . '" type="C128A" size="0.5"  height="1" text="1"></p>');
        // // Add barcode
        // $mpdf->WriteHTML('<div class="bar-code">');
        // $mpdf->WriteHTML('<p style="font-size: 24px; margin-bottom: 10px;">Barcode:</p>');
        // $mpdf->WriteBarcode($product->getId(), 'C39');
        // $mpdf->WriteHTML('</div>');

        // Output PDF as a response
        $response = new Response($mpdf->Output(), 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="product_' . $product->getId() . '.pdf"',
        ]);

        return $response;
    }
}
