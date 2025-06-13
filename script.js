const buttons = document.querySelectorAll('#choices button');
const scoreElem = document.getElementById('score');
const resultElem = document.getElementById('result');
const playAgainBtn = document.getElementById('play-again');

let humanScore = 0;
let computerScore = 0;
const wins = { rock: 'scissors', paper: 'rock', scissors: 'paper' };

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
    if (wins[humanChoice] === computerChoice) {
      humanScore++;
      resultElem.textContent += ' You win!';
    } else {
      computerScore++;
      resultElem.textContent += ' You lose!';
    }
  }

  updateScoreboard();
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  resultElem.textContent = '';
  updateScoreboard();
}

buttons.forEach(button => {
  button.addEventListener('click', () => playRound(button.dataset.choice));
});

playAgainBtn.addEventListener('click', resetGame);

updateScoreboard();

