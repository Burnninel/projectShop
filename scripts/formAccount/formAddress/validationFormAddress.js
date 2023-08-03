var addressInvalid = false;

function validationForm(id) {
    if (!id) {
        return true;
    };

    return false;
};

function addStatusInputsForm(element) {
    var inputError = $('#' + element).val();
    
    if (addressInvalid && validationForm(inputError)) {
        $('#' + element).addClass('inputBodyInfoError');
    } else {
        $('#' + element).removeClass('inputBodyInfoError');
    };
};

function inputsForm() {
    addStatusInputsForm('cep');
    addStatusInputsForm('streetAddress');
    addStatusInputsForm('numberAddress');
    addStatusInputsForm('villageAddress');
    addStatusInputsForm('cityAddress');
    addStatusInputsForm('ufAddress');
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

    if (validationForm($(this).val())) {
        addStatusInputsForm(inputIdSelected);
    } else {
        $(`#${inputIdSelected}`).removeClass('inputBodyInfoError');
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