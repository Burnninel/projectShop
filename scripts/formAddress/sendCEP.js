$(document).ready(function() {
    $('#btnSendCEP').click(function(event) {
      event.preventDefault();
      $('#formAddress').submit();
    });
  });

function errorCredentials(erroMsg, element, style) {
  var error = `
      <svg xmlns="http://www.w3.org/2000/svg" class="svgError" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${erroMsg}">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>  
  `;

  $(`${element}`).append(error);
  $(`${style}`).addClass('inputFormStatusError');
};

function sucess(element) {
  $('.svgError').hide();
  $(`${element}`).addClass('inputSucess');
};