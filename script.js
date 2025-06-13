console.log("Hello World");
function getComputerChoice() {
  const rand = Math.random(); // 0 ≤ rand < 1

  if (rand < 1/3)     return "rock";
  else if (rand < 2/3) return "paper";
  else                return "scissors";
}

// quick test
console.log(getComputerChoice());

function getHumanChoice() {
  // show a browser prompt; assume user types rock/paper/scissors
  const choice = prompt("Enter rock, paper or scissors:"); 
  return choice.toLowerCase();
}

// quick test
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`🧑 You chose: ${humanChoice} | 🤖 Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("⇆ It’s a tie!");
    return;
  }

  const wins = {
    rock:     "scissors",
    paper:    "rock",
    scissors: "paper"
  };

  if (wins[humanChoice] === computerChoice) {
    humanScore++;
    console.log(`✅ You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`❌ You lose! ${computerChoice} beats ${humanChoice}`);
  }

  console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
}

// quick test
playRound("rock", "paper");

function playGame() {
  // reset scores each game
  humanScore = 0;
  computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`\n--- Round ${round} ---`);
    const humanChoice    = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log("\n=== Final Result ===");
  if (humanScore > computerScore) {
    console.log(`🎉 You won the game! ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`😢 You lost the game. ${computerScore} to ${humanScore}`);
  } else {
    console.log(`🤝 It’s a tie! ${humanScore} to ${computerScore}`);
  }
}

// start the whole thing
playGame();

