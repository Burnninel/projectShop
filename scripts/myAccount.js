
$(document).ready(function () {

    function buscarImagemPerfil(idUsuario) {
        $.ajax({
            url: '../php/getImagemPerfil.php',
            type: 'POST',
            dataType: 'json',
            data: { idUsuario: idUsuario },
            success: function (data) {
                console.log(data.name)
                console.log(data.lastName)
                if (data.name !== '') {
                    $('#myNickname').text(data.name + ' ' + data.lastName)
                }
                if (data.imgProfile !== null) {
                    var img = `<img src="../php/${data.imgProfile}" alt="myProfilePic" class="myProfilePic">`;
                    $('#myPhoto').html(img);
                };
            },
            error: function (xhr, status, error) {
                console.log("Ocorreu um erro ao buscar a imagem de perfil." + status + xhr + error);
            }
        });
    };

    var idUsuarioLogado = "";

    $.ajax({
        url: '../php/getDb.php',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            idUsuarioLogado = data.idUsuario;
            buscarImagemPerfil(idUsuarioLogado);
            console.log(idUsuarioLogado);
        },
        error: function (xhr, status, error) {
            if (xhr.responseText) {
                console.log("Erro: " + xhr.responseText);
                console.log("Erro: " + status);
                console.log("Erro: " + error);
            } else {
                console.log("Ocorreu um erro durante a requisição.");
            };
        }
    });
   
    console.log(idUsuarioLogado);

});