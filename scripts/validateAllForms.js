const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

function errorSvg(element, tooltip) {
    var error = `
        <svg xmlns="http://www.w3.org/2000/svg" id="${element}Element" class="svgError w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="${tooltip}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
    `;

    // $('#' + element).append(error);
    if ($('#' + element + ' .svgError').length === 0) {
        $('#' + element).append(error);
    }

    $('#' + element + ' .svgError').hover(function() {
        $('#' + element + ' .svgError').tooltip('show');
    })
};

function validationForm(id) {
    if (!id) {
        return true;
    };

    return false;
};

function addStatusInputsForm(validate, input, element, tooltip) {
    var inputError = $('#' + input).val();
    
    if (validate && validationForm(inputError)) {
        $('#' + input).addClass('inputFormStatusError');
        errorSvg(element, tooltip);
    } else {
        $('#' + input).removeClass('inputFormStatusError');
        $('#' + input).addClass('inputSucess');
        $('#' + element + ' .svgError').remove();
    };
};