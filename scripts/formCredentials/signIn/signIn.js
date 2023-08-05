$(document).ready(function() {
    var typeFormLS = localStorage.getItem('form')
    
    if (typeFormLS == 'signIn') {
        $('#bodyFirst').css('display', 'flex');
        $('#bodySecond').hide();
    }

});

$(document).on('click', '#signIn', function() {
    var signUp = 'signIn';
    localStorage.setItem('form', signUp);
    
    $('#emailSingIn').removeClass('inputSucess');
    $('#pwSingIn').removeClass('inputSucess');
    $('#bodyFirst').css('display', 'flex');
    $('#bodySecond').hide();
});