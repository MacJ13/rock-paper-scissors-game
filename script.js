

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