function getComputerChoice () {
  let rand_num = Math.random();
  console.log("Computer roll: " + rand_num);
  if (rand_num < 0.34) {
    comp_choice = "rock";
  } else if (rand_num >= 0.34 && rand_num < 0.67) {
    comp_choice = "paper";
  } else {
    comp_choice = "scissors";
  }
  console.log("Computer choice: " + comp_choice);
  return comp_choice;
}

function getHumanChoice () {
  let hum_choice = prompt("Enter: rock, paper, or scissors.");
  console.log("Human choice: " + hum_choice);
  return hum_choice;
}

function playRound(humanChoice, computerChoice) {
  hum_score = 0;
  comp_score = 0;
  if (humanChoice == "rock" && computerChoice == "rock") {
    
  } else if (humanChoice == "" && computerChoice == "") {
    
  } else if (humanChoice == "" && computerChoice == "") {
    
  } else if (humanChoice == "" && computerChoice == "") {
    
  } else if (humanChoice == "" && computerChoice == "") {
    
  } else if (humanChoice == "" && computerChoice == "") {
    
  } else if (humanChoice == "" && computerChoice == "") {
    
  } else if (humanChoice == "" && computerChoice == "") {
    
  } else if (humanChoice == "" && computerChoice == "") {
    
  } else if (humanChoice == "" && computerChoice == "") {
    
  } else if (humanChoice == "" && computerChoice == "") {
    
  } else if (humanChoice == "" && computerChoice == "") {
    
  } 
}

function playGame() {
	for (let roundcount = 1; roundcount <= 5; roundcount++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
	}
  if (hum_score < comp_score) {
    winner = 0;
  } else if (hum_score > comp_score) {
    winner = 1;
  } else {
    console.log("Tie!");
	}
}

playGame();