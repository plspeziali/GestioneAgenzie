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
    $filtro = "SELECT * FROM Clienti, Agenti WHERE IDAgente=CODAgente";
    $clienti = $conn->query($filtro);
    $arrcl=array();
    foreach($clienti as $riga){
        $rag=$riga['ragSoc'];
        $reg=$riga['regione'];
        $agente=$riga['nome'];
        array_push($arrcl,$rag);
        array_push($arrcl,$reg);
        array_push($arrcl,$agente);
    }
    foreach($arrcl as $element){
        print("$element;");
    }
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}