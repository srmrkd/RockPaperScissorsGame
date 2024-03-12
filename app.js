const computerChoiceValue = document.getElementById('computer-choice');
const yourChoiceValue = document.getElementById('your-choice');
const resultValue = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button'); // Returns a NodeList
let yourChoice;
let computerChoice;
let myResult;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourChoice = e.target.id; //// whatever element i click i want to get the id of
    yourChoiceValue.innerHTML = yourChoice;
    generateComputerChoice();
    generateResult();
}));


function generateComputerChoice(){
    computerChoice = Math.floor(Math.random() * possibleChoices.length) + 1;
    switch(computerChoice){
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }
    computerChoiceValue.innerHTML = computerChoice;
}


function generateResult(){
    if(computerChoice == yourChoice){
        myResult = 'Draw!';
    }else if((computerChoice == 'rock' && yourChoice == 'paper') ||
             (computerChoice == 'paper' && yourChoice == 'scissors') ||
             (computerChoice == 'scissors' && yourChoice == 'rock')){
        myResult = 'You won!';
    }else{
        myResult = 'You lost!';
    }
    resultValue.innerHTML = myResult;  
}