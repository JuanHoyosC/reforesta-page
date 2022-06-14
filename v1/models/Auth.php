<?php
require_once 'Model.php';
class Auth extends Model
{
    function __construct()
    {
        parent::__construct();
        $this->table = "reforestalor_users";
    }

    function Login($user, $pass)
    {
        try {
            $query = "SELECT * FROM {$this->table} WHERE `user` = :user";

            $stmt = $this->con->prepare($query);
            $stmt->bindValue(":user", $user, PDO::PARAM_STR);
            $stmt->execute();
            $row_object = $stmt->fetchObject();
            if (password_verify($pass, $row_object->password)) {
                return $stmt->rowCount() == 1 ?  $row_object : false;
            }
            return false;
        } catch (PDOException $err) {
            die($err->getMessage());
        }
    }
}
