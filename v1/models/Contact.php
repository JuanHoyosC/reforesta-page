<?php
require_once 'Model.php';
class Contact extends Model
{
    function __construct()
    {
        parent::__construct();
        $this->table = "reforestalor_contact";
    }

    public function getContacts()
    {
        $query = "SELECT * FROM {$this->table}";
        $stmt = $this->con->prepare($query);
        $stmt->execute();
        $row_object = $stmt->fetchAll(PDO::FETCH_CLASS);
        return $row_object;
    }

    public function getContactById($id)
    {
        $query = "SELECT * FROM {$this->table} WHERE `contact_id` = :id";
        $stmt = $this->con->prepare($query);
        $stmt->bindValue(':id', $id);
        $stmt->execute();
        $row_object = $stmt->fetchObject();
        return $row_object;
    }

    public function insertContact($input)
    {
        $statement = "
            INSERT INTO {$this->table} 
                (contact_type, contact_description, contact_url)
            VALUES
                (:contact_type, :contact_description, :contact_url);
        ";

        try {
            $statement = $this->con->prepare($statement);
            foreach ($input as $Name => $Value) {
                $statement->bindValue(':' . $Name, $Value);
            }
            $statement->execute();
            return true;
        } catch (\PDOException $e) {
            return false;
        }
    }

    public function updateContactById($params)
    {
        $statement = "UPDATE {$this->table} SET contact_description = :contact_description , contact_url = :contact_url WHERE contact_id = :contact_id";
        try {
            $statement = $this->con->prepare($statement);
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

    public function deleteContactById($id)
    {
        try {
            $query = "
                DELETE FROM {$this->table} 
                WHERE contact_id=:id
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
