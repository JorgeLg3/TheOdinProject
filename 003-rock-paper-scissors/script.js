const resultText = document.querySelector('#results');
const modalContainer = document.querySelector('.modal-container');
const restartButton = document.querySelector('#restart');

let playerPoints = 0;
let computerPoints = 0;
const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => button.addEventListener('click', playerPlay));
restartButton.addEventListener('click', restartGame);

function playerPlay(e){
    [playerAdd, computerAdd] = playRound(this.getAttribute("data-name"), computerPlay())
    addPoints(playerAdd, computerAdd);
    if (playerPoints == 5 || computerPoints == 5){
        endGame();
    }
}

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*5);
    let play;

    switch(randomNumber){
        case 0:
            play = "Rock";
            break;
        case 1: 
            play = "Paper";
            break;
        case 2:
            play = "Scissors";
            break;
        case 3:
            play = "Lizard";
            break;
        case 4:
            play = "Spock";
            break;    
    }

    return play;
}

function playRound(playerSelection, computerSelection)
{
    let playerPoint = 0;
    let computerPoint = 0;

    if (playerSelection == computerSelection)
    {
        resultText.textContent = `You Tied! ${playerSelection} vs ${computerSelection}`;
    }
    else if(
        (playerSelection == 'Scissors' && (computerSelection == 'Paper' || computerSelection == 'Lizard')) ||
        (playerSelection == 'Rock' && (computerSelection == 'Scissors' || computerSelection == 'Lizard')) ||
        (playerSelection == 'Paper' && (computerSelection == 'Rock' || computerSelection == 'Spock')) ||
        (playerSelection == 'Lizard' && (computerSelection == 'Paper' || computerSelection == 'Spock')) ||
        (playerSelection == 'Spock' && (computerSelection == 'Rock' || computerSelection == 'Scissors'))
    ){
        playerPoint = 1;
        resultText.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;        
    }
    else if(
        (playerSelection == 'Scissors' && (computerSelection == 'Rock' || computerSelection == 'Spock')) ||
        (playerSelection == 'Rock' && (computerSelection == 'Paper' || computerSelection == 'Spock')) ||
        (playerSelection == 'Paper' && (computerSelection == 'Scissors' || computerSelection == 'Lizard')) ||
        (playerSelection == 'Lizard' && (computerSelection == 'Scissors' || computerSelection == 'Rock')) ||
        (playerSelection == 'Spock' && (computerSelection == 'Paper' || computerSelection == 'Lizard'))
    ){
        computerPoint = 1;
        resultText.textContent = `You Lost! ${computerSelection} beats ${playerSelection}`;        
    }

    return [playerPoint, computerPoint];
}

function addPoints(playerAdd, computerAdd){
    playerPoints += playerAdd;
    computerPoints += computerAdd;
    updatePoints();
}

function updatePoints(){
    document.querySelector('.user-score').textContent = `USER: ${playerPoints}`;
    document.querySelector('.cpu-score').textContent = `CPU: ${computerPoints}`;
}

function endGame(){
    if (playerPoints == 5){
        document.querySelector('.modal-text').textContent = "YOU WON!";
        modalContainer.classList.add('show');
    }
    if (computerPoints == 5){
        document.querySelector('.modal-text').textContent = "YOU LOST!";
        modalContainer.classList.add('show');
    }
}

function restartGame(){
    playerPoints = 0;
    computerPoints = 0;
    updatePoints();
    modalContainer.classList.remove('show');
}
/* OLD CONSOLE FUNCTION
function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    let result;

    for(;(playerPoints < 5)&&(computerPoints < 5);)
    {
        [playerAdd, computerAdd] = playRound(playerSelection(), computerPlay());
        playerPoints += playerAdd;
        computerPoints += computerAdd;
        console.log(`YOU: ${playerPoints} - CPU: ${computerPoints}`)
    }

    if (playerPoints > computerPoints)
    {
        result = `YOU WIN THE GAME ${playerPoints} - ${computerPoints}`;
    }
    else{
        result = `YOU LOST THE GAME ${playerPoints} - ${computerPoints}`;
    }

    return result;
}*/


/* OLD CONSOLE FUNCTION
function playerSelection(){
    let userPlay = prompt("What is your play?").toLowerCase();

    return userPlay;
}*/