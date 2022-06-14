<?php
require_once 'Model.php';

class Partner extends Model
{

    function __construct()
    {
        parent::__construct();
        $this->table = "reforestalor_partners";
    }

    public function insertPartner($route)
    {
        $statement = "
            INSERT INTO {$this->table} 
                (partner_image, is_active)
            VALUES
                (:route, :is_active);
        ";

        try {
            $statement = $this->con->prepare($statement);
            $statement->bindValue(":route", $route, PDO::PARAM_STR);
            $statement->bindValue("is_active", true, PDO::PARAM_BOOL);
            $statement->execute();
            return $statement->rowCount();
        } catch (\PDOException $e) {
            return false;
        }
    }

    public function getAllPartners($limit = 1, $page = null)
    {
        $query = "SELECT * FROM {$this->table} ORDER BY partner_id DESC ";
        if ($page >= 0) {
            $starting_limit = ($page - 1) * $limit;
            $query .= " LIMIT $starting_limit, $limit ";
        }
        $stmt = $this->con->prepare($query);
        $stmt->execute();
        $row_object = $stmt->fetchAll(PDO::FETCH_CLASS);
        return $stmt->rowCount() >= 1 ?  $row_object : array();
    }

    public function getPartnerById(int $id)
    {
        try {
            $query = "SELECT * FROM {$this->table} WHERE `partner_id` = :id";
            $stmt = $this->con->prepare($query);
            $stmt->bindValue(":id", $id, PDO::PARAM_INT);
            $stmt->execute();
            $row_object = $stmt->fetchObject();
            return $stmt->rowCount() >= 1 ?  $row_object : false;
        } catch (PDOException $err) {
            die($err->getMessage());
        }
    }

    public function deletePartner(int $id)
    {
        try {
            $query = "
                DELETE FROM {$this->table} 
                WHERE partner_id=:id
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
