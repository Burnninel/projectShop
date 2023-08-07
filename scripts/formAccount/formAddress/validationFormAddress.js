var addressInvalid = false;

function inputsForm() {
    addStatusInputsForm(addressInvalid, 'cep', 'svgCep', 'digite um cep valido');
    addStatusInputsForm(addressInvalid, 'streetAddress', 'svgStreet', 'Rua invalida');
    addStatusInputsForm(addressInvalid, 'numberAddress', 'svgNumber', 'Numero invalido');
    addStatusInputsForm(addressInvalid, 'villageAddress', 'svgNeighborhood', 'Bairro invalido');
    addStatusInputsForm(addressInvalid, 'cityAddress', 'svgCity', 'Cidade invalida');
    addStatusInputsForm(addressInvalid, 'ufAddress', 'svgUf', 'Uf invalida');
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

    console.log(addressInvalid)

    event.preventDefault();

    if (addressInvalid) {
        inputsForm();
        return false;
    };
});