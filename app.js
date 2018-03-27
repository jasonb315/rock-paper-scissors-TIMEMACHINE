var round = 0;
var lives = 5;
var cannibalTurn = 0;
var cannibalActivate = false;

// Computer modifier variables
var computerCannibalActivation = false;
var computerCannibalTurn = 0;



// var playerChoice = ;
// console.log(computerChoice);
var playerRock = document.getElementById('rock');
var playerPaper = document.getElementById('paper');
var playerScissors = document.getElementById('scissors');
var roundNumber = document.getElementById('roundNumber');
var playerCannibal = document.getElementById('cannibal');
var playerTM = document.getElementById('time-machine');


//Time Machine
//Create array/variable with previous hands


//Both modifiers


//Cannibal Modifier
function cannibalIdentifier(){
  if(cannibalTurn > 3){
    cannibalModifier.eventlistner('click', activateCannibal);
  } else {
    cannibalTurn++;
  }
}

function activateCannibal(event){
  cannibalActivate = true;
}






if (lives > 0) {
  playerRock.addEventListener('click', playerSelRock);
  playerPaper.addEventListener('click', playerSelPaper);
  playerScissors.addEventListener('click', playerSelScissors);

} else {
  alert('You\'re done!');
  window.location.href = 'index.html';
}

var selectChoice = '';

function win() {
  round++;
  console.log('round ' + round);
}
function tie() {
  if(cannibalActivate === true && computerCannibal === false){
    cannibalActivate = false;
    cannibalTurn = 0;
    win();
  } else if (cannibalActivate === false && computerCannibal === true){
    computerCaninbal = false;
    computerCannibalTurn = 0;
    lose();
  }
  console.log('still round ' + round);
}
function lose() {
  lives--;
  round++;
  console.log('round ' + round);
  console.log('lives left: ' + lives);
  if (lives === 0) {
    alert('You\'re done!');
    window.location.href = 'index.html';
  }
}

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

var computerModifierRandom = Math.random();

function computerCannibalCalculation(){

  if(computerCannibalTurn > 3 && computerModifierRandom > .25){
    computerCannibalTurn = 0;
    computerCannibalActivation = true;
  } else {
    computerCannibalTurn++;
  }
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
    console.log('paperlose');

  } else if (selectChoice === 'paper') {
    tie();
    console.log('papertie');

  } else if (selectChoice === 'rock') {
    win();
    console.log('paperwin');
  }
}

function playerSelScissors() {
  computerDecision();
  if (selectChoice === 'scissors') {
    tie();
    console.log('scissorstie');
  } else if (selectChoice === 'paper') {
    win();
    console.log('scissorswin');
  } else if (selectChoice === 'rock') {
    lose();
    console.log('scissorslose');
  }
}