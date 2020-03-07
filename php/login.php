<?php

require 'conn.php';

$email = $_POST['email'];

$senha = $_POST['senha'];


$sql = "SELECT * FROM tabela WHERE email = '$email' AND senha = '$senha'";

$run = mysqli_query($sql, $conn);

$verifica = mysqli_fetch_assoc($run);


if($verifica != null){
    //Importante parar verificação de sessão após
    $_SESSION["email"] = $verifica["email"];
    header("Location: gifs.html");
}else{
    echo"deu merda";
}




?>