function imgShopAll() {
    var containerImgShopAll = 
                        `<div id="containerImgShopAll">
                            <img src="../images/image.png" id="imgShopAll" alt="imgShopAll">
                        </div>
                        `;

    $('.containerBody').append(containerImgShopAll);
};

function cardItemImgProminence(img, btn, group) {
    var containerProminenceItens = 
            `
            <div class="cardItemImgProminence">
                <img src="../images/${img}.png" alt="" class="itemImgProminence">
                <button class="btnCardImgProminence">${btn}</button>
            </div>
            `;

    $(`.${group}`).append(containerProminenceItens);
};

function containerProminenceItens() {
    var containerProminenceItens = 
            `
            <h4 id="titleProminence">destaque</h4>
            <div id="imgCard">
                <div class="firstCardImgProminence"></div>
                <div class="secondCardImgProminence"></div>
            </div>
            `;

    $('#containerProminenceItens').append(containerProminenceItens);
};

$(document).ready(function() {
    containerProminenceItens();
    cardItemImgProminence('imgProminenceOne', 'jaquetas', 'firstCardImgProminence');
    cardItemImgProminence('imgProminenceTwo', 'fleeces', 'firstCardImgProminence');
    cardItemImgProminence('imgProminenceThree', 'calças', 'secondCardImgProminence');
    cardItemImgProminence('imgProminenceFour', 'botas', 'secondCardImgProminence');
});