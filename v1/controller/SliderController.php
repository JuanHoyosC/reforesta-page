<?php
require_once '../v1/models/Slider.php';
require_once '../v1/controller/Controller.php';
class SliderController extends Controller
{
    public function __construct($requestMethod, $id = null)
    {
        parent::__construct($requestMethod, $id);
        $this->slider = new Slider();
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                if ($this->id) {
                    $this->getSliderById($this->id);
                } else {
                    $this->getAllImages();
                }
                break;
            case 'POST':
                $token = $this->getBearerToken();
                if ($this->id != null) {
                    $this->slider->validate_token($token) ?
                        $this->updateSlider($this->id) :
                        header('HTTP/1.1 401 Unauthorized');
                } else {
                    $this->slider->validate_token($token) ?
                        $this->createSlider() :
                        header('HTTP/1.1 401 Unauthorized');
                }
                break;
            case 'DELETE':
                $token = $this->getBearerToken();
                $this->slider->validate_token($token) ?
                    $this->slider->deleteSlider($this->id) :
                    header('HTTP/1.1 401 Unauthorized');
                break;
            default:
                print_r("No Autorizado");
                break;
        }
    }

    private function getAllImages()
    {
        $limit = isset($_GET["limit"]) ? $_GET["limit"] : 20;
        $page = isset($_GET["page"]) ? $_GET["page"] : 1;
        if (count($this->slider->getAllImages($limit, $page)) >= 1) {
            print_r(
                json_encode(
                    array(
                        "total_page" => $this->slider->getTotalPages($limit),
                        "data" => $this->slider->getAllImages($limit, $page)
                    )
                )
            );
        }
    }

    private function getSliderById($id)
    {
        if ($this->slider->getSliderById($id)) {
            print_r(
                json_encode(
                    $this->slider->getSliderById($id)
                )
            );
        }
    }

    private function createSlider()
    {
        $route_main =  "/static/media/slider/";
        $filename = $_FILES['files']['name'];
        if ($filename === null || $filename === "") return header('HTTP/1.1 400 Not Created');
        $this->uploadImage($route_main, $filename);
        $response = $this->slider->createSlider(
            $this->parseDataSlider($route_main, $filename)
        );
        if (!$response) return header('HTTP/1.1 400 Not Created');
        return header('HTTP/1.1 200 Created');
    }

    private function updateSlider($id)
    {
        $route_main =  "/static/media/slider/";
        $filename = isset($_FILES['files']['name']) ? $_FILES['files']['name'] : "";

        $input = $this->parseDataSlider($route_main, $filename);
        $input["id"] = $id;
        if ($filename !== "") $this->uploadImage($route_main, $filename);
        $response = $this->slider->updateSlider($input);
        if (!$response) return header('HTTP/1.1 401 Not Updated');
        return header('HTTP/1.1 200 Updated');
    }

    private function parseDataSlider($route_main, $filename)
    {
        $route = $route_main . $filename;
        $input = array();
        if (
            isset($_POST["slider_title"])  &&
            $_POST["slider_title"] !== null &&
            $_POST["slider_title"] !== ""
        ) {
            $input["slider_title"]  = $_POST["slider_title"];
        }
        if (
            isset($_POST["slider_description"]) &&
            $_POST["slider_description"] !== null &&
            $_POST["slider_description"] !== ""
        ) {
            $input["slider_description"]  = $_POST["slider_description"];
        }
        if (
            isset($_POST["is_active"]) &&
            $_POST["is_active"] !== null &&
            $_POST["is_active"] !== ""
        ) {
            $input["is_active"]  = (int) $_POST["is_active"];
        }
        if (
            isset($filename) &&
            $filename !== null &&
            !empty($filename)
        ) {
            $input["slider_image"]  = $route;
        }

        return $input;
    }
}
