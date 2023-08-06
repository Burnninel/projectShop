var addressInvalid = false;

function inputsFormCard() {
    addStatusInputsForm('cvvCard', 'cvvElement', 'CVV invalido');
    addStatusInputsForm('nameCard', 'nameElement', 'Nome invalido');
    addStatusInputsForm('numberCard', 'numberElement', 'Número invalido');
    addStatusInputsForm('btnMonth', 'monthElement', 'Mês invalido');
    addStatusInputsForm('btnYear', 'yearElement', 'Ano invalido');
    addStatusInputsForm('cpfCard', 'elementCpf', 'CPF invalido');
    addStatusInputsForm('nickCard', 'elementNick', 'Apelido invalido');
};

function addStatusInputsForm(input, element, tooltip) {
    var inputError = $('#' + input).val();
    
    if (addressInvalid && validationForm(inputError)) {
        $('#' + input).addClass('inputFormStatusError');
        errorSvg(element, tooltip);
    } else {
        $('#' + input).removeClass('inputFormStatusError');
        $('#' + input).addClass('inputSucess');
        $('#' + element + ' .svgError').remove();
    };
};

function valuesFormCard() {
    var numberCard = $('#numberCard').val();
    var monthCard = $('#btnMonth').val();
    var yearCard = $('#btnYear').val();
    var cvvCard = $('#cvvCard').val();
    var nameCard = $('#nameCard').val();
    var cpfCard = $('#cpfCard').val();
    var nickCard = $('#nickCard').val();
    
    addressInvalid = validationForm(numberCard) ||
                     validationForm(monthCard) ||
                     validationForm(yearCard) ||
                     validationForm(cvvCard) ||
                     validationForm(nameCard) ||                    
                     validationForm(cpfCard) ||
                     validationForm(nickCard); 
};

$('#numberCard, #btnMonth, #btnYear, #cvvCard, #nameCard, #cpfCard, #nickCard').on('keyup', function() {
    var inputIdSelected = $(this).attr('id');
    var idParent = $(this).parent().attr('id');

    if ($(this).val().trim() !== '') {
        $('#' + idParent + ' .svgError').hide();
    } else {
        $('#' + idParent + ' .svgError').show();
    }

    if (validationForm($(this).val())) {
        addStatusInputsForm(inputIdSelected, idParent, 'digite um cep valido');
    } else {
        $(`#${inputIdSelected}`).removeClass('inputFormStatusError');
    };
});

$('#formCard').submit(function(event) {
    if (addressInvalid) {
        event.preventDefault();
        return false;
    };
});

$('#btnAddCard').click(function(event) {
    valuesFormCard();

    event.preventDefault();

    if (addressInvalid) {
        inputsFormCard();
        return false;
    };
});

document.getElementById('formCard').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submit event triggered');
    // Aqui você pode adicionar um breakpoint e verificar se este trecho de código é alcançado.
  });