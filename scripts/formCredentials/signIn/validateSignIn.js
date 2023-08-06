function sucess(element) {
    $('#emailSingIn').val('');
    $('#pwSingIn').val('');
    $('.svgError').hide();
    $(`${element}`).addClass('inputSucess');
}

function errorCredentials(event, erroMsg, element, style) {
    // event.preventDefault();
   
    var error = `
        <svg xmlns="http://www.w3.org/2000/svg" class="svgError" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${erroMsg}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>  
    `;

    $(`${element}`).append(error);
    $(`${style}`).addClass('inputFormStatusError');
    $(`${style}`).removeClass('inputSucess');

};

$('#buttonSubmitForm').click(function() {
    
    $(document).ready(function() {
        
        $.ajax({
            url: '../php/getDb.php',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                var email = $('#emailSingIn').val();  
                var pw = $('#pwSingIn').val();  
                var errorName = 'Email ou senha invalidos!';

                for (db of data) {

                    if(db.email !== email || db.password !== pw) {
                        errorCredentials(errorName, '#emailSingInContent', '#emailSingIn');
                        errorCredentials(errorName, '#pwSingInContent', '#pwSingIn');
                    } else {
                        sucess('#emailSingIn');
                        sucess('#pwSingIn');
                        window.location.href = 'http://localhost/trab/pages/myAccount.html';
                        
                        break;
                    }
                }
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
