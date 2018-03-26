var round = 0;
var lives = 5;


// var playerChoice = ;
// console.log(computerChoice);
var playerRock = document.getElementById('rock');
var playerPaper = document.getElementById('paper');
var playerScissors = document.getElementById('scissors');
var roundNumber = document.getElementById('roundNumber');

playerRock.addEventListener('click', playerSelRock);
playerPaper.addEventListener('click', playerSelPaper);
playerScissors.addEventListener('click', playerSelScissors);

var selectChoice = '';

function win(){
  round++;
console.log('round ' + round)

}

function tie(){
  console.log('still round ' + round)
}

function lose(){
  lives--;
  round++;
  console.log('round ' + round)
  console.log ('lives left: ' + lives)
}

// win () user wins, add points, add round, soemthing

// lose () computer wins, lose life, add round, anything else

// tie() rerun game function

// var timeMachine = false;
// var cannibal = false;




function computerDecision() {
  var computerChoice = Math.random();
  if (computerChoice < .33) {
    var selectedChoice = 'rock';

  } else if (computerChoice > .67) {
    selectedChoice = 'paper';

  } else {
    selectedChoice = 'scissors';
  }
  selectChoice = selectedChoice;
}

function playerSelRock() {
  computerDecision();
  if (selectChoice === 'scissors') {
    win();
    console.log('rockwin');
  } else if (selectChoice === 'paper') {
    lose();
    console.log('rocklose');
  } else if (selectChoice === 'rock') {
    tie();
    console.log('rocktie');
  }
}

function playerSelPaper() {
  computerDecision();
  if (selectChoice === 'scissors') {
    lose();
    console.log('paperwin');

  } else if (selectChoice === 'paper') {
    tie();
    console.log('papertie');

  } else if (selectChoice === 'rock') {
    win();
    console.log('paperlose');
  }
}

function playerSelScissors() {
  computerDecision();
  if (selectChoice === 'scissors') {
    tie();
    console.log('scissorstie');
  } else if (selectChoice === 'paper') {
    lose();
    console.log('scissorswin');
  } else if (selectChoice === 'rock') {
    win();
    console.log('scissorslose');
  }
}




