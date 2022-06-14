<?php

error_reporting(0);

require_once './controller/UserController.php';
require_once './controller/AuthController.php';
require_once './controller/GalleryController.php';
require_once './controller/PartnerController.php';
require_once './controller/SliderController.php';
require_once './controller/ProjectController.php';
require_once './controller/DonationController.php';
require_once './controller/SocialNetworkController.php';
require_once './controller/ContactController.php';
require_once './controller/MapController.php';
require_once './controller/DashboardController.php';
require_once './controller/SendEmailController.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

if ($uri[2]) {
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    $extra_param = null;
    if (isset($_GET["id"])) {
        $extra_param = (int)$_GET["id"];
    }
    $path = $uri[2];
    switch ($path) {
        case 'auth':
            $authController = new AuthController($requestMethod);
            $authController->processRequest();
            break;
        case 'user':
            $userController = new UserController($requestMethod, $extra_param);
            $userController->processRequest();
            break;
        case 'gallery':
            $galleryController = new GalleryController($requestMethod, $extra_param);
            $galleryController->processRequest();
            break;
        case 'partner':
            $partnerController = new PartnerController($requestMethod, $extra_param);
            $partnerController->processRequest();
            break;
        case 'slider':
            $sliderController = new SliderController($requestMethod, $extra_param);
            $sliderController->processRequest();
            break;
        case 'project':
            $projectController = new ProjectController($requestMethod, $extra_param);
            $projectController->processRequest();
            break;
        case 'donation':
            $donationController = new DonationController($requestMethod, $extra_param);
            $donationController->processRequest();
            break;
        case 'social':
            $socialNetwrokController = new SocialNetworkController($requestMethod, $extra_param);
            $socialNetwrokController->processRequest();
            break;
        case 'contact':
            $contactController = new ContactController($requestMethod, $extra_param);
            $contactController->processRequest();
            break;
        case 'map':
            $mapController = new MapController($requestMethod, $extra_param);
            $mapController->processRequest();
            break;
        case 'dashboard':
            $dashboardController = new DashboardController($requestMethod, $extra_param);
            $dashboardController->processRequest();
            break;
        case 'email':
            $emailController = new SendEmailController($requestMethod, $extra_param);
            $emailController->processRequest();
            break;
        default:
            echo "No existe esta seccion";
            exit();
            break;
    }
} else {
    header("HTTP/1.1 404 Not Found");
    echo "No existe esta seccion";
    exit();
}
