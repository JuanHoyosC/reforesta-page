<?php
require_once 'Model.php';
class SocialNetwork extends Model
{
    function __construct()
    {
        parent::__construct();
        $this->table = "reforestalor_socialnetwork";
    }

    public function getAllSocialNetworks()
    {
        $query = "SELECT * FROM {$this->table}";
        $stmt = $this->con->prepare($query);
        $stmt->execute();
        $row_object = $stmt->fetchAll(PDO::FETCH_CLASS);
        return $stmt->rowCount() >= 1 ?  $row_object : false;
    }

    public function getSocialNetworkById($id)
    {
        $query = "SELECT * FROM {$this->table} WHERE network_id = :id";
        $stmt = $this->con->prepare($query);
        $stmt->bindValue(':id', $id);
        $stmt->execute();
        $row_object = $stmt->fetchObject();
        return $stmt->rowCount() >= 1 ?  $row_object : false;
    }

    public function updateSocialNetworkById(int $id, array $input)
    {
        $params = array();

        $params["network_url"] = $input['network_url'];
        $params["is_active"] = $input['is_active'];
        $params["id"] = $id;

        $statement = "UPDATE {$this->table} SET network_url = :network_url , is_active= :is_active";
        $statement .= " WHERE network_id = :id";

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
