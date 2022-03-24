console.log('Hello world!');

const gameBoard = (() => {
    let _board = [];
    let _moves = 0;
    for (i = 0; i < 9; i++) {
        _board.push(' ');
    }

    const getToken = (position) => _board[position];
    const getMoves = () => _moves;
    /*const displayBoard = () => console.log(board);*/
    function consoleBoard() {
        for (i = 0; i < 3; i++) {
            console.log(`|${_board[i*3+0]}|${_board[i*3+1]}|${_board[i*3+2]}|`);
        }
    }
    const setToken = (token, position) => {
        _board[position] = token;
        _moves++;
        const cell = document.querySelector(`#pos-${position} span`);
        if (token == 'x') {cell.textContent = 'close';}
        else if(token == 'o') {cell.textContent = 'radio_button_unchecked';}
        else {cell.textContent = '';}
    }
    const restartBoard = () => {
        _board.forEach((value,position) => {
            const span = document.querySelector(`#pos-${position} span`);
            span.textContent = '';
            value = ' ';
            const cell = span.parentNode;
            cell.addEventListener('click', () => Game.cellClick(position));
            
        })
    }

    return{
        consoleBoard,
        setToken,
        restartBoard,
        getToken,
        getMoves,
    };
})();

const Player = (name) => {
    const sayHello = () => console.log(`hello! I'm ${name}`);
    const move = () =>{

    }

    return{sayHello, name};
}

const Game = (() => {
    const _player1 = Player('user1');
    const _player2 = Player('user2');
    let _player1Turn = true;
    let _player2Turn = false;

    const _move = (position) => {
        if(_player1Turn){
            gameBoard.setToken('x', position);
        }
        if(_player2Turn){
            gameBoard.setToken('o', position);
        }
        _player1Turn = ! _player1Turn;
        _player2Turn = ! _player2Turn;
    }

    const cellClick = (position) => {
        if(gameBoard.getToken(position) == ' '){
            _move(position);
        }
    }

    return {
        cellClick,
    }
})();

gameBoard.restartBoard();
gameBoard.setToken('x', 0);
gameBoard.setToken('o', 4);
gameBoard.setToken('o', 2);
gameBoard.consoleBoard();
//gameBoard.displayBoard();

const player1 = Player('jorge');
player1.sayHello();


