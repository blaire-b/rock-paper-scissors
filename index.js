/* Rock, Paper, Scissors game played against computer.  
Rules of the game:
rock beats scissors -- scissors beats paper -- paper beats rock*/

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

//To get users play:
  function getPlayerSelection() {

    let userInput = prompt("Do you choose Rock, Paper, or Scissors?")
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){     
        return userInput;
    }else {console.log("Not a valid choice.")}

}
 //getPlayerSelection();


let cs = 0;
let ps = 0;

function playRound(playerSelection, computerSelection) {
 
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
        console.log("You lose! Scissors beats Paper.");

    }else if (playerSelection === computerSelection) {
        results = 'tie';
        console.log("It's a tie");

    }else {console.log("Something went wrong!")};

        if (results == playerSelection) {
             ps++;
        }else if (results == computerSelection) {
            cs ++;
        }else {console.log("no points in a tie")};
       
    console.log("Player: " + ps);
    console.log("Computer: " + cs);
    
    return results;
   }
 
function playGame() {
     
    for (let i = 0; i < 5; i++) {               
         //  play game 
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
        //store the results
    if (ps > cs) {
        console.log("Congrats...Player Wins!!")
    } else if (cs > ps) {
        console.log("Too bad, Computer Wins.")
    }else {console.log("It's a Tie Game. Whomp whomp!")}   
}
    playGame();
