<?php

//Fazendo requisição da pagina de conexão com o banco
require 'conn.php';

//Armazenando os dados que o usuário inseriu nos campos do fomrulário
$nome = $_POST['nome'];

$nascimento = $_POST['datanas'];

$senha = $_POST['senha'];

$email = $_POST['email'];

//Inserindo na tabela se estiver tudo certo.
$sql = "INSERT INTO tabela (nome, email, senha, datanas) VALUES ('$nome', '$nascimento', '$senha', '$email')";

if(mysqli_query($sql, $conn)){
    echo "Funciona";
}else{
    echo "Deu merda";
}


?>