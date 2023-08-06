var addressInvalid = false;

function inputsForm() {
    addStatusInputsForm('cep', 'svgCep', 'digite um cep valido');
    addStatusInputsForm('streetAddress', 'svgStreet', 'Rua invalida');
    addStatusInputsForm('numberAddress', 'svgNumber', 'Numero invalido');
    addStatusInputsForm('villageAddress', 'svgNeighborhood', 'Bairro invalido');
    addStatusInputsForm('cityAddress', 'svgCity', 'Cidade invalida');
    addStatusInputsForm('ufAddress', 'svgUf', 'Uf invalida');
};

function valuesForm() {
    var cep = $('#cep').val();
    var street = $('#streetAddress').val();
    var numberAddress = $('#numberAddress').val();
    var village = $('#villageAddress').val();
    var city = $('#cityAddress').val();
    var uf = $('#ufAddress').val();
    
    addressInvalid = validationForm(cep) ||
                     validationForm(street) ||
                     validationForm(numberAddress) ||
                     validationForm(village) ||
                     validationForm(city) ||
                     validationForm(uf);
};

$('#cep, #streetAddress, #numberAddress, #villageAddress, #cityAddress, #ufAddress').on('keyup', function() {
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
        // $('#' + idParent + ' .svgError').hide();
    };
});

$('#formAddress').submit(function(event) {
    if (addressInvalid) {
        event.preventDefault();
        return false;
    };
});

$('#btnSendCEP').click(function(event) {
    valuesForm();

    event.preventDefault();

    if (addressInvalid) {
        inputsForm();
        return false;
    };
});