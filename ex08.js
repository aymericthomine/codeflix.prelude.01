function swapCase(str=''){
    let sentence = '';
    for (i=0; i < str.length; i++){
        const code = str.charCodeAt(i);
        const codeNext = str.charCodeAt(i-1);

        if (code === 32){
            sentence += " ";
        }
        else if(code >= 65 && code <= 90 && i !== 0 && codeNext !== 45){
            sentence += String.fromCharCode(code+32)
        }
        else if(code >= 65 && code <= 90){
            sentence += String.fromCharCode(code+32)
        }
        else if(code >= 97 && code <= 121){
            sentence += String.fromCharCode(code-32)
        }
        else {
            sentence += str[i];
        }
    }
    return sentence;
}

console.log(swapCase('One Code'))
console.log(swapCase('1337 Fruits'))