<?php
require_once 'Model.php';

class Project extends Model
{
    function __construct()
    {
        parent::__construct();
        $this->table = "reforestalor_projects";
    }
    public function getAllProjects($limit = 1, $page = null)
    {
        $query = "SELECT * FROM {$this->table} ORDER BY project_id DESC ";
        if ($page >= 0) {
            $starting_limit = ($page - 1) * $limit;
            $query .= " LIMIT $starting_limit, $limit ";
        }
        $stmt = $this->con->prepare($query);
        $stmt->execute();
        $row_object = $stmt->fetchAll(PDO::FETCH_CLASS);
        return $stmt->rowCount() >= 1 ?  $row_object : array();
    }

    public function getProjectByIdOrSlug($id = null, $slug = null)
    {
        $param = null;
        $query = "SELECT * FROM {$this->table} ";
        $whereCondition = "";
        if ($id != null) {
            $whereCondition = " WHERE `project_id`=:param";
            $param = $id;
        } else {
            $whereCondition = " WHERE `project_slug`=:param";
            $param = $slug;
        }
        $query .= $whereCondition;
        $stmt = $this->con->prepare($query);
        $stmt->bindValue(':param', $param);
        $stmt->execute();
        $row_object = $stmt->fetchObject();
        return $row_object;
    }

    public function createProject(array $input)
    {
        $statement = "
            INSERT INTO {$this->table} 
                (project_title	, project_body, project_image, project_slug)
            VALUES
                (:project_title, :project_body, :project_image, :project_slug);
        ";

        try {
            $statement = $this->con->prepare($statement);
            $statement->execute(
                array(
                    'project_title' => $input['project_title'],
                    'project_body'  => $input['project_body'],
                    'project_image' => $input['project_image'],
                    'project_slug' => $input['project_slug']
                )
            );
            return true;
        } catch (\PDOException $e) {
            return false;
        }
    }

    public function updateProject($input)
    {
        $params = array();
        $params["id"] = $input["id"];
        $params["project_title"] = $input["project_title"];
        $statement = "UPDATE {$this->table} SET project_title = :project_title";
        if (isset($input['project_body'])) {
            $params["project_body"] = $input['project_body'];
            $statement .= ", project_body= :project_body";
        }
        if (isset($input['project_image'])) {
            $params["project_image"] = $input['project_image'];
            $statement .= ", project_image= :project_image";
        }
        if (isset($input['project_slug'])) {
            $params["project_slug"] = $input['project_slug'];
            $statement .= ", project_slug= :project_slug";
        }
        $statement .= " WHERE project_id = :id";

        try {
            $statement = $this->con->prepare($statement);
            foreach ($params as $Name => $Value) {
                $statement->bindValue(':' . $Name, $Value);
            }
            $statement->execute();

            return true;
        } catch (Exception $err) {
            return false;
        }
    }

    public function deleteProject(int $id)
    {
        try {
            $query = "
                DELETE FROM {$this->table} 
                WHERE project_id=:id
            ";
            $stmt = $this->con->prepare($query);
            $stmt->bindValue(":id", $id, PDO::PARAM_INT);
            $stmt->execute();
            return true;
        } catch (Exception $err) {
            return false;
        }
    }

    public function parseSlug($slug)
    {
        $query = "SELECT count(*) FROM {$this->table} WHERE project_slug = :slug ";
        $statement = $this->con->prepare($query);
        $statement->bindValue(':slug', $slug, PDO::PARAM_STR);
        $statement->execute();
        $result = $statement->fetchColumn();
        if ($result >= 1) return "" . $slug . "-" . $result;
        else return $slug;
    }

    public function parseSlugEdit($slug)
    {
        $query = "SELECT count(*) FROM {$this->table} WHERE project_slug = :slug ";
        $statement = $this->con->prepare($query);
        $statement->bindValue(':slug', $slug, PDO::PARAM_STR);
        $statement->execute();
        $result = $statement->fetchColumn();
        if ($result >= 2) return "" . $slug . "-" . $result;
        else return $slug;
    }
}
