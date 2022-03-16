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

function playerSelection(){
    let userPlay = prompt("What is your play?").toLowerCase();

    return userPlay;
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
        resultText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;        
    }
    else if(
        (playerSelection == 'Scissors' && (computerSelection == 'Rock' || computerSelection == 'Spock')) ||
        (playerSelection == 'Rock' && (computerSelection == 'Paper' || computerSelection == 'Spock')) ||
        (playerSelection == 'Paper' && (computerSelection == 'Scissors' || computerSelection == 'Lizard')) ||
        (playerSelection == 'Lizard' && (computerSelection == 'Scissors' || computerSelection == 'Rock')) ||
        (playerSelection == 'Spock' && (computerSelection == 'Paper' || computerSelection == 'Lizard'))
    ){
        computerPoint = 1;
        resultText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;        
    }

    return [playerPoint, computerPoint];
}

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
}

/*const btnScissors = document.querySelector('#scissors-btn');
btnScissors.addEventListener('click', playerPlay);

const btnPaper = document.querySelector('#paper-btn');
btnPaper.addEventListener('click', playerPlay);

const btnRock = document.querySelector('#rock-btn');
btnRock.addEventListener('click', playerPlay);*/

const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => button.addEventListener('click', playerPlay));

function playerPlay(e){
    //console.log(this.getAttribute("data-name"));
    playRound(this.getAttribute("data-name"), computerPlay())
}

const resultText = document.querySelector('#results');

//console.log(game());