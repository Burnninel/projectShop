<?php

    session_start();

    if (!isset($_SESSION["usuario"])) {
        exit();
    }

    $idUsuario = $_SESSION["usuario"];

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['idUsuario'])) {
            $idUsuario = $_POST['idUsuario'];
        }
    }

    $conn = new mysqli("localhost", "root", "", "projetoshop");

    $sql = "SELECT name, lastName, imgProfile, dateCreate FROM usuario WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $idUsuario);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $response = array("imgProfile" => $row['imgProfile'], "name" => $row['name'],"lastName" => $row['lastName'], "dateCreate" => $row['dateCreate']);
        echo json_encode($response);
    } else {
        echo json_encode(array());
    }

    $stmt->close();
    $conn->close();

?>