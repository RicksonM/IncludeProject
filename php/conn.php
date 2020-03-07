<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$base = "conec";

//Estabelece e verifica a conexão com o banco de dados
$conn = mysqli_connect($servidor, $usuario, $senha, $base);
    if(!$conn){
        echo "deu ruim CONEXÃO COM BRONCA <br>";
    }else{
        echo "funciona CONEXÃO OK <br>";
    } 
 
?>



