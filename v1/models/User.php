<?php
require_once 'Model.php';

class User extends Model
{

    function __construct()
    {
        parent::__construct();
        $this->table = "reforestalor_users";
    }

    public function createUser(array $input)
    {
        $statement = "
            INSERT INTO {$this->table} 
                (user, password, token)
            VALUES
                (:user, :password, :token);
        ";

        try {
            $statement = $this->con->prepare($statement);
            $statement->execute(array(
                'user' => $input['user'],
                'password'  => password_hash($input['password'], PASSWORD_DEFAULT),
                'token' => base64_encode($input['user'] . $input['password'])
            ));
            return $statement->rowCount();
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function getAllUser($limit = 2, $page = null)
    {

        $query = "SELECT * FROM {$this->table} ORDER BY user_id DESC ";
        if ($page >= 0) {
            $starting_limit = ($page - 1) * $limit;
            $query .= " LIMIT $starting_limit, $limit ";
        }
        $stmt = $this->con->prepare($query);
        $stmt->execute();
        $row_object = $stmt->fetchAll(PDO::FETCH_CLASS);
        return $stmt->rowCount() >= 1 ?  $row_object : false;
    }

    public function getUserById(int $id)
    {
        try {
            $query = "SELECT * FROM {$this->table} WHERE `user_id` = :id";
            $stmt = $this->con->prepare($query);
            $stmt->bindValue(":id", $id, PDO::PARAM_INT);
            $stmt->execute();
            $row_object = $stmt->fetchObject();
            return $stmt->rowCount() >= 1 ?  $row_object : false;
        } catch (PDOException $err) {
            die($err->getMessage());
        }
    }

    public function updateUser(int $id, array $input)
    {
        $params = array();

        $params["user"] = $input['user'];
        $params["id"] = $id;

        $statement = "UPDATE {$this->table} SET user = :user";
        if (isset($input['password'])) {
            $params["password"] = password_hash($input['password'], PASSWORD_DEFAULT);
            $params["token"] = base64_encode($input['user'] . $input['password']);
            $statement .= ", password= :password , token=:token";
        }
        $statement .= " WHERE user_id = :id";

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

    public function deleteUser(int $id)
    {
        try {
            $query = "
                DELETE FROM {$this->table} 
                WHERE user_id=:id
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
