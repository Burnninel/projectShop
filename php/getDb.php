<?php

    $con = mysqli_connect("localhost", "root", "", "projetoshop");

    if (mysqli_connect_errno()) {
        echo 'Falha na conexão: ' . mysqli_connect_error();
        exit; 
    }

    $sql = "SELECT * FROM usuario";
    $result = mysqli_query($con, $sql);

    if (mysqli_num_rows($result) > 0) {
        $rows = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }
        echo json_encode($rows);
    } else {
        echo "Nenhum resultado encontrado.";
    }

    mysqli_close($con);

?>