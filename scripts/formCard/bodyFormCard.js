function inputNumberCard() {
    const inputNumberCard = `<div id="inputNumberCard" class=""></div>`;
    $('#formCard').append(inputNumberCard);
};

inputNumberCard();

function inputSecurity() {
    const multipleInputRowForm = `<div class="multipleInputRowForm" id="cardSecurity"></div>`;
    $('#formCard').append(multipleInputRowForm);
};

inputSecurity();

function nameCard() {
    var numberCard = 
                    `
                        <input type="text" name="numberCard" class="inputBodyInfo" id="nameCard" placeholder="nome do titular" maxlength="19">
                    `;

    $('#formCard').append(numberCard);
};

nameCard();

function cardInfo() {
    const cardInfo = `<div class="multipleInputRowForm" id="cardInfo"></div>`;
    $('#formCard').append(cardInfo);
};

cardInfo();

function btnAddCard() {
    const btnAddCard = `<div id="addCard"> <button id="btnAddCard" class="btnFormAccount" type="submit">adicionar cartão</button> </div>`;
    $('#formCard').append(btnAddCard);
};

btnAddCard();