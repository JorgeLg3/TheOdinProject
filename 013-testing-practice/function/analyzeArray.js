export const analyzeArray = (list) => {
    let average = list.reduce((total, element) => {return total + element}) / list.length;
    let min = list.sort((a, b ) => a > b ? 1: -1)[0];
    let max = list.sort((a, b ) => a < b ? 1: -1)[0];
    let length = list.length;
    return { average, min, max, length};
}