function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    let play;

    switch(randomNumber){
        case 0:
            play = "rock";
            break;
        case 1: 
            play = "paper";
            break;
        case 2:
            play = "scissors";
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
        console.log(`You Tied! ${playerSelection} vs ${computerSelection}`);
    }
    else if(
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ){
        playerPoint = 1;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);        
    }
    else if(
        (playerSelection == 'scissors' && computerSelection == 'rock') ||
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors')
    ){
        computerPoint = 1;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);        
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

const btnScissors = document.querySelector('#scissors-btn');
btnScissors.addEventListener('click', playerPlay);

const btnPaper = document.querySelector('#paper-btn');
btnPaper.addEventListener('click', playerPlay);

const btnRock = document.querySelector('#rock-btn');
btnRock.addEventListener('click', playerPlay);

function playerPlay(){
    console.log('hola');
}

//console.log(game());