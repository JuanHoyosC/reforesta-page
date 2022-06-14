<?php
require_once 'Conection.php';

class Model extends Conection
{
    public $table;
    function __construct()
    {
        parent::__construct();
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

    public function getTotalPages($limit)
    {
        $query = "SELECT count(*) FROM {$this->table}";
        $s = $this->con->query($query);
        $total_results = $s->fetchColumn();
        $total_pages = ceil($total_results / $limit);

        return $total_pages;
    }

    public function getTotalItemsByCondition($query)
    {
        $s = $this->con->query($query);
        return $s->fetchColumn();
    }

    public function getTotalItems()
    {
        $query = "SELECT count(*) FROM {$this->table}";
        $s = $this->con->query($query);
        $total_results = $s->fetchColumn();
        return $total_results;
    }
}
