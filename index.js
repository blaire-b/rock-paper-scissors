/* Rock, Paper, Scissors game played against computer.  
Rules of the game:
rock beats scissors -- scissors beats paper -- paper beats rock*/

//set up container for game
const container = document.querySelector('#container');
container.setAttribute('style', 'background: tan; padding: 10px; margin:-10px;')
const content = document.createElement('div');
content.textContent = 'Please choose an option below:';
content.setAttribute('style', 'display: flex; justify-content: center; margin-top: 50px; font-size: 22px;')
container.appendChild(content);

//outside div for the buttons
const buttonDiv = document.createElement('div');
buttonDiv.classList.add('input-btn');
buttonDiv.setAttribute('style', 'display: flex; justify-content: space-around;flex-direction: column; margin-top: 50px;')

//buttons to choose user input
const option1 = document.createElement('button');
option1.classList.add('btn');
option1.setAttribute('style', 'background: lightblue; padding: 10px; margin: 10px 25%; border-radius: 8px; font-size: 18px;')
option1.textContent = 'Rock';
option1.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})
const option2 = document.createElement('button');
option2.classList.add('btn');
option2.setAttribute('style', 'background: lightblue; padding: 10px; margin: 10px 25%; border-radius: 8px; font-size: 18px;')
option2.textContent = 'Paper';
option2.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

const option3 = document.createElement('button');
option3.classList.add('btn');
option3.setAttribute('style', 'background: lightblue; padding: 10px; margin: 10px 25%; border-radius: 8px; font-size: 18px;')
option3.textContent = 'Scissors';
option3.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

//attaching buttons to their divs
buttonDiv.appendChild(option1);
buttonDiv.appendChild(option2);
buttonDiv.appendChild(option3);

//attach button div to the container
container.appendChild(buttonDiv);

//To get the computer's play:
function getComputerChoice() {

    let computerAnswer = Math.floor(Math.random()*3);
       
    let answer = "";
    if (computerAnswer === 0) {
        answer = "rock";
    }else if (computerAnswer === 1) {
        answer  = "paper";
    }else if (computerAnswer === 2) {
        answer = "scissors";
    }else {
        console.log("Something went wrong.");
    }
   
    return answer;

}
let computerSelection = '';
let cs = 0;
let ps = 0;

function playRound(playerSelection, computerSelection) {
 
    let results;
    let statement;
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        results = playerSelection;
        statement = "Round results: Winner, Rock beats Scissors!";

    }else if (playerSelection === 'rock' && computerSelection === 'paper') {
        results = computerSelection;
        statement = "Round results: You lose! Paper beats Rock.";

    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        results = playerSelection;
        statement = "Round results: Winner, Scissors beats Paper!";

    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        results = computerSelection;
        statement = "Round results: You lose! Rock beats Scissors.";

    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        results = playerSelection;
        statement = "Round results: Winner, Paper beats Rock!";

    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        results = computerSelection;
        statement = "Round results: You lose! Scissors beats Paper.";

    }else if (playerSelection === computerSelection) {
        results = 'tie';
        statement = "Round results: It's a tie";

    }else {console.log("Something went wrong!")};

        if (results == playerSelection) {
             ps++;
        }else if (results == computerSelection) {
            cs ++;
        }else {console.log("no points in a tie")};
       
    console.log("Player: " + ps);
    console.log("Computer: " + cs);
    para.textContent = statement;
    gameresults.textContent = `Computer: ${cs}  Player: ${ps}`;
   
        if(ps === 5) {
            para.textContent = "5 Points! YOU HAVE WON THE GAME!";
        }else if(cs === 5) {
            para.textContent = "SORRY, Computer wins, YOU LOST THE GAME!";
        }
   
    return results;
   }
   
   const resultsDiv = document.createElement('div');
   resultsDiv.setAttribute('style', 'border: 10px solid lightblue; margin: 20px 20%; padding: 20px;');
   const para = document.createElement('p');
   para.textContent = 'RESULTS:';
   para.setAttribute('style', 'text-align: center;')
   resultsDiv.appendChild(para);
   const gameresults = document.createElement('div');
   gameresults.setAttribute('style', 'display: flex; justify-content: center;padding: 20px;')
   resultsDiv.appendChild(gameresults);
   container.appendChild(resultsDiv);
