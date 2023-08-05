var addressInvalid = false;

function inputsForm() {
    addStatusInputsForm('cep', 'myName');
    addStatusInputsForm('streetAddress', 'myName');
    addStatusInputsForm('numberAddress', 'myName');
    addStatusInputsForm('villageAddress', 'myName');
    addStatusInputsForm('cityAddress', 'myName');
    addStatusInputsForm('ufAddress', 'myName');
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
        $(`#${inputIdSelected}`).removeClass('inputFormStatusError');
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