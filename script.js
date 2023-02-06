const imgItems = document.querySelectorAll('.img-item');
const userScoreElement = document.querySelector('.score-user');
const computerScoreElement = document.querySelector('.score-computer');
const roundElement = document.querySelector('.paragraph.round');
const resultElement = document.querySelector('.game-details');


let userScore = 0;
let computerScore = 0;
const maxScore = 5;

function getPrompt(){
    const input = prompt("select 'rock', 'paper', 'scissors'");
    
    return input.toLowerCase() || input; 
}


function showResult(str){
    const result = resultElement.querySelector('h2');
    result.textContent = str; 
}

function getRandom(){
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    return  randomNumber === 1 ? 'rock' : 
        randomNumber === 2 ? 'paper' :
        'scissors';
}

function playRound(playerSelection , computerSelection){
    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';

    if (playerSelection === computerSelection){
        showResult('It\'s draw!')
    }
    else if(playerSelection === rock && computerSelection === scissors ||
        playerSelection === scissors && computerSelection === paper ||
        playerSelection === paper && computerSelection === rock
    ){
        showResult(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else {
        showResult(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}


function game(e){
    const playerSelection = e.target.getAttribute('data-item');
    if(!playerSelection) return;
    const computerSelection = getRandom();
    
    playRound(playerSelection, computerSelection);
    if(userScore == maxScore || computerScore == maxScore){
        imgItems.forEach(imgItem => imgItem.removeEventListener('click', game));
    }

}


imgItems.forEach(imgItem => imgItem.addEventListener('click', game));


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