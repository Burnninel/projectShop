function inputNumberCard() {
    const inputNumberCard = `<div id="inputNumberCard"></div>`;
    $('#formCard').append(inputNumberCard);
};

inputNumberCard();

function inputSecurity() {
    const multipleInputRowForm = `<div class="multipleInputRowForm" id="cardSecurity"></div>`;
    $('#formCard').append(multipleInputRowForm);
};

inputSecurity();

function cardInfo() {
    const cardInfo = `<div class="multipleInputRowForm" id="cardInfo"></div>`;
    $('#formCard').append(cardInfo);
};

cardInfo();

function btnAddCard() {
    const btnAddCard = `<div id="addCard"> <button id="btnAddCard" class="btnFormAccount">adicionar cartão</button> </div>`;
    $('#formCard').append(btnAddCard);
};

btnAddCard();