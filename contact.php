<?php
$subject = 'New Contact Message - VS Interiors';
$to = 'vsinteriors486@gmail.com';

$name  = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$msg   = isset($_POST['message']) ? trim($_POST['message']) : '';

$message  = "Name : " . $name . "\n";
$message .= "Email : " . $email . "\n";
$message .= "Phone : " . $phone . "\n";
$message .= "Message : " . $msg . "\n";

// Email headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: VS Interiors <vsinteriors486@gmail.com>\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
$headers .= "Return-Path: vsinteriors486@gmail.com\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo 'sent';
} else {
    echo 'failed';
}
?>