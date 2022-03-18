let currentValue;
let previousValue;
let operation;

const currentScreen = document.querySelector('.current');
const previousScreen = document.querySelector('.previous');

const buttons = document.querySelectorAll('.number');
buttons.forEach((button) => button.addEventListener('click', buttonClick));

function buttonClick(e){
    currentScreen.textContent = this.textContent;
    currentValue = this.textContent;
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
    previousScreen.textContent = `${previousValue} ${operation} ${currentValue} = 0`;
    solution = 0;
    previousValue = '';
    currentValue = solution;
    currentScreen.textContent = 0;

})