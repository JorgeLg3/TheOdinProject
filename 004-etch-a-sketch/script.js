const main = document.querySelector('main');
let squareNum = 64;
let currentColor = 'black';

/*SKETCH CONTAINER*/
const container = document.createElement('div');
container.classList.add('container');
main.appendChild(container);
displayGrid(squareNum);

const controls = document.createElement('div');
controls.classList.add('controls');
main.appendChild(controls);

const clearBtn = document.createElement('button');
clearBtn.classList.add('clear');
clearBtn.innerText = "Clear";
controls.appendChild(clearBtn);

const pallet = document.createElement('div');
const colors = ['red', 'blue', 'yellow', 'orange', 'green', 'black'];
pallet.classList.add('pallet');
controls.appendChild(pallet);

const range = document.createElement('input');
range.setAttribute('type', 'range');
range.setAttribute('min', '16');
range.setAttribute('max', '99');
range.setAttribute('step', '1');
range.setAttribute('value', '64');
controls.appendChild(range);
range.addEventListener('input', function(){
    rangeTxt.textContent = range.value + 'px';
}, false);
range.addEventListener('change', function(){
    squareNum = range.value;
    displayGrid(squareNum);
}, false);

const rangeTxt = document.createElement('div');
rangeTxt.textContent = '64px';
controls.appendChild(rangeTxt);

function displayGrid(squareNum){
    container.innerHTML = '';
    for(let i=0; i<(squareNum**2); i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${100/squareNum}%`;
        square.style.height = `${100/squareNum}%`;
        square.addEventListener('mouseenter', hoverSquare);
        console.log(`${squareNum**2} ${100/squareNum}%`);
        container.appendChild(square);
    }
}

for(const color of colors){
    const colorFrame = document.createElement('div');
    colorFrame.classList.add('color');
    pallet.setAttribute('data-color',color);
    colorFrame.style.cssText = `background-color: ${color}`;
    pallet.appendChild(colorFrame);
    colorFrame.addEventListener('click', () =>{
        currentColor = color;
    })
}

let isClickDown = false;
container.addEventListener('mousedown', () => {
    isClickDown = true;
    console.log('clickDown');
})

document.addEventListener('mouseup', () =>{
    isClickDown = false;
    console.log('clickUp');
})

function hoverSquare(e){
    if (isClickDown){this.style.backgroundColor = currentColor;}
}

clearBtn.addEventListener('click', ()=> {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => container.removeChild(square));
    displayGrid(squareNum);
})