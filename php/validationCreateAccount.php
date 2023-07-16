<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $conn = new mysqli("localhost", "root", "", "projetoshop");

        if ($conn->connect_error) {
            die("Falha na conexão: " . $conn->connect_error);
        }

        $name = isset($_POST["name"]) ? $_POST["name"] : "";
        $lastName = isset($_POST["lastName"]) ? $_POST["lastName"] : "";
        $email = isset($_POST["email"]) ? $_POST["email"] : "";
        $password = isset($_POST["password"]) ? $_POST["password"] : "";
        $dataRegistro = (new DateTime())->format('Y-m-d');
        echo $dataRegistro;

        $userInvalid = true;

        if(!$name || !$lastName || !$email || !$password) {
            $userInvalid = true;
        } else {
            $userInvalid = false;
        }

        echo '<pre>';
        // var_dump($name, $lastName, $email, $password, $dataRegistro);
        // var_dump($userInvalid);

        $selectEmailSqlComand = $conn->prepare("SELECT * FROM usuario WHERE email = ?");
        $selectEmailSqlComand->bind_param("s", $email);
        $selectEmailSqlComand->execute();
        $result = $selectEmailSqlComand->get_result();
        $existingUser = $result->fetch_assoc();
        
        var_dump('existingUser', $result);

        if ($existingUser) {
            $userInvalid = true;
        }
        
        if(!$userInvalid) {
            $stmt = $conn->prepare("INSERT INTO usuario (name, lastname, email, password, dateCreate) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_param("sssss", $name, $lastName, $email, $password, $dataRegistro);

            if ($stmt->execute() === TRUE) {
                echo "Dados enviados com sucesso.";
                header("Location: ../pages/form.html"); 

            } else {
                echo "Erro ao enviar os dados: " . $conn->error;
            }
            
        } else {
            echo 'Usuario invalido!';
        }

        $conn->close();

    }
    
?>


<?php

    // if ($_SERVER["REQUEST_METHOD"] == "POST") {

    //     $conn = new mysqli("localhost", "root", "", "projetoshop");

    //     if ($conn->connect_error) {
    //         die("Falha na conexão: " . $conn->connect_error);
    //     }

    //     $name = isset($_POST["name"]) ? $_POST["name"] : "";
    //     $lastName = isset($_POST["lastName"]) ? $_POST["lastName"] : "";
    //     $email = isset($_POST["email"]) ? $_POST["email"] : "";
    //     $password = isset($_POST["password"]) ? $_POST["password"] : "";
    //     $dataRegistro = (new DateTime())->format('Y-m-d');
    //     echo $dataRegistro;

    //     $userInvalid = true;

    //     if(!$name || !$lastName || !$email || !$password) {
    //         $userInvalid = true;
    //     } else {
    //         $userInvalid = false;
    //     }

    //     echo '<pre>';
    //     // var_dump($name, $lastName, $email, $password, $dataRegistro);

    //     var_dump($userInvalid);
        
    //     if(!$userInvalid) {
    //         $selectEmailSqlComand = $conn->prepare("SELECT * FROM usuario WHERE email = ?");
    //         $selectEmailSqlComand->bind_param("s", $email);
    //         $selectEmailSqlComand->execute();
    //         $result = $selectEmailSqlComand->get_result();
    //         $existingUser = $result->fetch_assoc();
            
    //         var_dump($existingUser);

    //         if ($existingUser) {
    //             echo "O email já está cadastrado.";
    //         } else {
    //             echo "O email caiu.";
    //             $stmt = $conn->prepare("INSERT INTO usuario (name, lastname, email, password, dateCreate) VALUES (?, ?, ?, ?, ?)");
    //             $stmt->bind_param("sssss", $name, $lastName, $email, $password, $dataRegistro);

    //             if ($stmt->execute() === TRUE) {
    //                 echo "Dados enviados com sucesso.";
    //                 header("Location: ../pages/form.html"); 

    //             } else {
    //                 echo "Erro ao enviar os dados: " . $conn->error;
    //             }
    //         }

    //     } else {
    //         echo 'Usuario invalido!';
    //     }

    //     $conn->close();

    // }
    
?>