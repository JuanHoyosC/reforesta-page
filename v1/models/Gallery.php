<?php
require_once 'Model.php';

class Gallery extends Model
{

    function __construct()
    {
        parent::__construct();
        $this->table = "reforestalor_gallery";
    }

    public function insertImage($route)
    {
        $statement = "
            INSERT INTO {$this->table} 
                (gallery_image, is_active)
            VALUES
                (:route, :is_active);
        ";

        try {
            $statement = $this->con->prepare($statement);
            $statement->bindValue(":route", $route, PDO::PARAM_STR);
            $statement->bindValue("is_active", true, PDO::PARAM_BOOL);
            $statement->execute();
            return true;
        } catch (\PDOException $e) {
            return false;
        }
    }

    public function getAllImages($limit = 1, $page = null)
    {
        $query = "SELECT * FROM {$this->table} ORDER BY gallery_id DESC ";
        if ($page >= 0) {
            $starting_limit = ($page - 1) * $limit;
            $query .= " LIMIT $starting_limit, $limit ";
        }
        $stmt = $this->con->prepare($query);
        $stmt->execute();
        $row_object = $stmt->fetchAll(PDO::FETCH_CLASS);
        return $stmt->rowCount() >= 1 ?  $row_object : false;
    }

    public function getImageById(int $id)
    {
        try {
            $query = "SELECT * FROM {$this->table} WHERE `gallery_id` = :id";
            $stmt = $this->con->prepare($query);
            $stmt->bindValue(":id", $id, PDO::PARAM_INT);
            $stmt->execute();
            $row_object = $stmt->fetchObject();
            return $stmt->rowCount() >= 1 ?  $row_object : false;
        } catch (PDOException $err) {
            die($err->getMessage());
        }
    }

    public function deleteImage(int $id)
    {
        try {
            $query = "
                DELETE FROM {$this->table} 
                WHERE gallery_id=:id
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
