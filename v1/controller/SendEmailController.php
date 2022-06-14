<?php

declare(strict_types=1);
require_once '../v1/controller/Controller.php';
require '../v1/vendor/autoload.php';
require '../v1/utils/config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class SendEmailController extends Controller
{
    public function __construct($requestMethod, $id = null)
    {
        parent::__construct($requestMethod, $id);
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'POST':
                $this->SendEmail();
                break;
            default:
                print_r("No Autorizado");
                break;
        }
    }

    private function SendEmail()
    {
        $input = (array) json_decode(file_get_contents('php://input'), TRUE);
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host       = 'mail.reforestaloreto.org.pe';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'formulariocontacto@reforestaloreto.org.pe';
            $mail->Password   = 'AbmW(Gr4o!VF';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = 465;

            //Recipients
            $mail->setFrom('formulariocontacto@reforestaloreto.org.pe', 'Formulario');
            $mail->addAddress("josedavid_san@hotmail.com");
            $message = "El usuario " . $input["name"] . "con el correo: " . $input["email"] . ", escribio lo siguiente:<br> ";
            $message .= $input["message"];
            //Content
            $mail->isHTML(true);
            $mail->Subject = 'Mensaje desde el formulario';
            $mail->Body    = $message;

            $mail->send();
            return header('HTTP/1.1 202 MESSAGE SENT');
        } catch (Exception $e) {
            return header('HTTP/1.1 404 BAD REQUEST');
        }
    }
}
