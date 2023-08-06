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

function nameCard(idElement) {
    var nameCard = 
                    `
                        <div class="inputStyling" id="${idElement}"> <input type="text" name="nameCard" class="inputBodyInfo" id="nameCard" placeholder="nome do titular" maxlength="19"></div>
                    `;

    $('#formCard').append(nameCard);
};

nameCard('nameElement');

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