var round = 0;

var lives = 5;

// var playerChoice = ;
var computerChoice = Math.random();
console.log(computerChoice);
var playerRock = document.getElementById('rock');
var playerPaper = document.getElementById('paper');
var playerScissors = document.getElementById('scissors');

playerRock.addEventListener('click', playerSelRock);
playerPaper.addEventListener('click', playerSelPaper);
playerScissors.addEventListener('click', playerSelScissors);


// win () user wins, add points, add round, soemthing

// lose () computer wins, lose life, add round, anything else

// tie() rerun game function

// var timeMachine = false;
// var cannibal = false;

if (computerChoice <.33) { 

  selectedChoice = 'rock'; 
}
else if  (computerChoice >.67) {

  selectedChoice = 'paper';

} else {
  selectedChoice = 'scissors';
}


function playerSelRock() { 

  if (computerChoice === 'scissors')
  // win();
    console.log('rockwin');

  if (computerChoice === 'paper')
  // loose(); 
    console.log('rocklose');

  if (computerChoice === 'rock')
  // tie (); 
    console.log('rocktie');

}

function playerSelPaper() { 

  if (computerChoice === 'scissors')
  // loose();
    console.log('paperwin');


  else if (computerChoice === 'paper')
  // tie(); 
    console.log('papertie');

  else if (computerChoice === 'rock')
  // win (); 
    console.log('paperlose');

}

function playerSelScissors() { 

  if (computerChoice === 'scissors')
  // tie();
    console.log('scissorstie');

  else if (computerChoice === 'paper')
  // loose(); 
    console.log('scissorswin');

  else if (computerChoice === 'rock')
  // win (); 
    console.log('scissorslose');

}


