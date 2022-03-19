let currentValue = '';
let previousValue = '';
let operation = '';
let finish = false;
let decimal = false;

const currentScreen = document.querySelector('.current');
const previousScreen = document.querySelector('.previous');

const buttons = document.querySelectorAll('.number');
buttons.forEach((button) => button.addEventListener('click', buttonClick));

function buttonClick(e){
    numberDisplay(this.textContent);
}

function numberDisplay(number){
    if (currentValue.length >= 8) {return;}
    currentScreen.textContent += number;
    currentValue += number;
    if (finish){
        currentScreen.textContent = number;
        currentValue = number;
        finish = false;
        previousScreen.textContent = '';
        previousValue = '';
        decimal = false;
    }
}

const operations = document.querySelectorAll('.operation');
operations.forEach((operation) => operation.addEventListener('click', operationClick));

function operationClick(e){
    operationDisplay(this.textContent);
}

function operationDisplay(entry){
    if(previousValue == '')
    {
        currentScreen.textContent = '';
        previousValue = currentValue;
        currentValue = '';
        operation = entry;
        previousScreen.textContent = `${previousValue} ${operation}`;
    }
    else if(currentValue != ''){
        solution = operate(previousValue, currentValue, operation);
        currentValue = solution;
        currentScreen.textContent = '';
        previousValue = currentValue;
        currentValue = '';
        operation = entry;
        previousScreen.textContent = `${previousValue} ${operation}`;
    }
    decimal =false;
}

const solver = document.querySelector('.solver');
solver.addEventListener('click', solveOperation);
function solveOperation(){
    if (previousValue != '' && operation != '' && currentValue != ''){
        previousScreen.textContent = `${previousValue} ${operation} ${currentValue} =`;
        solution = operate(previousValue, currentValue, operation);
        previousValue = '';
        currentValue = solution;
        currentScreen.textContent = solution;
        finish = true;
    }
}

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
            if(numB == '0') {
                currentValue = '';
                previousValue = '';
                previousScreen.textContent = '';
                alert("error: can't divide by 0")
                return '';
            }
            else{solution =  Number(numA) / Number(numB);}
            break;
        case '%':
            solution =  Number(numA) % Number(numB);
            break;
    }
    return Math.round(solution*100)/100;
}

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    previousValue = '';
    currentValue = '';
    operation = '';
    currentScreen.textContent = '';
    previousScreen.textContent = '';
    decimal = false;
})

const deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click', deleteClick);
function deleteClick(){
    currentValue = currentValue.substring(0, currentValue.length - 1);
    currentScreen.textContent = currentValue;
}

const decimalBtn = document.querySelector('.decimal');
decimalBtn.addEventListener('click', pointDisplay); 
function pointDisplay(){
    if (currentValue.length >= 8) {return;}
    if (currentValue != '' && !decimal && !finish){
        currentScreen.textContent += '.';
        currentValue += '.';
        decimal = true;
    }
    console.log(decimal);
}

document.addEventListener('keydown', (event) =>{
    const key = event.keyCode;
    if (key > 95 && key < 106) {
        numberDisplay(key - 96);
        return;
    }
    switch(key){
        case 110:
            pointDisplay();
            break;
        case 107:
            operationDisplay('+');
            break;
        case 109:
            operationDisplay('-');
            break;
        case 106:
            operationDisplay('x');
            break;
        case 111:
            operationDisplay('/');
            break;
        case 13:
            solveOperation();
            break;
    }
})