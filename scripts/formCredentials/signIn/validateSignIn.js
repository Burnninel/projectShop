var userInvalid = false;

function validationEmail() {
    var email = $('#emailSingIn').val();
    var password = $('#pwSingIn').val();

    userInvalid = false;

    $.ajax({
        url: '../php/getDb.php',
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function(data) {
            for (db of data) {
                var credentialsValid = false;

                for (db of data) {
                    if (db.email === email && db.password === password) {
                        credentialsValid = true;
                        break; 
                    }
                }

                userInvalid = !credentialsValid;

            };
        },
        error: function(xhr, status, error) {
            if (xhr.responseText) {
                console.log("Erro: " + xhr.responseText);
                console.log("Erro: " + status);
                console.log("Erro: " + error);
            } else {
                console.log("Ocorreu um erro durante a requisição.");
            }
        }
    });

    console.log('useario invalido: ' + userInvalid)

    if(!userInvalid) {
        $('#emailSingIn').removeClass('inputFormStatusError');
        $('#emailSingIn').addClass('inputSucess');

        $('#pwSingIn').removeClass('inputFormStatusError');
        $('#pwSingIn').addClass('inputSucess');

        $(' .svgError').remove();
        ('#emailSingInContent .svgError').remove();
        ('#pwSingInContent .svgError').remove();
        
        $('.templateSignIn').submit();
    } else {
        errorSvg('emailSingInContent');
        $('#emailSingIn').removeClass('inputSucess');
        $('#emailSingIn').addClass('inputFormStatusError');

        errorSvg('pwSingInContent');
        $('#pwSingIn').removeClass('inputSucess');
        $('#pwSingIn').addClass('inputFormStatusError');
    };

};

$('#buttonSubmitForm').click(function(event) {
    validationEmail();

    event.preventDefault();
});