<?php

$rag = $_REQUEST['rag'];
$reg = $_REQUEST['reg'];
$agent = $_REQUEST['agent'];

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
    $sql = "INSERT INTO Clienti (ragSoc,regione,CODAgente) VALUES ('$rag','$reg',$agent)";
    $conn->exec($sql);
} catch(PDOException $e) {
    echo $e->getMessage();
}

$conn = null;
