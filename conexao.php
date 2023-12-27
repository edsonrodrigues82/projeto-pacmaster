<?php
    // Estabelece a conexão com o banco de dados
    $servername = "localhost";
    $username = "u174336443_asspacmaster";
    $password = "Pacmaster2023";
    $dbname = "u174336443_Cadastro";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Recupera os dados dos campos do formulário
    $nome = $_POST['nome'];
    $data_nascimento = $_POST['data_nascimento'];
    $cpf = $_POST['cpf'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $foto = $_POST['foto'];
    $endereco = $_POST['endereco'];
    $numero = $_POST['numero'];
    $bairro = $_POST['bairro'];
    $cidade = $_POST['cidade'];
    $estado = $_POST['estado'];
    $cep = $_POST['cep'];
    $data_cadastro = $_POST['data_cadastro'];
    $plano = $_POST['plano'];
    $valor_plano = $_POST['valor_plano'];
    $religiao = $_POST['religiao'];

    // Insere os dados no banco de dados
    $sql = "INSERT INTO associados (nome, data_nascimento, cpf, telefone, email, foto, endereco, numero, bairro, cidade, estado, cep, data_cadastro, plano, valor_plano, religiao) VALUES ('$nome', '$data_nascimento', '$cpf', '$telefone', '$email', '$foto', '$endereco', '$numero', '$bairro', '$cidade', '$estado', '$cep', '$data_cadastro', '$plano', '$valor_plano', '$religiao')";

    if ($conn->query($sql) === TRUE) {
        echo "Novo registro criado com sucesso";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    // Fecha a conexão com o banco de dados
    $conn->close();
?>
