function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
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
    }

    return play;
}

console.log(computerPlay());