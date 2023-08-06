function form(id, action, method, body, className) {
    var form = `<form id="${id}" action="${action}.php" method="${method}" class="${className}"></form>`;

    $('#' + body).append(form);
}

function titleSignIn(id, title, template) {
    var title = `<h3 id="${id}" class="titleForm">${title}</h3>`

    $('#' + template).append(title)
};


function formBody(id, template) {
    var form = `<div id="${id}"></div>`

    $('#' + template).append(form)
}

function btnSignIn(id, title, element) {
    var btn = `<button type="submit" class="buttonForms" id="${id}">${title}</button>`;

    $('#' + element).append(btn);
}

function inputSignIn(idComponent, type, name, id, placeholder, element) {
    var input = `
        <div class="inputStyling" id="${idComponent}">
            <input type="${type}" name="${name}" class="inputFormStatus" id="${id}" placeholder="${placeholder}">
        </div>
    `;

    $('#' + element).append(input);
}