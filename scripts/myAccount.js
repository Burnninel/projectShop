$(document).ready(function() {
    $('#cep').on('input', function() {
        var cep = $(this).val();

        cep = cep.replace(/\D/g, '');

        if (cep.length > 5) {
            cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
        }

        $(this).val(cep);
    });
});

$('#btnSearchCEP').click(function() {
    var cep = $('#cep').val()

    console.log('ola')

    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#streetAddress').val(data.logradouro);
            $('#villageAddress').val(data.bairro);
            $('#cityAddress').val(data.localidade);
            $('#ufAddress').val(data.uf);
            console.log(data)
        },
        error: function (xhr, status, error) {
            console.log(status, xhr, error);
        }
    });
});

$(document).ready(function () {

    function buscarImagemPerfil(idUsuario) {
        $.ajax({
            url: '../php/getInfosUser.php',
            type: 'POST',
            dataType: 'json',
            data: { idUsuario: idUsuario,  data: "DATE_FORMAT(dateCreate, '%d/%m/%Y')"},
            success: function (data) {
                console.log(data.name)
                console.log(data.lastName)
                if (data.name !== '') {
                    $('#myNickname').text(data.name + ' ' + data.lastName);
                }
                $('#textDate').text(formatarData(data.dateCreate));
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

    function formatarData(data) {
        var dataAjustada = new Date(data);
        dataAjustada.setDate(dataAjustada.getDate() + 1);

        var dia = String(dataAjustada.getDate()).padStart(2, '0');
        var mes = String(dataAjustada.getMonth() + 1).padStart(2, '0');
        var ano = dataAjustada.getFullYear();
        return dia + '/' + mes + '/' + ano;
    }

    var idUsuarioLogado = '';

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