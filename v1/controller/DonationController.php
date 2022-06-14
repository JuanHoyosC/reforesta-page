<?php
require_once  '../v1/models/Donation.php';
require_once '../v1/controller/Controller.php';
class DonationController extends Controller
{
    public function __construct($requestMethod, $id = null)
    {
        parent::__construct($requestMethod, $id);
        $this->donation = new Donation();
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                $this->getDonation();
                break;
            case 'PUT':
                $token = $this->getBearerToken();
                $this->donation->validate_token($token) ? $this->updateDonation($this->id) : header('HTTP/1.1 401 Unauthorized');
                break;
            default:
                print_r("No Autorizado");
                break;
        }
    }

    private function getDonation()
    {
        if (count($this->donation->getDonations()) >= 1) {
            print_r(json_encode($this->donation->getDonations()));
        } else {
            header('HTTP/1.1 404 BAD REQUEST');
            print_r(json_encode(array("error" => "sin registros")));
        }
    }

    private function updateDonation($id)
    {
        $input = array();
        $pre_input = (array) json_decode(file_get_contents('php://input'), TRUE);
        $input['donation_description'] = $pre_input['donation_description'];
        $response = $this->donation->updateDonation($id, $input);
        if (!$response) return header('HTTP/1.1 401 Not Updated');
        return header('HTTP/1.1 200 Updated');
    }
}
