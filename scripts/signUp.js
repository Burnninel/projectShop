$(document).ready(function() {
    var typeFormLS = localStorage.getItem('form');
    
    if (typeFormLS == 'signUp') {
        $('#bodySecond').css('display', 'flex');
        $('#bodyFirst').hide();
    };
});

var addressInvalid = false;

function validationForm(id) {
    if (!id) {
        return true;
    };

    return false;
};

function errorSvg(element) {
    var error = `
        <svg xmlns="http://www.w3.org/2000/svg" class="svgError w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-bs-toggle="tooltip" data-bs-placement="top">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>  
    `;

    $('#' + element).append(error);
};

function addStatusInputsForm(input, element) {
    var inputError = $('#' + input).val();
    
    if (addressInvalid && validationForm(inputError)) {
        $('#' + input).addClass('inputFormStatusError');
        errorSvg(element);
    } else {
        $('#' + input).removeClass('inputFormStatusError');
        $('#' + input).addClass('inputSucess');
        $('#' + element + ' .svgError').remove();
    };
};

function inputsForm() {
    addStatusInputsForm('name', 'myName');
    addStatusInputsForm('lastName', 'myLastName');
    addStatusInputsForm('password', 'myPassword');
};

function valuesForm() {
    var name = $('#name').val();
    var lastName = $('#lastName').val();
    var password = $('#password').val();

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
                console.log('input: ' + email)
                console.log(db.email)

                if (db.email === email) {
                    emailInvalid = true;
                    return;
                }

                if(!email.match(emailRegex)) {
                    emailInvalid = true;
                    return;
                }
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
        errorSvg('myEmail');
        $('#email').removeClass('inputSucess');
        $('#email').addClass('inputFormStatusError');
    };

    console.log(emailInvalid);
};

console.log(addressInvalid);
console.log(emailInvalid);

$('.templateSignUp').submit(function(event) {
    if (addressInvalid || emailInvalid) {
        event.preventDefault();
        return false;
    };
});

$('#createNewAccount').click(function(event) {
    valuesForm();
    validationEmail()

    event.preventDefault();

    if (addressInvalid || emailInvalid) {
        inputsForm();
        return false;
    } else {
        inputsForm();
        return true; 
    }
});

$(document).on('click', '#signUp', function() {
    $('#bodyFirst').hide();
    $('#bodySecond').css('display', 'flex');

    var signUp = 'signUp';

    localStorage.setItem('form', signUp);
});


// function validationEmail() {
//     var email = $('#email').val();
//     var emailRegex = /^\S+@\S+\.\S+$/;

//     $.ajax({
//         url: '../php/getDb.php',
//         type: 'post',
//         dataType: 'json',
//         success: function(data) {
//             for (db of data) {
//                 if(db.email !== email) {
//                     $('#email').addClass('inputFormStatusError');
//                 } else {
//                     $('#email').removeClass('inputFormStatusError');
//                 }
//             };
//         },
//         error: function(xhr, status, error) {
//             if (xhr.responseText) {
//                 console.log("Erro: " + xhr.responseText);
//                 console.log("Erro: " + status);
//                 console.log("Erro: " + error);
//             } else {
//                 console.log("Ocorreu um erro durante a requisição.");
//             };
//         }
//     });

//     if (!email || !email.match(emailRegex)) {
//         $('#email').addClass('inputFormStatusError');
//     }else {
//         $('#email').removeClass('inputFormStatusError');
//     };
// };


// function errorCredentials(erroMsg, element, style) {
//     var error = `
//         <svg xmlns="http://www.w3.org/2000/svg" class="svgError" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${erroMsg}">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
//         </svg>  
//     `;

//     $(`${element}`).append(error);
//     $(`${style}`).addClass('inputFormStatusError');
// };

// function sucess(element) {
//     $('.svgError').hide();
//     $(`${element}`).addClass('inputSucess');
// };

// function verifyCredentials(data) {
//     var name = $('#name').val();
//     var lastName = $('#lastName').val();
//     var email = $('#email').val();
//     var password = $('#password').val(); 
//     var emailRegex = /^\S+@\S+\.\S+$/;

//     var errorName = 'Preencha um nome valido';
//     var errorLastName = 'Preencha um sobrenome valido';
//     var errorEmail = 'Email já existe';
//     var errorPassword = 'Preencha uma senha valida';


//     let invalidUser = false;

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

//     for (db of data) {
//         if(db.email !== email) {
//             invalidUser = false;
//         } else {
//             invalidUser = true;
//             errorCredentials(errorEmail, '#myEmail', '#email');
//         };
//     } 

//     if (!email || !email.match(emailRegex)) {
//         errorCredentials(errorEmail, '#myEmail', '#email');
//         console.log('sdfjk')
//         invalidUser = true;
//     };

//     if (invalidUser == false) {
//         var signIn = 'signIn';
//         localStorage.setItem('form', signIn);
//         sucess('#email');
//         $('form').submit();
//         $('#bodySecond').hide();
//     };

//     console.log(invalidUser);
// };


// $('#createNewAccount').click(function(event) {
    
//     event.preventDefault();
    
//     $(document).ready(function() {
//         $.ajax({
//             url: '../php/getDb.php',
//             type: 'post',
//             dataType: 'json',
//             success: function(data) {
//                 verifyCredentials(data);
//             },
//             error: function(xhr, status, error) {
//                 if (xhr.responseText) {
//                     console.log("Erro: " + xhr.responseText);
//                     console.log("Erro: " + status);
//                     console.log("Erro: " + error);
//                 } else {
//                     console.log("Ocorreu um erro durante a requisição.");
//                 };
//             }
//         });
        
//     });

// });
