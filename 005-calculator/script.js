let currentValue = '';
let previousValue = '';
let operation = '';

const currentScreen = document.querySelector('.current');
const previousScreen = document.querySelector('.previous');

const buttons = document.querySelectorAll('.number');
buttons.forEach((button) => button.addEventListener('click', buttonClick));

function buttonClick(e){
    currentScreen.textContent += this.textContent;
    currentValue += this.textContent;
}

const operations = document.querySelectorAll('.operation');
operations.forEach((operation) => operation.addEventListener('click', operationClick));

function operationClick(e){
    currentScreen.textContent = '';
    previousValue = currentValue;
    currentValue = '';
    operation = this.textContent;
    previousScreen.textContent = `${previousValue} ${operation}`;
}

const solver = document.querySelector('.solver');
solver.addEventListener('click', () => {
    previousScreen.textContent = `${previousValue} ${operation} ${currentValue} =`;
    solution = operate(previousValue, currentValue, operation);
    previousValue = '';
    currentValue = solution;
    currentScreen.textContent = solution;

})

function operate(numA, numB, operator){
    let solution;
    switch(operator){
        case '+':
            solution = Number(numA) + Number(numB);
            break;
        case '-':
            solution =  Number(numA) - Number(numB);
            break;
        case 'x':
            solution =  Number(numA) * Number(numB);
            break;
        case '/':
            solution =  Number(numA) / Number(numB);
            break;
        case '%':
            solution =  Number(numA) % Number(numB);
            break;
    }
    return Math.round(solution*100)/100;
}