<?php
require_once  '../v1/models/Map.php';
require_once '../v1/controller/Controller.php';
class MapController extends Controller
{
    public function __construct($requestMethod, $id = null)
    {
        parent::__construct($requestMethod, $id);
        $this->map = new Map();
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                $this->getMap();
                break;
            case 'PUT':
                $token = $this->getBearerToken();
                $this->map->validate_token($token) ? $this->updateMap() : header('HTTP/1.1 401 Unauthorized');
                break;
            default:
                print_r("No Autorizado");
                break;
        }
    }


    private function getMap()
    {
        if (count($this->map->getMap()) >= 1) {
            print_r(json_encode($this->map->getMap()));
        } else {
            header('HTTP/1.1 404 BAD REQUEST');
            print_r(json_encode(array("error" => "sin registros")));
        }
    }

    private function updateMap()
    {
        $input = array();
        $pre_input = (array) json_decode(file_get_contents('php://input'), TRUE);
        $input['map_iframe'] = $pre_input['map_iframe'];
        $input['id'] = 1;
        $response = $this->map->updateMap($input);
        if (!$response) return header('HTTP/1.1 401 Not Updated');
        return header('HTTP/1.1 200 Updated');
    }
}
