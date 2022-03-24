console.log('Hello world!');

const gameBoard = (() => {
    let _board = [];
    for (i = 0; i < 9; i++) {
        _board.push(' ');
    }

    /*const displayBoard = () => console.log(board);*/
    function consoleBoard() {
        for (i = 0; i < 3; i++) {
            console.log(`|${_board[i*3+0]}|${_board[i*3+1]}|${_board[i*3+2]}|`);
        }
    }
    const setToken = (token, position) => {
        _board[position] = token;
    }

    const displayBoard = () => {
        _board.forEach((value,position) => {
            const cell = document.querySelector(`#pos-${position} span`);
            if (value == 'x') {cell.textContent = 'close';}
            else if(value == 'o') {cell.textContent = 'radio_button_unchecked';}
        })
    }

    return{
        consoleBoard,
        setToken,
        displayBoard,
    };
})();

const Player = (name) => {
    const sayHello = () => console.log(`hello! I'm ${name}`);

    return{sayHello, name};
}

gameBoard.setToken('x', 0);
gameBoard.setToken('o', 4);
gameBoard.setToken('o', 2);
gameBoard.displayBoard();

const player1 = Player('jorge');
player1.sayHello();

