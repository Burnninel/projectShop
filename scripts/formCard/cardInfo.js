function infoCard(elementId, type, name, maxlength, inputId, placeholder) {
    const infoCard = 
                    `
                    <div id="${elementId}">
                        <input type="${type}" name="${name}" maxlength="${maxlength}" class="inputBodyInfo" id="${inputId}" placeholder="${placeholder}">
                    </div>
                    `;
    $('#cardInfo').append(infoCard);
};

infoCard('elementCpfCard', 'text', 'cpfCard', '14', 'cpfCard', 'cpf');
infoCard('elementNickCard', 'text', 'nickCard', '16', 'nickCard', 'apelido');