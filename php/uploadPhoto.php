<?php 

session_start();

if (!isset($_SESSION["usuario"])) {

    header("Location: login.php");
    exit();

} else {
    echo $_SESSION["usuario"];
}

$idUsuario = $_SESSION["usuario"];

echo "ID do usuário logado: " . $idUsuario;

if(isset($_FILES['arquivo'])) {

    $status = true;

    if($_FILES['arquivo']['size'] > 5000000) {
        echo 'A imagem é muito grande';
        $status = false;
    }

    $extensao = strtolower(pathinfo($_FILES['arquivo']['name'], PATHINFO_EXTENSION));

    if($extensao != 'png' && $extensao != 'jpg' && $extensao != 'gif') {
        echo 'Formato não permitidido';
        $status = false;
    }

    $diretorio = 'uploads/'  . $_FILES['arquivo']['name'];

    move_uploaded_file($_FILES['arquivo']['tmp_name'], $diretorio);

} else {
    echo 'Não foi possivel ler o arquivo';
};

?>


<!-- // header("Location: ../pages/form.html"); -->

<?php 


// if(isset($_FILES['arquivo'])) {

//     $status = true;

//     if($_FILES['arquivo']['size'] > 5000000) {
//         echo 'Aimagem é muito grande';
//         $status = false;
//     }

//     $extensao = strtolower(pathinfo($_FILES['arquivo']['name'], PATHINFO_EXTENSION));

//     if($extensao != 'png' && $extensao != 'jpg' && $extensao != 'gif') {
//         echo 'Formato não permitidido';
//         $status = false;
//     }

//     $diretorio = 'uploads/'  . $_FILES['arquivo']['name'];

//     move_uploaded_file($_FILES['arquivo']['tmp_name'], $diretorio);

      
//     $selectEmailSqlComand = $conn->prepare("SELECT * FROM usuario WHERE email = ?");
//     $selectEmailSqlComand->bind_param("s", $email);
//     $selectEmailSqlComand->execute();
//     $result = $selectEmailSqlComand->get_result();
//     $existingUser = $result->fetch_assoc();

// } else {
//     echo 'Não foi possivel ler o arquivo';
// };



// if(isset($_FILES['arquivo'])) {

//     $status = true;

//     if($_FILES['arquivo']['size'] > 5000000) {
//         echo 'Aimagem é muito grande';
//         $status = false;
//     }

//     $extensao = strtolower(pathinfo($_FILES['arquivo']['name'], PATHINFO_EXTENSION));

//     if($extensao != 'png' && $extensao != 'jpg' && $extensao != 'gif') {
//         echo 'Formato não permitidido';
//         $status = false;
//     }

//     $diretorio = 'uploads/'  . $_FILES['arquivo']['name'];

//     move_uploaded_file($_FILES['arquivo']['tmp_name'], $diretorio);

//     echo "<script>";
//     echo "var valorAtual = localStorage.getItem('chave');";
//     echo "var novoValor = valorAtual + '" . $diretorio . "';";
//     echo "localStorage.setItem('chave', novoValor);";
//     echo "</script>";
    
//     // header('Location: /trab/pages/form.html?diretorio=' . urlencode($diretorio));

// } else {
//     echo 'Não foi possivel ler o arquivo';
// };