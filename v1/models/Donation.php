<?php
require_once 'Model.php';
class Donation extends Model
{
    function __construct()
    {
        parent::__construct();
        $this->table = "reforestalor_donation";
    }

    public function getDonations()
    {
        $query = "SELECT * FROM {$this->table} WHERE donation_id = :id";
        $stmt = $this->con->prepare($query);
        $stmt->bindValue(':id', 1);
        $stmt->execute();
        $row_object = $stmt->fetchObject();
        return $row_object;
    }

    public function updateDonation(int $id, array $input)
    {
        $params = array();

        $params["donation_description"] = $input['donation_description'];
        $params["id"] = $id;

        $statement = "UPDATE {$this->table} SET donation_description = :donation_description";
        $statement .= " WHERE donation_id = :id";

        try {
            $statement = $this->con->prepare($statement, $params);
            foreach ($params as $Name => $Value) {
                $statement->bindValue(':' . $Name, $Value);
            }
            $statement->execute();

            return true;
        } catch (Exception $err) {
            print_r($err);
            return false;
        }
    }
}
