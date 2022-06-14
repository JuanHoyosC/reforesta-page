<?php
require_once '../v1/models/User.php';
require_once '../v1/controller/Controller.php';
// error_reporting(0);
class UserController extends Controller
{

    public function __construct($requestMethod, $id = null)
    {
        parent::__construct($requestMethod, $id);
        $this->user = new User();
    }

    public function processRequest()
    {
        $token = $this->getBearerToken();
        if (!$this->user->validate_token($token)) {
            header('HTTP/1.1 401 Unauthorized');
            print_r(json_encode(array("error" => "no autorizado")));
            exit();
        }
        switch ($this->requestMethod) {
            case 'GET':

                if ($this->id == null) {
                    $this->getUsers();
                } else {
                    $this->getUserById($this->id);
                }

                break;
            case 'POST':
                $this->user->validate_token($token) ? $this->registerUser() : header('HTTP/1.1 401 Unauthorized');
                break;

            case 'PUT':
                $this->user->validate_token($token) ? $this->updateUser($this->id) : header('HTTP/1.1 401 Unauthorized');
                break;
            case 'DELETE':
                $this->user->validate_token($token) ? $this->deleteUser($this->id) : header('HTTP/1.1 401 Unauthorized');
                break;
            default:
                header('HTTP/1.1 401 Unauthorized');
                print_r(json_encode(array("error" => "no autorizado")));
                break;
        }
    }

    private function registerUser()
    {
        $input = (array) json_decode(file_get_contents('php://input'), TRUE);
        if (!$this->validateUser($input)) {
            header('HTTP/1.1 400 BAD REQUEST');
            print_r(json_encode(array("error" => "llenar todos los datos")));
        } else {
            $this->user->createUser($input);
            header('HTTP/1.1 201 Created');
        }
    }

    private function deleteUser($id)
    {
        $this->user->deleteUser($id);
        header('HTTP/1.1 200 Deleted');
    }

    private function getUsers()
    {
        $limit = isset($_GET["limit"]) ? $_GET["limit"] : 20;
        $page = isset($_GET["page"]) ? $_GET["page"] : 1;
        if (count($this->user->getAllUser($limit, $page)) >= 1) {
            print_r(json_encode(array("total_page" => $this->user->getTotalPages($limit), "data" => $this->user->getAllUser($limit, $page))));
        } else {
            header('HTTP/1.1 404 BAD REQUEST');
            print_r(json_encode(array("error" => "sin registros")));
        }
    }

    private function getUserById($id)
    {
        if ($this->user->getUserById($id)) {
            print_r(json_encode($this->user->getUserById($id)));
        } else {
            header('HTTP/1.1 404 BAD REQUEST');
            print_r(json_encode(array("error" => "sin registros")));
        }
    }

    private function updateUser($id)
    {
        $input = array();
        $pre_input = (array) json_decode(file_get_contents('php://input'), TRUE);
        $input['user'] = $pre_input['user'];
        if ($pre_input['password'] !== "" || $pre_input['password'] !== null) {
            $input['password'] = $pre_input['password'];
        }
        $response = $this->user->updateUser($id, $input);
        if ($response) header('HTTP/1.1 200 Updated');
        else header('HTTP/1.1 401 Not Updated');
    }

    private function validateUser($input)
    {
        if (
            !isset($input['user']) ||
            $input['user'] === "" ||
            $input['user'] === null
        ) {
            return false;
        }
        if (
            !isset($input['password']) ||
            $input['password'] === "" ||
            $input['password'] === null
        ) {
            return false;
        }
        return true;
    }
}
