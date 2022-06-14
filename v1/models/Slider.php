<?php
require_once 'Model.php';

class Slider extends Model
{
    function __construct()
    {
        parent::__construct();
        $this->table = "reforestalor_slider";
    }

    public function getAllImages($limit = 1, $page = null)
    {
        $query = "SELECT * FROM {$this->table} ORDER BY slider_id DESC ";
        if ($page >= 0) {
            $starting_limit = ($page - 1) * $limit;
            $query .= " LIMIT $starting_limit, $limit ";
        }
        $stmt = $this->con->prepare($query);
        $stmt->execute();
        $row_object = $stmt->fetchAll(PDO::FETCH_CLASS);
        return $stmt->rowCount() >= 1 ?  $row_object : array();
    }

    public function createSlider(array $input)
    {
        $statement = "
            INSERT INTO {$this->table} 
                (slider_title, slider_description, slider_image,is_active)
            VALUES
                (:slider_title, :slider_description, :slider_image, :is_active);
        ";

        try {
            $statement = $this->con->prepare($statement);
            $statement->execute(
                array(
                    'slider_title' => $input['slider_title'],
                    'slider_description'  => $input['slider_description'],
                    'slider_image' => $input['slider_image'],
                    'is_active' => true
                )
            );
            return true;
        } catch (Exception $e) {
            return true;
        }
    }

    public function updateSlider($input)
    {
        $params = array();
        $params["id"] = $input["id"];
        $params["slider_title"] = $input["slider_title"];
        $statement = "UPDATE {$this->table} SET slider_title = :slider_title";
        if (isset($input['slider_description'])) {
            $params["slider_description"] = $input['slider_description'];
            $statement .= ", slider_description= :slider_description";
        }
        if (isset($input['slider_image'])) {
            $params["slider_image"] = $input['slider_image'];
            $statement .= ", slider_image= :slider_image";
        }
        if (isset($input['is_active'])) {
            $params["is_active"] = $input['is_active'];
            $statement .= ", is_active= :is_active";
        }
        $statement .= " WHERE slider_id = :id";

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

    public function getSliderById($id)
    {
        $param = null;
        $query = "SELECT * FROM {$this->table} WHERE `slider_id`=:id";
        $stmt = $this->con->prepare($query);
        $stmt->bindValue(':id', $id);
        $stmt->execute();
        $row_object = $stmt->fetchObject();
        return $row_object;
    }

    public function deleteSlider(int $id)
    {
        try {
            $query = "
                DELETE FROM {$this->table} 
                WHERE slider_id=:id
            ";
            $stmt = $this->con->prepare($query);
            $stmt->bindValue(":id", $id, PDO::PARAM_INT);
            $stmt->execute();
            return true;
        } catch (Exception $err) {
            return false;
        }
    }
}
