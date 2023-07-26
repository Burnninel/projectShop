const ignoredWords = ['de', 'dos', 'da', 'e', 'do'];

function capitalizeWord(word, index) {
    return index === 0 || !ignoredWords.includes(word.toLowerCase())
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word.toLowerCase();
};

function capitalizeText(text) {
    return text.split(' ').map(capitalizeWord).join(' ');
};

$('input[type="text"]').on('input', function() {
    this.value = capitalizeText(this.value);
});