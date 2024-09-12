function censoredWords(text, word) {

    let toReplace = `*`.repeat(word.length);
    while (text.includes(word)) {
        text = text.replace(word, toReplace);
    }
    console.log(text);
}
censoredWords('A small sentence with some small words',

    'small');
