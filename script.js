function getPrompt(){
    const input = prompt("select 'rock', 'paper', 'scissors'");
    return input.toLowerCase() || input; 
}

let playerSelection = getPrompt();