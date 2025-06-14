console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getHumanChoice() {
  const choice = prompt("Enter rock, paper or scissors:");
  return choice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    const wins = { rock: "scissors", paper: "rock", scissors: "paper" };

    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}.`);

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (wins[humanChoice] === computerChoice) {
      humanScore++;
      console.log("You win this round!");
    } else {
      computerScore++;
      console.log("You lose this round!");
    }
  }

  for (let round = 1; round <= 5; round++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score: You ${humanScore} | Computer ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log(`You won the game ${humanScore} to ${computerScore}!`);
  } else if (computerScore > humanScore) {
    console.log(`You lost the game ${computerScore} to ${humanScore}.`);
  } else {
    console.log(`The game is a tie at ${humanScore} each.`);
  }
}

playGame();
