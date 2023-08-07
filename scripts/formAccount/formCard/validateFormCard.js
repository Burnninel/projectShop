var infosInvalid = false;

function inputsFormCard() {
    addStatusInputsForm(infosInvalid, 'cvvCard', 'cvvElement', 'CVV invalido');
    addStatusInputsForm(infosInvalid, 'nameCard', 'nameElement', 'Nome invalido');
    addStatusInputsForm(infosInvalid, 'numberCard', 'numberElement', 'Número invalido');
    addStatusInputsForm(infosInvalid, 'btnMonth', 'monthElement', 'Mês invalido');
    addStatusInputsForm(infosInvalid, 'btnYear', 'yearElement', 'Ano invalido');
    addStatusInputsForm(infosInvalid, 'cpfCard', 'elementCpf', 'CPF invalido');
    addStatusInputsForm(infosInvalid, 'nickCard', 'elementNick', 'Apelido invalido');
};

function valuesFormCard() {
    var numberCard = $('#numberCard').val();
    var monthCard = $('#btnMonth').val();
    var yearCard = $('#btnYear').val();
    var cvvCard = $('#cvvCard').val();
    var nameCard = $('#nameCard').val();
    var cpfCard = $('#cpfCard').val();
    var nickCard = $('#nickCard').val();

    infosInvalid = validationForm(numberCard) ||
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

$('#btnAddCard').click(function(event) {
    valuesFormCard();

    console.log(infosInvalid)

    event.preventDefault();

    if (infosInvalid) {
        inputsFormCard();
        return false;
    };

    $('#formCard').submit();
});