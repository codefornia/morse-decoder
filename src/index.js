const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('**********');

    let word = arr.map(function(decode) {
        let decodeMessage = '';

        for (let i = 0; i < decode.length / 10; i++) {
            let word = '';
            for (let j = i * 10; j < i * 10 + 10; j += 2) {
                if (decode[j] + decode[j + 1] === '10') {
                    word += '.';
                } else if (decode[j] + decode[j + 1] === '11') {
                    word += '-';
                }
            }

            decodeMessage += MORSE_TABLE[word];
        }
        return decodeMessage;
    });

    return  word.join(' ');
}

module.exports = {
    decode
};