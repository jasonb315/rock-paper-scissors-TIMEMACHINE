'use strict';

var round = 0;
var lives = 50;

//canibal variables
var cannibalTurn = 0;
var cannibalActivate = false;

//time machine variables
var winStrk = 0;
var timeMachineUsable = false;
var timeWarp = false;

//computer variables
var computerPrevious = '';
var computerChoice = '';
// Computer modifier variables
var computerCannibalActivation = false;
var computerCannibalTurn = 0;


// var playerChoice = ;
var playerRock = document.getElementById('rock');
var playerPaper = document.getElementById('paper');
var playerScissors = document.getElementById('scissors');
var roundNumber = document.getElementById('roundNumber');
var playerCannibal = document.getElementById('cannibal');
var playerTM = document.getElementById('time-machine');

playerCannibal.checked = false;
playerTM.checked = false;

//display user name
var getUserName = localStorage.getItem('TM-username');
var userName = JSON.parse(getUserName);

var userNameHere = document.getElementById('name');
userNameHere.textContent = userName;


//Time Machine
//Create array/variable with previous hands


// modifier event Listener
// playerTM.addEventListener('click', )


//Cannibal Modifier
function cannibalIdentifier() {
  if (cannibalTurn > 3) {
    playerCannibal.style.opacity = '1';
    playerCannibal.addEventListener('click', activateCannibal);

  } else {
    playerCannibal.style.opacity = '0.5';
    playerCannibal.removeEventListener('click', activateCannibal);
    cannibalTurn++;
  }

}

function activateCannibal() {
  cannibalActivate = true;
}

playerRock.addEventListener('click', playerSelRock);
playerPaper.addEventListener('click', playerSelPaper);
playerScissors.addEventListener('click', playerSelScissors);


//when used, winStrk =0
function timeMachineIdentifier() {
  if (timeMachineUsable) {
    playerTM.style.opacity = '1';
    playerTM.addEventListener('click', activateTimeMachine);

  } else {
    playerTM.style.opacity = '0.5';
    playerTM.removeEventListener('click', activateTimeMachine);
  }
}


function activateTimeMachine() {
  timeWarp = true;
  timeMachineUsable = false;
  winStrk = 0;
}

function triggerGame() {
  if (lives > 0) {
    var displayRound = round + 1;
    var displayElement = document.getElementById('roundNumber');
    displayElement.textContent = displayRound;

    cannibalIdentifier();
    computerCannibalCalculation();
    timeMachineIdentifier();
  } else {
    alert('You\'re done!');
    gameOver();
    window.location.href = '../index.html';
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function win() {
  if (cannibalActivate === true) {
    cannibalActivate = false;
    cannibalTurn = 0;
  }
  round++;
  // if ()
  winStrk++;

  if (winStrk >= 2) {
    timeMachineUsable = true;
  }
}

function tie() {
  if (cannibalActivate === true && computerCannibalActivation === false) {
    cannibalActivate = false;
    cannibalTurn = 0;
    console.log('you cannibal');

    win();
  } else if (cannibalActivate === false && computerCannibalActivation === true) {
    computerCannibalActivation = false;
    computerCannibalTurn = 0;
    console.log('computer cannibal');
    lose();

  } else if (cannibalActivate === true && computerCannibalActivation === true) {
    cannibalActivate = false;
    computerCannibalActivation = false;
    cannibalTurn = 0;
    computerCannibalTurn = 0;
    console.log('double cannibal');
  } else {
    console.log('no cannibals');
    triggerGame();
  }
}



function lose() {
  lives--;
  round++;
  if (cannibalActivate === true) {
    cannibalActivate = false;
    cannibalTurn = 0;
  }
  winStrk = 0;
}

function gameOver() {
  console.log(round);
  var loadLocalHighScore = localStorage.getItem('High-Score', loadLocalHighScore);
  if (loadLocalHighScore && loadLocalHighScore.length) {
    loadLocalHighScore = JSON.parse(loadLocalHighScore);
  }
  if (loadLocalHighScore > round) {
    loadLocalHighScore = JSON.stringify(loadLocalHighScore);
    loadLocalHighScore = localStorage.setItem('High-Score', loadLocalHighScore);
  } else {
    var highscore = JSON.stringify(round);
    var toLocalStorage = localStorage.setItem('High-Score', highscore);
  }
}


function computerDecision() {
  var computerValue = Math.random();
  if (computerValue < .33) {
    var computerSelectedChoice = 'rock';

  } else if (computerValue > .67) {
    computerSelectedChoice = 'paper';

  } else {
    computerSelectedChoice = 'scissors';
  }
  computerChoice = computerSelectedChoice;
}

var computerModifierRandom = Math.random();

function computerCannibalCalculation() {


  if (computerCannibalTurn > 3 && computerModifierRandom > .25) {
    computerCannibalTurn = 0;
    computerCannibalActivation = true;
  } else {
    computerCannibalTurn++;
  }
}

function playerSelRock() {
  computerDecision();

  if (timeWarp === true) {
    computerChoice = computerPrevious;
    timeWarp = false;
  }
  if (computerChoice === 'scissors') {
    win();
  } else if (computerChoice === 'paper') {
    lose();
  } else if (computerChoice === 'rock') {
    tie();
  }
  computerPrevious = computerChoice;
  triggerGame();
}

function playerSelPaper() {
  computerDecision();

  if (timeWarp === true) {
    computerChoice = computerPrevious;
    timeWarp = false;
  }
  if (computerChoice === 'scissors') {
    lose();

  } else if (computerChoice === 'paper') {
    tie();

  } else if (computerChoice === 'rock') {
    win();
  }
  computerPrevious = computerChoice;
  triggerGame();
}

function playerSelScissors() {
  computerDecision();

  if (timeWarp === true) {
    computerChoice = computerPrevious;
    timeWarp = false;
  }
  if (computerChoice === 'scissors') {
    tie();
  } else if (computerChoice === 'paper') {
    win();
  } else if (computerChoice === 'rock') {
    lose();
  }
  computerPrevious = computerChoice;
  triggerGame();
}

triggerGame();


//How To Play Instruction Window
var howToPlay = document.getElementById('how-to-play');
var instruction = document.getElementById('instruction-window');
var exitButton = document.getElementById('exit-instruction');

howToPlay.addEventListener('click', gameInstructionWindow);
exitButton.addEventListener('click', exitGameInstruction);

function gameInstructionWindow() {
  instruction.style.display = 'block';
}
function exitGameInstruction() {
  instruction.style.display = 'none';
}