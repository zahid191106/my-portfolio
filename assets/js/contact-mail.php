<?php
// Simple PHP mail handler for contact form
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'dev.muhammad.zahid@gmail.com';
    $subject = 'New Contact Form Submission';
    $first_name = htmlspecialchars($_POST['f_name'] ?? '');
    $last_name = htmlspecialchars($_POST['l_name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $budget = htmlspecialchars($_POST['budget-range'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    $body = "Name: $first_name $last_name\n";
    $body .= "Email: $email\n";
    $body .= "Budget: $budget\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
    exit;
}
?>