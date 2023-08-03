function elementSearchCep(type, name, id, placeholder, maxlength) {
    const elementSearchCep = 
                        `
                        <div id="contentComponentsCEP">
                            <input type="${type}" name="${name}" class="inputBodyInfo" id="${id}" placeholder="${placeholder}" maxlength="${maxlength}">
                            <div id="btnSearchCEP">
                                <svg id="svgSearchBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                        </div>
                        `;
    $('#formAddress').append(elementSearchCep);
};

elementSearchCep('text', 'cep', 'cep', 'Digite seu CEP', '9');

function elementsDoubleInputRow(element) {
    const elementDoubleInputRow = `<div class="inputsAddress" id="${element}"></div>`;
    $('#formAddress').append(elementDoubleInputRow);
};

function doubleInputRow(type, name, id, placeholder,element, maxlength) {
    const doubleInputRow = `<input type="${type}" name="${name}" class="inputBodyInfo" id="${id}" placeholder="${placeholder}" maxlength="${maxlength}">`;
    $(`#${element}`).append(doubleInputRow);
};

function singleInputRow(type, name, id, placeholder, maxlength) {
    const singleInputRow = `<div class="inputsAddress"> <input type="${type}" name="${name}" class="inputBodyInfo" id="${id}" placeholder="${placeholder}" maxlength="${maxlength}"> </div>`;
    $('#formAddress').append(singleInputRow);
};

function btnAddAddress() {
    const btnAddAddress = `<div class="inputsAddress"> <button id="btnSendCEP" class="btnFormAccount" type="submit">adicionar endereço</button> </div>`;
    $('#formAddress').append(btnAddAddress);
};

elementsDoubleInputRow('streetAndNumber');

doubleInputRow('text', 'street', 'streetAddress', 'rua', 'streetAndNumber');
doubleInputRow('text', 'number', 'numberAddress', 'numero', 'streetAndNumber');

singleInputRow('text', 'neighborhood', 'villageAddress', 'bairro', '24');

elementsDoubleInputRow('cityAndUf');

doubleInputRow('text', 'city', 'cityAddress', 'cidade', 'cityAndUf');
doubleInputRow('text', 'uf', 'ufAddress', 'uf', 'cityAndUf');

btnAddAddress();