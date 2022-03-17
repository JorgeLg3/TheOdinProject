const main = document.querySelector('main');
let currentColor = 'black';

const container = document.createElement('div');
container.classList.add('container');
main.appendChild(container);

let squareNum = prompt("number os squares by row and column?");

for(let i=0; i<(squareNum**2); i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${100/squareNum}%`;
    square.style.height = `${100/squareNum}%`;
    console.log(`${squareNum**2} ${100/squareNum}%`);
    container.appendChild(square);
}

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

/*const colorFrames = document.querySelectorAll('.color');
colorFrames.forEach((frame) => frame.addEventListener('click', changeColor));
function changeColor(e){
    console.log(this.getAttribute('background-color'));
}*/

let isClickDown = false;
container.addEventListener('mousedown', () => {
    isClickDown = true;
    console.log('clickDown');
})

document.addEventListener('mouseup', () =>{
    isClickDown = false;
    console.log('clickUp');
})

const squares = document.querySelectorAll('.square');
squares.forEach((square) => square.addEventListener('mouseenter', hoverSquare));

function hoverSquare(e){
    if (isClickDown){this.style.backgroundColor = currentColor;}
}

clearBtn.addEventListener('click', ()=> {
    squares.forEach((square) => square.classList.remove('hover'));
});