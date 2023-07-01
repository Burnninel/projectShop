$(document).ready(function() {
    
    var typeFormLS = localStorage.getItem('form');
    
    if (typeFormLS == 'signUp') {
        $('#bodySecond').css('display', 'flex');
        $('#bodyFirst').hide();
    };

});

function errorCredentials(erroMsg, element, style) {
   
    var error = `
        <svg xmlns="http://www.w3.org/2000/svg" class="svgError" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${erroMsg}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>  
    `;

    $(`${element}`).append(error);
    $(`${style}`).addClass('inputSignUpError');
};

function sucess(element) {
    $('.svgError').hide();
    $(`${element}`).addClass('inputSucess');
}

$('#createNewAccount').click(function(event) {
    event.preventDefault();
    $(document).ready(function() {
        $.ajax({
            url: '../php/getDb.php',
            type: 'post',
            dataType: 'json',
            success: function(data) {
                verifyCredentials(data);
            },
            error: function(xhr, status, error) {
                if (xhr.responseText) {
                    console.log("Erro: " + xhr.responseText);
                    console.log("Erro: " + status);
                    console.log("Erro: " + error);
                } else {
                    console.log("Ocorreu um erro durante a requisição.");
                };
            }
        });
        
    });

});

function verifyCredentials(data) {
    var name = $('#name').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var password = $('#password').val(); 
    var emailRegex = /^\S+@\S+\.\S+$/;

    var errorName = 'Preencha um nome valido';
    var errorLastName = 'Preencha um sobrenome valido';
    var errorEmail = 'Email já existe';
    var errorPassword = 'Preencha uma senha valida';


    let invalidUser = false;

    if (!name) {
        errorCredentials(errorName, '#myName', '#name');
        invalidUser = true;
    } else {
        sucess('#name')
    };

    if (!lastName) {
        errorCredentials(errorLastName, '#myLastName', '#lastName');
        invalidUser = true;
    } else {
        sucess('#lastName');
    };

    if (!password) {
        errorCredentials(errorPassword, '#myPassword', '#password');
        invalidUser = true;
    } else {
        sucess('#password');
    };                                                                 

    for (db of data) {
        if(db.email !== email) {
            invalidUser = false;
        } else {
            invalidUser = true;
            errorCredentials(errorEmail, '#myEmail', '#email');
        };
    } 

    if (!email || !email.match(emailRegex)) {
        errorCredentials(errorEmail, '#myEmail', '#email');
        invalidUser = true;
    };

    if (invalidUser == false) {
        var signIn = 'signIn';
        localStorage.setItem('form', signIn);
        sucess('#email');
        $('form').submit();
        $('#bodySecond').hide();
    };

    console.log(invalidUser);
};

$(document).on('click', '#signUp', function() {
    $('#bodyFirst').hide();
    $('#bodySecond').css('display', 'flex');

    var signUp = 'signUp';

    localStorage.setItem('form', signUp);
});

// $(document).ready(function() {
//     var typeFormLS = localStorage.getItem('form');
    
//     if (typeFormLS == 'signUp') {
//         $('#bodySecond').css('display', 'flex');
//         $('#bodyFirst').hide();
//     };

// });

// function errorCredentials(erroMsg, element, style) {
   
//     var error = `
//         <svg xmlns="http://www.w3.org/2000/svg" class="svgError" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${erroMsg}">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
//         </svg>  
//     `;

//     $(`${element}`).append(error);
//     $(`${style}`).addClass('inputSignUpError');
// };

// function sucess(element) {
//     $('.svgError').hide();
//     $(`${element}`).addClass('inputSucess');
// }

// $('#createNewAccount').click(function() {

//     var name = $('#name').val();
//     var lastName = $('#lastName').val();
//     var email = $('#email').val();
//     var password = $('#password').val();
    
//     var errorName = 'Preencha um nome valido';
//     var errorLastName = 'Preencha um sobrenome valido';
//     var errorEmail = 'Email já existe';
//     var errorPassword = 'Preencha uma senha valida';

//     let invalidUser = false;

//     var allAccount = [];
    
//     var dataAtual = new Date();

//     var dia = dataAtual.getDate().toString().padStart(2, '0');
//     var mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0'); 
//     var ano = dataAtual.getFullYear().toString();
//     var dataRegistro = dia + '/' + mes + '/' + ano;

//     var newAccount = {
//         nome: name,
//         sobrenome: lastName,
//         email: email,
//         senha: password, 
//         dataCriacao: dataRegistro
//     };

//     if (localStorage.account) {
//         allAccount = JSON.parse(localStorage.account);
//     };

//     if (!name) {
//         errorCredentials(errorName, '#myName', '#name');
//         invalidUser = true;
//     } else {
//         sucess('#name')
//     };

//     if (!lastName) {
//         errorCredentials(errorLastName, '#myLastName', '#lastName');
//         invalidUser = true;
//     } else {
//         sucess('#lastName');
//     };

   
//     if (!password) {
//         errorCredentials(errorPassword, '#myPassword', '#password');
//         invalidUser = true;
//     } else {
//         sucess('#password');
//     };

    // Decidi por colocar esse trexo do codigo aqui pq se por acaso o email ja existir e os outros input estiverem success() o svg de erro do email não some com o hide() da funcão sucess().
    // for (let item of allAccount) {
    //     if (item.email === email) {
    //         invalidUser = true; 
    //         errorCredentials(errorEmail, '#myEmail', '#email');
    //     };
    // };

    // if (!email) {
    //     errorCredentials(errorEmail, '#myEmail', '#email');
    //     invalidUser = true;
    // };

    // if (invalidUser == false) {
        // allAccount.push(newAccount);
        // localStorage.setItem('account', JSON.stringify(allAccount));
        // sucess('#email');
        // $('#name').val('');
        // $('#lastName').val('');
        // $('#email').val('');
        // $('#password').val('');
        // $('#bodyFirst').css('display', 'flex');
        // $('#bodySecond').hide();
        // window.location.href = '../pages/home.html';
    // };
    
// });