const imgItems = document.querySelectorAll('.img-item');
const userScoreElement = document.querySelector('.score-user');
const computerScoreElement = document.querySelector('.score-computer');
const roundElement = document.querySelector('.paragraph.round');



let userScore = 0;
let computerScore = 0;


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

imgItems.forEach(imgItem => {
    imgItem.addEventListener('click', (e) => {
        const data = e.target.getAttribute('data-item');
        if (!data) return;
        console.log(data);
    })
})

// function game(){
//     for (let i = 0; i < 5; i++){
//         let player = getPrompt();
//         let comp = getRandom();
//         let result = playRound(player, comp);
//         if(!result)  continue;
//         console.log(result);
//     }
// }

// game();