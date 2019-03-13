var alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

var result = "";

var firstWord = "hello world";
var firstWordArray = firstWord.split("");

var secondWord = "we love javascript";
var secondWordArray = secondWord.split("");

var firstEncodeWord = "... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. .";
var firstEncodeWordArray = firstEncodeWord.split(" ");

var secondEncodeWord = ".-.-- --- ..- .-.    .. -. ... - .-. ..- -.-. - --- .-. ...    .-.. --- ...- .    -.-- --- ..-";
var secondEncodeWordArray = secondEncodeWord.split(" ");

var thirdEncodeWord =
    "- .... .. ...    .. ...    - .... .    .- -. ... .-- . .-.    - ---    - .... .    ..- .-.. - .. -- .- - .    --.- ..- . ... - .. --- -.    --- ..-.    .-.. .. ..-. .    - .... .    ..- -. .. ...- . .-. ... .    .- -. -..    . ...- . .-. -.-- - .... .. -. --. ....";

var thirdEncodeWordArray = thirdEncodeWord.split(" ");

function encodeWithMorseCode (wordArray) {
    console.log(wordArray);

    for (var i = 0; i < wordArray.length; i++) {
        for (var code in alphabet) {
            if (wordArray[i] === code) {
                result = result + alphabet[code];
            }
            else if (wordArray[i] === " ") {
                result = result + " ";
                break;
            }
        }
    }

    console.log(result);
    result = "";
}

function encodeWithMorseCode (encodedWordArray) {
    console.log(encodedWordArray);

    for (var i = 0; i < encodedWordArray.length; i++) {
        for (var code in alphabet) {
            if (encodedWordArray[i] === alphabet[code]) {
                result = result + code + " ";
            }
        }
    }

    console.log(result);
    result = "";
}

//var userInput = prompt("Input a word to be encoded!");
encodeWithMorseCode(firstWordArray);
encodeWithMorseCode(secondWordArray);

encodeWithMorseCode(firstEncodeWordArray);
encodeWithMorseCode(secondEncodeWordArray);
encodeWithMorseCode(thirdEncodeWordArray);