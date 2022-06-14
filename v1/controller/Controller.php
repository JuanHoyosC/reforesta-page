<?php
class Controller
{
    public $requestMethod;
    public $id;

    public function __construct($requestMethod, $id = null)
    {
        $this->requestMethod = $requestMethod;
        $this->id = $id;
    }

    public function getAuthorizationHeader()
    {
        $headers = null;
        if (isset($_SERVER['Authorization'])) {
            $headers = trim($_SERVER["Authorization"]);
        } else if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
            $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
        } elseif (function_exists('apache_request_headers')) {
            $requestHeaders = apache_request_headers();
            $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
            if (isset($requestHeaders['Authorization'])) {
                $headers = trim($requestHeaders['Authorization']);
            }
        }
        return $headers;
    }

    public function getBearerToken()
    {
        $headers = $this->getAuthorizationHeader();
        if (!empty($headers)) {
            if (preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
                return $matches[1];
            }
        }
        return null;
    }

    public function uploadImage(string $route, $filename = null)
    {
        if (!file_exists($_SERVER['DOCUMENT_ROOT'] . $route)) {
            mkdir($_SERVER['DOCUMENT_ROOT'] . $route, 0777, true);
        }
        $target_file = $_SERVER['DOCUMENT_ROOT'] . $route . $filename;
        $file_extension = pathinfo($target_file, PATHINFO_EXTENSION);
        $file_extension = strtolower($file_extension);
        if (move_uploaded_file(
            $_FILES['files']['tmp_name'],
            $target_file
        )) {
            return true;
        }
        return false;
    }
}
