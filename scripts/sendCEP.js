$(document).ready(function() {
    $('#btnSendCEP').click(function(event) {
      event.preventDefault();
      $('#bodyCardInfo').submit();
    });
  });