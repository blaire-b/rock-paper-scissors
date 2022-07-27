//Plan solution out before writing any code
//Test each piece as you build to ensure it is working
//Commit often


//Playing against computer-function that will return either rock, paper, or scissors
function getComputerChoice() {
    let computerAnswer = Math.floor(Math.random()*3);
    //console.log(computerAnswer);
    
    
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
   //console.log(answer);
    return answer;
}
  // getComputerChoice();

/*
rock beats scissors -- scissors beats paper -- paper beats rock*/
  
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    let results;

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        results = playerSelection;
        console.log("Winner, Rock beats Scissors!");

    }else if (playerSelection === 'rock' && computerSelection === 'paper') {
        results = computerSelection;
        console.log("You lose! Paper beats Rock.");

    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        results = playerSelection;
        console.log("Winner, Scissors beats Paper!");

    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        results = computerSelection;
        console.log("You lose! Rock beats Scissors.");

    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        results = playerSelection;
        console.log("Winner, Paper beats Rock!");

    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        results = computerSelection;
        console.lot("You lose! Scissors beats Paper.");
    }else {
        results = playerSelection && computerSelection;
        console.log("It's a tie");
    }
    //console.log(results);
    return results;

   }
/*
function game() {
    for (let i = 0; i < 5; i++) {
         playRound(playerSelection, computerSelection);
    }
 Issues: 
 1. How am I going to store the results of each round?
 2. How is winner determined?
 3. Prompt to get input from the user

    STUFF FROM JS BOOK
   let roundNumber = 0;
   let msg = '';
   
   roundNumber =  (i + 1);
   msg += "Round: " + roundNumber + ": ";

   msg += scores[i] + '<br />';
   console.log(msg);
}
*/

/*
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
*/












/* FROM BEGINNING THOUGHT PROCESS

choice is going to return a string
choice will either be one of 3 choices
how to make it random

let choice = "rock" || "paper" || "scissors"; this doesnt seem to make sense
math.Floor(math.Random()*100) this makes a random # from 1 to 100 i think
so would the same thing * 3 make a random # between 1 and 3?

First:
let computerAnswer = Math.floor(Math.random()*3); this would possibly make the number
**actually had the capital wrong/fixed/output is either 0, 1, or 2
Then:
if (computerAnswer === 0) {
    choice === "rock"
}else if (computerAnswer === 1) {
    choice === "paper"
}else if (computerAnswer === 2) {
    choice === "scissors"
}else {
    console.log("Something went wrong.")
}


*/
