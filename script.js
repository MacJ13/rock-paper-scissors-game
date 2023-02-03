function getPrompt(){
    const input = prompt("select 'rock', 'paper', 'scissors'");
    
    return input.toLowerCase() || input; 
}

function getRandom(){
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    return  randomNumber === 1 ? 'rock' : 
        randomNumber === 2 ? 'paper' :
        'scissors';
}

function playRound(playerSelection , computerSelection){
    if (!playerSelection){
        console.error('You entry incorrect Value!!!');
        return;
    }

    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';


    if (playerSelection === computerSelection){
        return 'Its\' draw!';
    }
    else if(playerSelection === rock && computerSelection === scissors ||
        playerSelection === scissors && computerSelection === paper ||
        playerSelection === paper && computerSelection === rock
    ){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let player = getPrompt();
        let comp = getRandom();
        let result = playRound(player, comp);
        if(!result)  continue;
        console.log(result);
    }
}

game();