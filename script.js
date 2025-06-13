console.log("Hello World");
function getComputerChoice() {
  const rand = Math.random(); // 0 ≤ rand < 1

  if (rand < 1/3)     return "rock";
  else if (rand < 2/3) return "paper";
  else                return "scissors";
}

// quick test
console.log(getComputerChoice());
