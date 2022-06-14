<?php
require_once  '../v1/models/Project.php';
require_once  '../v1/models/Gallery.php';
require_once  '../v1/models/Slider.php';
require_once '../v1/controller/Controller.php';
require_once '../v1/models/Partner.php';
class DashboardController extends Controller
{
    public function __construct($requestMethod, $id = null)
    {
        parent::__construct($requestMethod, $id);
        $this->project = new Project();
        $this->gallery = new Gallery();
        $this->slider = new Slider();
        $this->partner = new Partner();
    }


    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                $this->dahsboardData();
                break;
            default:
                print_r("No Autorizado");
                break;
        }
    }

    private function dahsboardData()
    {
        print_r(json_encode(
            array(
                "projects" => $this->project->getTotalItems(),
                "gallery" => $this->gallery->getTotalItems(),
                "sliders" => $this->slider->getTotalItems(),
                "partners" => $this->partner->getTotalItems()
            )
        ));
    }
}
