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
    if(previousValue == '')
    {
        currentScreen.textContent = '';
        previousValue = currentValue;
        currentValue = '';
        operation = this.textContent;
        previousScreen.textContent = `${previousValue} ${operation}`;
    }
    else if(currentValue != ''){
        solution = operate(previousValue, currentValue, operation);
        currentValue = solution;
        currentScreen.textContent = '';
        previousValue = currentValue;
        currentValue = '';
        operation = this.textContent;
        previousScreen.textContent = `${previousValue} ${operation}`;
    }
}

const solver = document.querySelector('.solver');
solver.addEventListener('click', () => {
    if (previousValue != '' && operation != '' && currentValue != ''){
        previousScreen.textContent = `${previousValue} ${operation} ${currentValue} =`;
        solution = operate(previousValue, currentValue, operation);
        previousValue = '';
        currentValue = solution;
        currentScreen.textContent = solution;
    }
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
})

const deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click', () => {
    currentValue = currentValue.substring(0, currentValue.length - 1);
    currentScreen.textContent = currentValue;
})