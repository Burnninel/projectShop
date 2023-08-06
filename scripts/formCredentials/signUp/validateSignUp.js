var addressInvalid = false;

function inputsForm() {
    addStatusInputsForm('name', 'myName', 'Digite um nome valido');
    addStatusInputsForm('lastName', 'myLastName', 'Digite um sobrenome valido');
    addStatusInputsForm('password', 'myPassword', 'Digite uma senha valida');
};

function valuesForm() {
    var name = $('#name').val();
    var lastName = $('#lastName').val();
    var password = $('#password').val();

    console.log(name)

    addressInvalid = validationForm(name) ||
                     validationForm(lastName) ||
                     validationForm(password);


};

var emailInvalid = false;

function validationEmail() {
    var email = $('#email').val();
    var emailRegex = /^\S+@\S+\.\S+$/;

    emailInvalid = false;

    $.ajax({
        url: '../php/getDb.php',
        type: 'post',
        dataType: 'json',
        async: false,
        success: function(data) {
            for (db of data) {
                if (db.email === email) {
                    emailInvalid = true;
                    return;
                };

                if(!email.match(emailRegex)) {
                    emailInvalid = true;
                    return;
                };
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
    
    if(!emailInvalid) {
        $('#email').removeClass('inputFormStatusError');
        $('#email').addClass('inputSucess');
        $(' .svgError').remove();
        ('#myEmail .svgError').remove();
        $('.templateSignUp').submit();
    } else {
        errorSvg('myEmail', 'Email invalido');
        $('#email').removeClass('inputSucess');
        $('#email').addClass('inputFormStatusError');
    };
};

$('.templateSignUp').submit(function(event) {
    if (addressInvalid || emailInvalid) {
        event.preventDefault();
        return false;
    };
});

$('#createNewAccount').click(function(event) {
    valuesForm();
    validationEmail();

    event.preventDefault();

    if (addressInvalid || emailInvalid) {
        inputsForm();
        return false;
    } else {
        inputsForm();
        return true; 
    };
});