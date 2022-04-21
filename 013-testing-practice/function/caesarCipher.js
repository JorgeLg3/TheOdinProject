export const caesarCipher = (string) => {
    let arrayString = string.split('');
    let arrayShifted = [];
    let string2= '';
    for(let i=0; i < string.length; i++){
        if( string.charAt(i) === 'z'){
            string2 = string2 + 'a';
        } else if(string.charAt(i) === 'Z'){
            string2 = string2 + 'A';
        } else if((string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) || (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123)){
            string2 = string2 + String.fromCharCode(string.charCodeAt(i)+1);
        } else {
            string2 = string2 + string.charAt(i);
        }
        
    }
    return string2;
}