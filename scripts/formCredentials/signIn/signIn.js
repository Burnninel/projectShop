function form(id, action, method, className) {
    var form = `<form id="${id}" action="${action}.php" method="${method}" class="${className}"></form>`;

    $('#bodyFirst').append(form);
}

form('templateSignIn', '../php/validationLogin', 'post', 'templateSignIn')

function titleSignIn(id, title) {
    var title = `<h3 id="${id}" class="titleForm">${title}</h3>`

    $('#templateSignIn').append(title)
};

titleSignIn('titSingIn', 'Acesse sua conta')

function formBody(id) {
    var form = `<div id="${id}"></div>`

    $('#templateSignIn').append(form)
}

formBody('formSignIn');

function btnSignIn(id, title) {
    var btn = `<button type="submit" class="buttonForms" id="${id}">${title}</button>`;

    $('#templateSignIn').append(btn);
}

btnSignIn('buttonSubmitForm', 'Entrar');

function inputSignIn(idComponent, type, name, id, placeholder) {
    var input = `
        <div class="inputStyling" id="${idComponent}">
            <input type="${type}" name="${name}" class="inputFormStatus" id="${id}" placeholder="${placeholder}">
        </div>
    `;

    $('#formSignIn').append(input);
}

inputSignIn('emailSingInContent', 'email', 'email', 'emailSingIn', 'Digite seu email');
inputSignIn('pwSingInContent', 'password', 'password', 'pwSingIn', 'Digite sua senha');
