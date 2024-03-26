<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Validator\Validation;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\HttpFoundation\Request;

class UserController extends AbstractController
{

    
    // #[Route(path: '/', name: 'app_hom')]
    // public function logout(ManagerRegistry $doctrine , UserPasswordHasherInterface $userPasswordHasher)
    // {
    //     $entity_manager = $doctrine->getManager();

    //     $user = new User();

    //     $user->setEmail("admin");

    //     $user->setRoles(["ROLE_ADMIN"]);
    //     $hashPassword = $userPasswordHasher->hashPassword($user, '123456');

    //     $user->setPassword($hashPassword);

    //     $entity_manager->persist($user);
    //     $entity_manager->flush();
    // }

    
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        if ($this->getUser()) {
          return $this->redirectToRoute('app_home');
        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername,
        'error' => $error
                            ]);
    }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout()
    {
            
    }

    #[Route('/user/list', options: ['expose'=>true], name: 'app_user_list')]
    public function index(): Response
    {
        return $this->render('user_list/index.html.twig', [
            'controller_name' => 'Users List',
        ]);
    }

    #[Route('/user/getlist', options: ['expose'=>true], methods: 'GET', name: 'app_user_getlist')]
    public function getUsers(Request $request, EntityManagerInterface $em): JsonResponse
    {

    //   dd($request);
    // dd($request->query->all());

        $draw = $request->query->get('draw');
        $start = $request->query->get('start') ?? 0;
        $length = $request->query->get('length') ?? 10;
        $search = $request->query->all('search')["value"];
        $orderColumnIndex = $request->query->all('order')[0]['column'];
        $orderColumn = $request->query->all("columns")[$orderColumnIndex]['name'];
        $orderDir = $request->query->all('order')[0]['dir'] ?? 'asc';


        $queryBuilder = $em->createQueryBuilder()
            ->select('u.id, u.email, u.roles, u.status')
            ->from(User::class, 'u');

            // Apply search query
        // dd($search);
        if (!empty($search)) {
            $queryBuilder->andWhere('u.email LIKE :search OR u.roles LIKE :search OR u.status LIKE :search ')
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
            
        $results = $queryBuilder->getQuery()->getResult();
        // dd($results);

        $totalRecords = $em->createQueryBuilder()
            ->select('COUNT(u.id)')
            ->from(User::class, 'u')
            ->getQuery()
            ->getSingleScalarResult();
        // dd($totalRecords);


        $formattedData = [];
        foreach ($results as $item) {
            $formattedData[] = [
                'id' => $item['id'],
                'email' => $item['email'],
                'roles' => $item['roles'],
                'status' => $item['status'],
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

    #[Route(path: '/user/new', options: ['expose'=>true], methods: 'POST', name: 'app_new_user')]
    public function newUser(Request $request, ManagerRegistry $doctrine , UserPasswordHasherInterface $userPasswordHasher): JsonResponse
    {
        $jsonData = $request->getContent();
        $userData = json_decode($jsonData, true);

        $email = $userData['email'];
        $role = $userData['role'];
        $plainPassword = $userData['password'];

        // Validate email ans pass
        if ($email == "" or $plainPassword == "") {
            return new JsonResponse(['errors' => 'Email and password  is required'], JsonResponse::HTTP_BAD_REQUEST);
        }

        // Validate email
        $emailErrors = $this->validateEmail($email);
        if (!empty($emailErrors)) {
            return new JsonResponse(['errors' => $emailErrors], JsonResponse::HTTP_BAD_REQUEST);
        }

        // Validate password
        $passwordErrors = $this->validatePassword($plainPassword);
        if (!empty($passwordErrors)) {
            return new JsonResponse(['errors' => $passwordErrors], JsonResponse::HTTP_BAD_REQUEST);
        }

        $entity_manager = $doctrine->getManager();
        
        // Check if the email already exists
        $existingUser = $doctrine->getRepository(User::class)->findOneBy(['email' => $email]);

        if ($existingUser) {
            return new JsonResponse(['errors' => 'Email is already in use'], Response::HTTP_CONFLICT);
        }

        $user = new User();

        $user->setEmail($email);
        $user->setRoles([$role]);
        $hashPassword = $userPasswordHasher->hashPassword($user, $plainPassword);
        $user->setPassword($hashPassword);

        $entity_manager->persist($user);
        $entity_manager->flush();
        
            return new JsonResponse(['message' => 'User added successfully'], JsonResponse::HTTP_OK);
    }

    #[Route('/user/get/{id}', options: ['expose'=>true], methods: 'GET', name: 'app_get_user')]
    public function getUserData(EntityManagerInterface $em, $id)
    {
        $user = $em->getRepository(User::class)->find($id);
        
        if (!$user) {
            throw $this->createNotFoundException(
                'No user found for id ' . $id
            );
        }
        $userData = [
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'roles' => $user->getRoles(),
        ];
        return new JsonResponse(['user' => $userData]);
    }
    
    #[Route('/user/update', options: ['expose'=>true], methods: 'POST', name: 'app_update_user')]
    public function UpdateUserData(ManagerRegistry $doctrine, Request $request)
    {

        $jsonData = $request->getContent();
        $userData = json_decode($jsonData, true);

        $id = $userData['id'];
        $email = $userData['email'];
        $role = $userData['role'];

        // Validate email
        if ($email == "") {
            return new JsonResponse(['errors' => 'Email is required'], JsonResponse::HTTP_BAD_REQUEST);
        }
        // Validate email
        $emailErrors = $this->validateEmail($email);
        if (!empty($emailErrors)) {
            return new JsonResponse(['errors' => $emailErrors], JsonResponse::HTTP_BAD_REQUEST);
        }
        $entity_manager = $doctrine->getManager();
        // Check if the email already exists
        $existingUser = $doctrine->getRepository(User::class)->findOneBy(['email' => $email]);

        

            $entity_manager = $doctrine->getManager();
            $user = $entity_manager->getRepository(User::class)->find($id);

            if ($existingUser && $user->getEmail() != $email ) {
                return new JsonResponse(['errors' => 'Email is already in use'], Response::HTTP_CONFLICT);
            }

            $user->setEmail($email);
            $user->setRoles([$role]);
            // $user->setUpdatedAt('updated name');
            // $user->setUserUpdated('updated name');

            $entity_manager->flush();

            $updateSuccessful = true;

                    if ($updateSuccessful) {
                        return new Response('Update successful', Response::HTTP_OK);
                    } else {
                        
                        return new Response('Update failed', Response::HTTP_BAD_REQUEST);
                    }
    }

    #[Route('/user/status/{id}', options: ['expose'=>true], methods: 'GET', name: 'app_update_user_status')]
    public function UpdateUserStatus(ManagerRegistry $doctrine, $id)
    {
        $entity_manager = $doctrine->getManager();
        $user = $entity_manager->getRepository(User::class)->find($id);

        if($user->isStatus()){
            $user->setStatus(0);
        }else{
            $user->setStatus(1);
        }
        $entity_manager->flush();

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

    private function validatePassword(string $password): array
    {
        $errors = [];

        // Minimum length of 6 characters
        if (strlen($password) < 6) {
            $errors[] = 'Password must be at least 6 characters long.';
        }


        return $errors;
    }
}
