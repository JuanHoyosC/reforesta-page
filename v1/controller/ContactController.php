<?php
require_once  '../v1/models/Contact.php';
require_once '../v1/controller/Controller.php';
class ContactController extends Controller
{
    public function __construct($requestMethod, $id = null)
    {
        parent::__construct($requestMethod, $id);
        $this->contact = new Contact();
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                if ($this->id == null) {
                    $this->getAllContacts();
                } else {
                    $this->getContactById($this->id);
                }
                break;
            case 'POST':
                $token = $this->getBearerToken();
                $this->contact->validate_token($token) ? $this->createContact() : header('HTTP/1.1 401 Unauthorized');
                break;
            case 'PUT':
                $token = $this->getBearerToken();
                $this->contact->validate_token($token) ? $this->updateContactById($this->id) : header('HTTP/1.1 401 Unauthorized');
                break;

            case 'DELETE':
                $token = $this->getBearerToken();
                $this->contact->validate_token($token) ? $this->contact->deleteContactById($this->id) : header('HTTP/1.1 401 Unauthorized');
                break;
            default:
                header('HTTP/1.1 401 Unauthorized');
                break;
        }
    }

    private function getAllContacts()
    {
        if (count($this->contact->getContacts()) >= 1) {
            print_r(
                json_encode(
                    $this->contact->getContacts()
                )
            );
        }
    }

    private function getContactById($id)
    {
        if ($this->contact->getContactById($id)) {
            print_r(
                json_encode(
                    $this->contact->getContactById($id)
                )
            );
        }
    }

    private function createContact()
    {
        $input = array();
        $input = (array) json_decode(file_get_contents('php://input'), TRUE);
        $response = $this->contact->insertContact($input);
        if (!$response) return header('HTTP/1.1 401 Not Updated');
        return header('HTTP/1.1 200 Created');
    }

    private function updateContactById($id)
    {
        $input = array();
        $input["contact_id"] = $id;
        $pre_input = (array) json_decode(file_get_contents('php://input'), TRUE);
        $input["contact_description"] = $pre_input["contact_description"];
        $input["contact_url"] = $pre_input["contact_url"];
        $response = $this->contact->updateContactById($input);
        if (!$response) return header('HTTP/1.1 401 Not Updated');
        return header('HTTP/1.1 200 Updated');
    }
}
