<?php

// nome di host
$host = "localhost";
// nome del database
$db = "Agenzia";
// username dell'utente in connessione
$user = "root";
// password dell'utente
$password = "root";

try{
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $filtro = "SELECT * FROM Agenti";
    $agenti = $conn->query($filtro);
    $arrag=array();
    foreach($agenti as $riga){
        $id=$riga['IDAgente'];
        $name=$riga['nome'];
        array_push($arrag,$id);
        array_push($arrag,$name);
    }
    foreach($arrag as $element){
        print("$element;");
    }
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}