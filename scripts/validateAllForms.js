function validationForm(id) {
    if (!id) {
        return true;
    };

    return false;
};

function errorSvg(element) {
    var error = `
        <svg xmlns="http://www.w3.org/2000/svg" class="svgError w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-bs-toggle="tooltip" data-bs-placement="top">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>  
    `;

    $('#' + element).append(error);
};


function addStatusInputsForm(input, element) {
    var inputError = $('#' + input).val();
    
    if (addressInvalid && validationForm(inputError)) {
        $('#' + input).addClass('inputFormStatusError');
        errorSvg(element);
    } else {
        $('#' + input).removeClass('inputFormStatusError');
        $('#' + input).addClass('inputSucess');
        $('#' + element + ' .svgError').remove();
    };
};