function charAt(str='', position){
    let sentence = '';

    for (i=0; i < str.length; i++){
        const code = str.charCodeAt(i);

        if (code >= 65 && code <= 121){
            sentence = str.charAt(position);
        }
        else {
            sentence += str[i];
        }
    }
    return sentence;
}

console.log(charAt('chopper', 0))
console.log(charAt('chopper', 1))
