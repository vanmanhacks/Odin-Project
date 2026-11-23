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
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  round_winner = 0;
  
  if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("This round is a tie.");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("Round winner: computer.");
    return round_winner;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("Round winner: human.");
    round_winner = 1;
    return round_winner;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("Round winner: human.");
    round_winner = 1;
    return round_winner;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("This round is a tie.")
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("Round winner: computer.");
    return round_winner;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("Round winner: computer.");
    return round_winner;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("Round winner: human.");
    round_winner = 1;
    return round_winner;
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log("This round is a tie.")
  } else {
    console.log("Player input unrecognized.")
  }
}

function playGame() {
  hum_score = 0;
  comp_score = 0;
	for (let roundcount = 1; roundcount <= 5; roundcount++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
    round_result = playRound(humanSelection, computerSelection);
    if (round_result == 0) {
      comp_score++;
    } else if (round_result == 1) {
      hum_score++;
    } else {
      console.log("Round not scored.")
    }
    console.log("hum_score: " + hum_score);
    console.log("comp_score: " + comp_score);
	}
  if (hum_score < comp_score) {
    winner = 0;
    console.log("Winner: computer!");
  } else if (hum_score > comp_score) {
    winner = 1;
    console.log("Winner: human!");
  } else {
    console.log("Tie game! No winner!");
	}
}

playGame();