<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
    $rating = htmlspecialchars($_POST["rating"]);

    $to = "drouws123@gmail.com";  // Jouw e-mailadres
    $subject = "Nieuwe Feedback van $name";
    $body = "
    Naam: $name\n
    E-mail: $email\n
    Beoordeling: $rating\n
    Bericht:\n$message
    ";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Bedankt voor uw feedback, $name!";
    } else {
        echo "Er is een fout opgetreden. Probeer het later opnieuw.";
    }
}
?>
