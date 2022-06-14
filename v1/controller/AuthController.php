<?php
require_once  '../v1/models/Auth.php';
require_once '../v1/controller/Controller.php';

class AuthController extends Controller
{
    public function __construct($requestMethod, $id = null)
    {
        parent::__construct($requestMethod, $id);
        $this->auth = new Auth();
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'POST':
                $response = $this->login();
                break;
            default:
                $response = $this->notFoundResponse();
                break;
        }
        header($response['status_code_header']);
        if ($response['body']) {
            echo $response['body'];
        }
    }

    private function login()
    {
        $input = (array) json_decode(file_get_contents('php://input'), TRUE);

        if (!$this->validateUser($input)) {
            return $this->unprocessableEntityResponse();
        }
        if ($this->auth->Login($input["user"], $input["password"])) {
            $response['status_code_header'] = 'HTTP/1.1 200 Ok';
            $response['body'] = json_encode($this->auth->Login($input["user"], $input["password"]));
            return $response;
        } else {
            return $this->unprocessableEntityResponse();
        }
    }

    private function validateUser($input)
    {
        if (!isset($input['user'])) {
            return false;
        }
        if (!isset($input['password'])) {
            return false;
        }
        return true;
    }

    private function unprocessableEntityResponse()
    {
        $response['status_code_header'] = 'HTTP/1.1 422 Unprocessable Entity';
        $response['body'] = json_encode([
            'error' => 'Invalid input'
        ]);
        return $response;
    }

    private function notFoundResponse()
    {
        $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
        $response['body'] = null;
        return $response;
    }
}
