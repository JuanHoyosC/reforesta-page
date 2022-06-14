<?php
require_once '../v1/models/Project.php';
require_once '../v1/controller/Controller.php';
class ProjectController extends Controller
{
    public function __construct($requestMethod, $id = null)
    {
        parent::__construct($requestMethod, $id);
        $this->project = new Project();
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                if (isset($_GET["slug"])) {
                    print_r(json_encode($this->project->getProjectByIdOrSlug(null, $_GET["slug"])));
                    return header('HTTP/1.1 200 ');
                }
                if ($this->id != null) {
                    print_r(json_encode($this->project->getProjectByIdOrSlug($this->id, null)));
                    return header('HTTP/1.1 200 ');
                }
                $this->getAllProjects();
                return header('HTTP/1.1 200 Created');
                break;
            case 'POST':
                $token = $this->getBearerToken();
                if ($this->id != null) {
                    $this->project->validate_token($token) ?
                        $this->updateProject($this->id) :
                        header('HTTP/1.1 401 Unauthorized');
                } else {
                    $this->project->validate_token($token) ?
                        $this->createProject() :
                        header('HTTP/1.1 401 Unauthorized');
                }

                break;
            case 'DELETE':
                $token = $this->getBearerToken();
                $this->project->validate_token($token) ?
                    $this->project->deleteProject($this->id) :
                    header('HTTP/1.1 401 Unauthorized');
                break;
            default:
                print_r("No Autorizado");
                break;
        }
    }

    private function getAllProjects()
    {
        $limit = isset($_GET["limit"]) ? $_GET["limit"] : 20;
        $page = isset($_GET["page"]) ? $_GET["page"] : 1;
        if (count($this->project->getAllProjects($limit, $page)) >= 1) {
            print_r(
                json_encode(
                    array(
                        "total_page" => $this->project->getTotalPages($limit),
                        "data" => $this->project->getAllProjects($limit, $page)
                    )
                )
            );
        } else {
            print_r("error");
        }
    }

    private function createProject()
    {
        $route_main =  "/static/media/project/";
        $filename = $_FILES['files']['name'];
        if ($filename === null || $filename === "") return header('HTTP/1.1 400 Not Created');
        $this->uploadImage($route_main, $filename);
        $response = $this->project->createProject(
            $this->parseDataproject($route_main, $filename)
        );
        if (!$response) return header('HTTP/1.1 400 Not Created');
        return header('HTTP/1.1 200 Created');
    }

    private function updateProject($id)
    {
        $route_main =  "/static/media/project/";
        $filename = isset($_FILES['files']['name']) ? $_FILES['files']['name'] : "";
        if ($filename !== "") $this->uploadImage($route_main, $filename);
        $input = $this->parseDataProjectUpdate($route_main, $filename);
        $input["id"] = $id;
        $response = $this->project->updateProject($input);
        if ($response) header('HTTP/1.1 200 Updated');
        else header('HTTP/1.1 401 Not Updated');
    }

    private function parseDataProject($route_main, $filename)
    {
        $route = $route_main . $filename;
        $input = array();
        if (
            isset($_POST["project_title"])  &&
            $_POST["project_title"] !== null &&
            $_POST["project_title"] !== ""
        ) {
            $input["project_title"]  = $_POST["project_title"];
        }
        if (
            isset($_POST["project_body"]) &&
            $_POST["project_body"] !== null &&
            $_POST["project_body"] !== ""
        ) {
            $input["project_body"]  = $_POST["project_body"];
        }
        if (
            isset($_POST["project_slug"]) &&
            $_POST["project_slug"] !== null &&
            $_POST["project_slug"] !== ""
        ) {
            $input["project_slug"]  = $this->project->parseSlug($_POST["project_slug"]);
        }
        if (
            isset($filename) &&
            $filename !== null &&
            !empty($filename)
        ) {
            $input["project_image"]  = $route;
        }

        return $input;
    }

    private function parseDataProjectUpdate($route_main, $filename)
    {
        $route = $route_main . $filename;
        $input = array();
        if (
            isset($_POST["project_title"])  &&
            $_POST["project_title"] !== null &&
            $_POST["project_title"] !== ""
        ) {
            $input["project_title"]  = $_POST["project_title"];
        }
        if (
            isset($_POST["project_body"]) &&
            $_POST["project_body"] !== null &&
            $_POST["project_body"] !== ""
        ) {
            $input["project_body"]  = $_POST["project_body"];
        }
        if (
            isset($_POST["project_slug"]) &&
            $_POST["project_slug"] !== null &&
            $_POST["project_slug"] !== ""
        ) {
            $input["project_slug"]  = $this->project->parseSlugEdit($_POST["project_slug"]);
        }
        if (
            isset($filename) &&
            $filename !== null &&
            !empty($filename)
        ) {
            $input["project_image"]  = $route;
        }

        return $input;
    }
}
