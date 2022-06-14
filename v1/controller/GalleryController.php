<?php
require_once '../v1/models/Gallery.php';
require_once '../v1/controller/Controller.php';
class GalleryController extends Controller
{
    public function __construct($requestMethod, $id = null)
    {
        parent::__construct($requestMethod, $id);
        $this->gallery = new Gallery();
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                if ($this->id == null) {
                    $this->getAllImages();
                } else {
                    $this->getImageById($this->id);
                }
                break;
            case 'POST':
                $token = $this->getBearerToken();
                $this->gallery->validate_token($token) ? $this->createImage() :  header('HTTP/1.1 401 Unauthorized');
                break;
            case 'DELETE':
                $token = $this->getBearerToken();
                $this->gallery->validate_token($token) ? $this->gallery->deleteImage($this->id) :  header('HTTP/1.1 401 Unauthorized');
                break;
            default:
                print_r("No Autorizado");
                break;
        }
    }

    private function createImage()
    {
        $route_main =  "/static/media/gallery/";
        $filename = $_FILES['files']['name'];
        $route  = $route_main . $filename;
        if ($filename === null || $filename === "") return header('HTTP/1.1 400 Not Created');
        $this->uploadImage($route_main, $filename);
        $response = $this->gallery->insertImage($route);
        if (!$response) return header('HTTP/1.1 400 Not Created');
        return header('HTTP/1.1 200 Created');
    }

    private function getAllImages()
    {
        $limit = isset($_GET["limit"]) ? $_GET["limit"] : 20;
        $page = isset($_GET["page"]) ? $_GET["page"] : 1;
        if (count($this->gallery->getAllImages($limit, $page)) >= 1) {
            print_r(
                json_encode(
                    array(
                        "total_page" => $this->gallery->getTotalPages($limit),
                        "data" => $this->gallery->getAllImages($limit, $page)
                    )
                )
            );
        } else {
            print_r("error");
        }
    }

    private function getImageById($id)
    {
        if ($this->gallery->getImageById($id)) {
            print_r(json_encode($this->gallery->getImageById($id)));
        } else {
            header('HTTP/1.1 404 BAD REQUEST');
            print_r(json_encode(array("error" => "sin registros")));
        }
    }
}
