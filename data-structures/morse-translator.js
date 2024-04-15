const morse = ".-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,--.,---,--.,--.-,.-.,...,--,-,..-,...-,.--,..-,-.--";
const letters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";

const code = "... --- ...";
const randomMsg = "..-. .- .-. ..."

function decipher(code) {
    let result = "";

    const formattedCode = formatInput(code);
    const morseKey = createKey(morse, letters);

    for (let i = 0; i < formattedCode.length; i++) {
        if (morseKey.has(formattedCode[i])) {
            result += morseKey.get(formattedCode[i]);
        }
    }

    return result;
}

function formatInput(input) {
    return input.split(" ");
}

function createKey(morse, letters) {
    const morseLetterKey = new Map();
    const morseArr = stringToArray(morse);
    const lettersArr = stringToArray(letters);

    for (let i = 0; i < morseArr.length; i++) {
        morseLetterKey.set(morseArr[i], lettersArr[i]);
    }

    return morseLetterKey;
}

function stringToArray(str) {
    let result = str.toLowerCase().split(",");
    return result;
}

const message = decipher(code);

console.log(message.toUpperCase());