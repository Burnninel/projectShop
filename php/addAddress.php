<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conn = new mysqli("localhost", "root", "", "projetoshop");

    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }

    $cep = isset($_POST["cep"]) ? $_POST["cep"] : "";
    $street = isset($_POST["street"]) ? $_POST["street"] : "";
    $number = isset($_POST["number"]) ? $_POST["number"] : "";
    $neighborhood = isset($_POST["neighborhood"]) ? $_POST["neighborhood"] : "";
    $city = isset($_POST["city"]) ? $_POST["city"] : "";
    $uf = isset($_POST["uf"]) ? $_POST["uf"] : "";

    echo '<pre>';
    var_dump($cep, $street, $number, $neighborhood, $uf, $city);

    $userInvalid = false;

    if(!$cep || !$street || !$number || !$neighborhood || !$city || !$uf) {
        $userInvalid = true;
    } else {
        $userInvalid = false;
    }

    if($userInvalid = false) {
        $userId = $_SESSION["usuario"];
    
        $sql = "SELECT id FROM usuario WHERE id = '$userId'";
        $userExists = $conn->query($sql)->num_rows > 0;
    
        if ($userExists) {
            $sql = "INSERT INTO address (usuario_id, cep, street, number, neighborhood, city, uf) VALUES (?, ?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ississs", $userId, $cep, $street, $number, $neighborhood, $city, $uf);
            $stmt->execute();
        } else {
            echo "Usuário inválido!";
        }
    } else {
        echo 'Dados invalidos!';
    }

} else {
    echo "Método de requisição inválido!";
}

$conn->close();

?>
