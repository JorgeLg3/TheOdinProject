const clearBtn = document.createElement('button');
clearBtn.classList.add('clear');
clearBtn.innerText = "Clear";
document.body.appendChild(clearBtn);

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let squareNum = prompt("number os squares by row and column?");

for(let i=0; i<(squareNum**2); i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${100/squareNum}%`;
    square.style.height = `${100/squareNum}%`;
    console.log(`${squareNum**2} ${100/squareNum}%`);
    container.appendChild(square);
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

const squares = document.querySelectorAll('.square');
squares.forEach((square) => square.addEventListener('mouseenter', hoverSquare));

function hoverSquare(e){
    if (isClickDown){this.classList.add('hover');}
}

clearBtn.addEventListener('click', ()=> {
    squares.forEach((square) => square.classList.remove('hover'));
});