function dropdownValidity(id) {
    const dropdown = `<div class="" id="${id}"></div>`;
    $('#cardSecurity').append(dropdown);
};

dropdownValidity('monthValidityCard');
dropdownValidity('yearValidityCard');

function generateItemDropdownMonth() {
    const month = 13;

    for (i = 1; i < month; i++) {
        if(i < 10) {
            const itemMount = `<li class="itemDropdown itemMonth"><span class="textItemDropdown">${'0' + i}</span></li>`;
            $('#listItemMonth').append(itemMount);        
        } else {
            const itemMount = `<li class="itemDropdown itemMonth"><span class="textItemDropdown">${i}</span></li>`;
            $('#listItemMonth').append(itemMount);  
        };
    };
};

function generateItemDropdownYear() {
    const year = 1900;

    for (i = 2035; i > year; i--) {
            const itemYear = `<li class="itemDropdown itemYear"><span class="textItemDropdown">${i}</span></li>`;
            $('#listItemYear').append(itemYear);        
    };
};

function btnDropdown(id, name, text, element) {
    const btnMonth = `<input type="number" class="inputBodyInfo" id="${id}" data-bs-toggle="dropdown" aria-expanded="false" name="${name}" placeholder="${text}">`;
    $(`#${element}`).append(btnMonth);
};

function listItemDropdown(id, element) {
    const listItemDropdown = `<ul class="dropdown-menu p-0 listValidityCard" id="${id}"></ul>`;
    $(`#${element}`).append(listItemDropdown);
};

function cvvCard() {
    const cvvCard = `<input type="number" name="cvv" class="inputBodyInfo" id="cvvCard" placeholder="cvv" maxlength="3">`;
    $(`#cardSecurity`).append(cvvCard);
};

function dropdownValidityMounth() {
    btnDropdown('btnMonth', 'month', 'mês', 'monthValidityCard');
    listItemDropdown('listItemMonth', 'monthValidityCard');
    generateItemDropdownMonth();

    btnDropdown('btnYear', 'year', 'ano', 'yearValidityCard');
    listItemDropdown('listItemYear', 'yearValidityCard');
    generateItemDropdownYear();
    
    cvvCard();
};

dropdownValidityMounth();


$('.itemMonth').click(function() {
        const nameSelect = $(this).text();
        $('#btnMonth').val(nameSelect);
});

$('.itemYear').click(function() {
    const nameSelect = $(this).text();
    $('#btnYear').val(nameSelect);
});