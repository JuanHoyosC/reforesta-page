<?php
require_once  '../v1/models/SocialNetwork.php';
require_once '../v1/controller/Controller.php';
class SocialNetworkController extends Controller
{
    public function __construct($requestMethod, $id = null)
    {
        parent::__construct($requestMethod, $id);
        $this->social = new SocialNetwork();
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                if ($this->id == null) {
                    $this->getAllSocialNetworks();
                } else {
                    $this->getSocialNetworkById($this->id);
                }
                break;
            case 'PUT':
                $token = $this->getBearerToken();
                $this->social->validate_token($token) ? $this->updateSocialNetwork($this->id) : header('HTTP/1.1 401 Unauthorized');
                break;
            default:
                print_r("No Autorizado");
                break;
        }
    }

    private function getAllSocialNetworks()
    {
        if (count($this->social->getAllSocialNetworks()) >= 1) {
            print_r(json_encode(array("data" => $this->social->getAllSocialNetworks())));
        } else {
            header('HTTP/1.1 404 BAD REQUEST');
            print_r(json_encode(array("error" => "sin registros")));
        }
    }

    private function getSocialNetworkById($id)
    {

        if (count($this->social->getSocialNetworkById($id)) >= 1) {
            print_r(json_encode(array("data" => $this->social->getSocialNetworkById($id))));
        } else {
            header('HTTP/1.1 404 BAD REQUEST');
            print_r(json_encode(array("error" => "sin registros")));
        }
    }

    private function updateSocialNetwork($id)
    {
        $input = array();
        $pre_input = (array) json_decode(file_get_contents('php://input'), TRUE);
        $input['network_url'] = $pre_input['network_url'];
        $input['is_active'] = $pre_input['is_active'];
        $response = $this->social->updateSocialNetworkById($id, $input);
        if (!$response) return header('HTTP/1.1 401 Not Updated');
        return header('HTTP/1.1 200 Updated');
    }
}
