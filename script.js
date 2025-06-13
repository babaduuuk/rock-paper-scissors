const buttons = document.querySelectorAll('#choices button');
const scoreElem = document.getElementById('score');
const resultElem = document.getElementById('result');

let humanScore = 0;
let computerScore = 0;
let round = 0;
const totalRounds = 5;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScoreboard() {
  scoreElem.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  resultElem.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}.`;

  if (humanChoice === computerChoice) {
    resultElem.textContent += ' It\'s a tie!';
  } else {
    const wins = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
    if (wins[humanChoice] === computerChoice) {
      humanScore++;
      resultElem.textContent += ' You win!';
    } else {
      computerScore++;
      resultElem.textContent += ' You lose!';
    }
  }

  updateScoreboard();
  round++;

  if (round === totalRounds) {
    let finalMsg = ' Final result: ';
    if (humanScore > computerScore) finalMsg += 'You won the game!';
    else if (computerScore > humanScore) finalMsg += 'You lost the game.';
    else finalMsg += "It's a tie!";
    resultElem.textContent += finalMsg;
    buttons.forEach(btn => btn.disabled = true);
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => playRound(button.dataset.choice));
});

updateScoreboard();

