<?php
require_once '../v1/models/Partner.php';
require_once '../v1/controller/Controller.php';
class PartnerController extends Controller
{
    public function __construct($requestMethod, $id = null)
    {
        parent::__construct($requestMethod, $id);
        $this->partner = new Partner();
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                if ($this->id == null) {
                    $this->getAllPartners();
                } else {
                    $this->getPartnerById($this->id);
                }
                break;
            case 'POST':
                $token = $this->getBearerToken();
                $this->partner->validate_token($token) ? $this->createPartner() :  header('HTTP/1.1 401 Unauthorized');
                break;
            case 'DELETE':
                $token = $this->getBearerToken();
                $this->partner->validate_token($token) ? $this->partner->deletePartner($this->id) :  header('HTTP/1.1 401 Unauthorized');
                break;
            default:
                print_r("No Autorizado");
                break;
        }
    }

    private function createPartner()
    {
        $route_main =  "/static/media/partner/";
        $filename = $_FILES['files']['name'];
        $route  = $route_main . $filename;
        if ($filename === null || $filename === "") return header('HTTP/1.1 400 Not Created');
        $this->uploadImage($route_main, $filename);
        $response = $this->partner->insertPartner($route);
        if (!$response) return header('HTTP/1.1 400 Not Created');
        return header('HTTP/1.1 200 Created');
    }

    private function getAllPartners()
    {
        $limit = isset($_GET["limit"]) ? $_GET["limit"] : 20;
        $page = isset($_GET["page"]) ? $_GET["page"] : 1;
        if (count($this->partner->getAllPartners($limit, $page)) >= 0) {
            print_r(
                json_encode(
                    array(
                        "total_page" => $this->partner->getTotalPages($limit),
                        "data" => $this->partner->getAllPartners($limit, $page)
                    )
                )
            );
        } else {
            print_r("error");
        }
    }

    private function getPartnerById($id)
    {
        if ($this->partner->getPartnerById($id)) {
            print_r(json_encode($this->partner->getPartnerById($id)));
        } else {
            header('HTTP/1.1 404 BAD REQUEST');
            print_r(json_encode(array("error" => "sin registros")));
        }
    }
}
