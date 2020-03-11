<?php
//inicia sessão
session_start();

//Verificar se o usuário está logado

if(!isset($_SESSION["email"])){

    header("Location: ../index.php");
}


?>