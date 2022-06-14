<?php
class Conection
{
    private $host = "localhost";
    private $database = "reforestalor";
    private $user = "root";
    private $password = "";
    protected $con = null;

    function __construct()
    {
        try {
            $this->con = new PDO("mysql:host={$this->host};dbname={$this->database}", $this->user, $this->password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $err) {
            die($err->getMessage());
        }
    }

    function validate_token($token)
    {
        try {
            $query = "SELECT * FROM reforestalor_users WHERE token = :token ";

            $stm = $this->con->prepare($query);
            $stm->bindValue(":token", $token, PDO::PARAM_STR);
            $stm->execute();

            return $stm->rowCount() >= 1 ? true : false;
        } catch (PDOException $err) {
            echo $err;
            die($err->getMessage());
        }
    }
}
