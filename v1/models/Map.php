<?php
require_once 'Model.php';

class Map extends Model
{
    function __construct()
    {
        parent::__construct();
        $this->table = "reforestalor_map";
    }

    public function getMap()
    {
        try {
            $query = "SELECT * FROM {$this->table} WHERE `map_id` = :id";
            $stmt = $this->con->prepare($query);
            $stmt->bindValue(":id", 1, PDO::PARAM_INT);
            $stmt->execute();
            $row_object = $stmt->fetchObject();
            return $stmt->rowCount() >= 1 ?  $row_object : false;
        } catch (PDOException $err) {
            die($err->getMessage());
        }
    }

    public function updateMap($params)
    {
        $statement = "UPDATE {$this->table} SET map_iframe = :map_iframe";
        $statement .= " WHERE map_id = :id";

        try {
            $statement = $this->con->prepare($statement, $params);
            foreach ($params as $Name => $Value) {
                $statement->bindValue(':' . $Name, $Value);
            }
            $statement->execute();

            return true;
        } catch (Exception $err) {
            return false;
        }
    }
}
