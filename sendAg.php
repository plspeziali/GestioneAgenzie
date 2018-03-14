<?php

$name = $_REQUEST['name'];

// nome di host
$host = "localhost";
// nome del database
$db = "Agenzia";
// username dell'utente in connessione
$user = "root";
// password dell'utente
$password = "root";

try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO Agenti (nome) VALUES ('$name')";
    $conn->exec($sql);
} catch(PDOException $e) {
    echo $e->getMessage();
}

$conn = null;