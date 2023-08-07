<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conn = new mysqli("localhost", "root", "", "projetoshop");

    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }

    $numberCardRegex = isset($_POST["numberCard"]) ? $_POST["numberCard"] : "";
    $numberCard = str_replace([' '], '', $numberCardRegex);

    $month = isset($_POST["month"]) ? $_POST["month"] : "";
    $year = isset($_POST["year"]) ? $_POST["year"] : "";
    $cvv = isset($_POST["cvv"]) ? $_POST["cvv"] : "";
    
    $name= isset($_POST["nameCard"]) ? $_POST["nameCard"] : "";

    $cpfRegex = isset($_POST["cpf"]) ? $_POST["cpf"] : "";
    $cpf = str_replace(['.', '-'], '', $cpfRegex);
    
    $nick = isset($_POST["nick"]) ? $_POST["nick"] : "";

    echo '<pre>';
    var_dump($numberCard, $month, $year, $cvv, $name, $cpf, $nick);

    $userInvalid = false;
    
    if(!$numberCard || !$month || !$year || !$cvv || !$name || !$cpf) {
        $userInvalid = true;
        return true;
    } else {
        $userInvalid = false;
    }
    
    if(!$userInvalid) {
        $userId = $_SESSION["usuario"];
    
        $sql = "SELECT id FROM usuario WHERE id = '$userId'";
        $userExists = $conn->query($sql)->num_rows > 0;
    
        var_dump($userExists);

        if ($userExists) {
            $sql = "INSERT INTO card (usuario_id, numberCard, monthValidity, yearValidity, cvv, name, cpf, nick) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("isssssss", $userId, $numberCard, $month, $year, $cvv, $name, $cpf, $nick);
            $stmt->execute();
            echo "deu boa!";
        } else {
            echo "Nenhum usuario logado!";
        }
    } else {
        echo 'Dados Invalidos';
    }

} else {
    echo "Método de requisição inválido!";
}

$conn->close();

?>
