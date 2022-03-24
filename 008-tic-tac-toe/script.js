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
            _board[position] = ' ';
            _moves = 0;
        })
    }
    const displayBoard = () =>{
        _board.forEach((value,position)=>{
            const span = document.querySelector(`#pos-${position} span`);
            const cell = span.parentNode;
            cell.addEventListener('click', () => Game.cellClick(position));
        })
    
    }
    const checkWinner = (token) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        let win = false;
        winConditions.forEach((combination)=> {
            let flag = false;
            combination.forEach((element)=> {
                if(_board[element] != token){flag=true;}
            })
            if(!flag){
                console.log('win');
                win = true;
            }
        })
        return win;
    }
    return{
        consoleBoard,
        setToken,
        restartBoard,
        getToken,
        getMoves,
        checkWinner,
        displayBoard,
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
        let token;
        if(_player1Turn){
            token = 'x';
        }
        if(_player2Turn){
            token = 'o';
        }
        gameBoard.setToken(token, position);
        _player1Turn = ! _player1Turn;
        _player2Turn = ! _player2Turn;
        if(gameBoard.checkWinner(token)){
            console.log('You win');
            gameBoard.restartBoard();
        }
        if(gameBoard.getMoves()==9){
            console.log('You tie!');
            gameBoard.restartBoard();
        }
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

//gameBoard.restartBoard();
//gameBoard.setToken('x', 0);
gameBoard.setToken('o', 4);
//gameBoard.setToken('o', 2);
//gameBoard.setToken('o', 6);
gameBoard.restartBoard();
gameBoard.consoleBoard();
gameBoard.displayBoard();

const player1 = Player('jorge');
player1.sayHello();

//console.log(gameBoard.checkWinner('o'));


