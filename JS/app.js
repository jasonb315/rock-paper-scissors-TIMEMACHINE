'use strict';

var round = 0;
var lives = 5;

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
// console.log(computerChoice);
var playerRock = document.getElementById('rock');
var playerPaper = document.getElementById('paper');
var playerScissors = document.getElementById('scissors');
var roundNumber = document.getElementById('roundNumber');
var playerCannibal = document.getElementById('cannibal');
var playerTM = document.getElementById('time-machine');

playerCannibal.checked = false;
playerTM.checked = false;

//Time Machine
//Create array/variable with previous hands


// modifier event Listener
// playerTM.addEventListener('click', )


//Cannibal Modifier
function cannibalIdentifier() {
  if (cannibalTurn > 3) {
    playerCannibal.style.opacity = '1';
    // console.log('player cannibal event listener is activated');
    playerCannibal.addEventListener('click', activateCannibal);

  } else {
    playerCannibal.style.opacity = '0.5';
    // console.log('cannibal is deactivated');
    playerCannibal.removeEventListener('click', activateCannibal);
    cannibalTurn++;
    console.log('cannibal turn', cannibalTurn);
  }

}

function activateCannibal() {
  // console.log('player cannibal is being used');
  cannibalActivate = true;
}

playerRock.addEventListener('click', playerSelRock);
playerPaper.addEventListener('click', playerSelPaper);
playerScissors.addEventListener('click', playerSelScissors);


//when used, winStrk =0
function timeMachineIdentifier() {
  if (timeMachineUsable) {
    playerTM.style.opacity = '1';
    // console.log('player cannibal event listener is activated');
    playerTM.addEventListener('click', activateTimeMachine);

  } else {
    playerTM.style.opacity = '0.5';
    // console.log('cannibal is deactivated');
    playerTM.removeEventListener('click', activateTimeMachine);
    // console.log('cannibal turn', cannibalTurn);
  }

}


function activateTimeMachine() {
  // console.log('player TIME MACHINE is being activated');
  timeWarp = true;
  timeMachineUsable = false;
  winStrk = 0;
  // console.log('computerprevios ' + computerPrevious);
}

function triggerGame() {
  // console.log('__________' + round)
  if (lives > 0) {
    console.log('winS: ' + winStrk);
    console.log('computerChoice ' + computerChoice);
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
  // if (timeMachineUsable) {
  //   winStrk = 0;
  // }
  console.log('round ' + round);
  console.log('WIN WIN WIN');
}

function tie() {
  if (cannibalActivate === true && computerCannibalActivation === false) {
    // console.log('player activate cannibal, player win');
    cannibalActivate = false;
    cannibalTurn = 0;
    win();
  } else if (cannibalActivate === false && computerCannibalActivation === true) {
    // console.log('computer activated cannibal, player lose');
    computerCannibalActivation = false;
    computerCannibalTurn = 0;
    lose();
  } else {
    // console.log('game tie, no cannonballs ' + round)
  }
}


function lose() {
  // console.log('LOSE LOSE');
  lives--;
  round++;
  // console.log('round ' + round);
  // console.log('lives left: ' + lives);
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
    console.log('computer: rock');

  } else if (computerValue > .67) {
    computerSelectedChoice = 'paper';
    console.log('computer: paper');

  } else {
    computerSelectedChoice = 'scissors';
    console.log('computer: scissors');
  }
  computerChoice = computerSelectedChoice;
}

var computerModifierRandom = Math.random();

function computerCannibalCalculation() {


  if (computerCannibalTurn > 3 && computerModifierRandom > .25) {
    computerCannibalTurn = 0;
    computerCannibalActivation = true;
    // console.log('comp used cannonball');
  } else {
    computerCannibalTurn++;
  }
  // console.log('computerCannibal turn ', computerCannibalTurn);
}

function playerSelRock() {
  computerDecision();

  if (timeWarp === true) {
    console.log('before change: ' + computerChoice);
    computerChoice = computerPrevious;
    console.log('after change: ' + computerChoice);
    timeWarp = false;
  }
  // console.log('player: rock')
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
    console.log('before change: ' + computerChoice);
    computerChoice = computerPrevious;
    console.log('after change: ' + computerChoice);
    timeWarp = false;
  }
  // console.log('player: paper')
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
    console.log('before change: ' + computerChoice);
    computerChoice = computerPrevious;
    console.log('after change: ' + computerChoice);
    timeWarp = false;
  }
  // console.log('player: scissors')
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