<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $conn = new mysqli("localhost", "root", "", "projetoshop");
    
    if ($conn->connect_error) {
        die("Falha na conexão com o banco de dados: " . $conn->connect_error);
    }
    
    $email = $_POST["email"];
    $password = $_POST["password"];

    echo '<pre>';
    var_dump($email, $password);
    
    $sql = "SELECT * FROM usuario WHERE email = ? AND password = ?";

    $selectEmailSqlComand = $conn->prepare($sql);
    $selectEmailSqlComand->bind_param("ss", $email, $password);
    $selectEmailSqlComand->execute();
    $result = $selectEmailSqlComand->get_result();
    $existingUser = $result->fetch_assoc();

    var_dump($existingUser);

    if ($result->num_rows >= 0) {
        $row = $existingUser;
        
        $storedPassword = $row["password"];
        var_dump($storedPassword);
        var_dump($password);

        if ($password === $storedPassword) {
            $_SESSION["usuario"] = $row["id"];
            var_dump($_SESSION["usuario"]);

            if (!isset($_SESSION["usuario"])) {
                header("Location: login.php");
                exit();
            }            

            header("Location: ../pages/myAccount.html");

            echo 'deu certo';
            exit();
        } else {
            echo "Senha incorreta.";
        }
    } else {
        echo "Usuário não encontrado.";
    }
    
    $conn->close();
}
?>