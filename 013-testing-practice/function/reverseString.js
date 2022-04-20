export function reverseString(string){
    let arraystring = string.split("");
    let reverse = arraystring.reverse();
    return reverse.toString().replace(/,/g,'');
}