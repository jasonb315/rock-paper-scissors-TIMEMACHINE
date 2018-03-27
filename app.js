var round = 0;
var lives = 500;
var cannibalTurn = 0;
var cannibalActivate = false;
var computerPrevious = '';
var selectChoice = '';
var playerPrevious = '';
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
function cannibalIdentifier(){
  if(cannibalTurn > 3){
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

function activateCannibal(){
  console.log('player cannibal is being used');
  cannibalActivate = true;
}

playerRock.addEventListener('click', playerSelRock);
playerPaper.addEventListener('click', playerSelPaper);
playerScissors.addEventListener('click', playerSelScissors);




var winStrk = 0;
var timeMachineTurn = 0;
//when used, winStrk =0
function timeMachineIdentifier(){
  if(winStrk >= 2){
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

var timeWarp = false;
function activateTimeMachine(){
  console.log('player TIME MACHINE is being activated');
  timeWarp = true;
  console.log('computerprevios ' + computerPrevious);
}

function triggerGame(){
console.log('__________' + round)
  if (lives > 0) {
    console.log('winS: ' + winStrk);
    console.log('selectChoice ' + selectChoice)
    cannibalIdentifier();
    computerCannibalCalculation();
    timeMachineIdentifier();
  } else {
    alert('You\'re done!');
    window.location.href = 'index.html';
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function win() {
  if(cannibalActivate === true){
    cannibalActivate = false;
    cannibalTurn = 0;
  }
  round++;
  winStrk++;
  console.log('round ' + round);
  console.log('WIN WIN WIN');
}

function tie() {
  if(cannibalActivate === true && computerCannibalActivation === false){
    console.log('player activate cannibal, player win');
    cannibalActivate = false;
    cannibalTurn = 0;
    win();
  } else if (cannibalActivate === false && computerCannibalActivation === true){
    // console.log('computer activated cannibal, player lose');
    computerCannibalActivation = false;
    computerCannibalTurn = 0;
    lose();
  } else {
    // console.log('game tie, no cannonballs ' + round)
  }
}


function lose() {
  console.log('LOSE LOSE');
  lives--;
  round++;
  console.log('round ' + round);
  console.log('lives left: ' + lives);
  if(cannibalActivate === true){
    cannibalActivate = false;
    cannibalTurn = 0;
  }
  if (lives === 0) {
    alert('You\'re done!');
    window.location.href = 'index.html';
  }
  winStrk = 0;
}

function computerDecision() {
  var computerChoice = Math.random();
  if (computerChoice < .33) {
    var selectedChoice = 'rock';
    console.log('computer: rock')

  } else if (computerChoice > .67) {
    selectedChoice = 'paper';
    console.log('computer: paper')

  } else {
    selectedChoice = 'scissors';
    console.log('computer: scissors')
  }
  selectChoice = selectedChoice;
}

var computerModifierRandom = Math.random();

function computerCannibalCalculation(){


  if(computerCannibalTurn > 3 && computerModifierRandom > .25){
    computerCannibalTurn = 0;
    computerCannibalActivation = true;
    console.log('comp used cannonball');
  } else {
    computerCannibalTurn++;
  }
  console.log('computerCannibal turn ', computerCannibalTurn);
}

function playerSelRock() {
  computerDecision();
 if(timeWarp === true){
    selectChoice = computerPrevious;
    timeWarp = false;
 }
  console.log('player: rock')
  if (selectChoice === 'scissors') {
    win();
  } else if (selectChoice === 'paper') {
    lose();
  } else if (selectChoice === 'rock') {
    tie();
  }
  triggerGame();
}

function playerSelPaper() {
  computerDecision();
  if(timeWarp === true){
    selectChoice = computerPrevious;
    timeWarp = false;
 }
  console.log('player: paper')
  if (selectChoice === 'scissors') {
    lose();

  } else if (selectChoice === 'paper') {
    tie();

  } else if (selectChoice === 'rock') {
    win();
  }
  triggerGame();
}

function playerSelScissors() {
  computerDecision();
  if(timeWarp === true){
    selectChoice = computerPrevious;
    timeWarp = false;
 }
  console.log('player: scissors')
  if (selectChoice === 'scissors') {
    tie();
  } else if (selectChoice === 'paper') {
    win();
  } else if (selectChoice === 'rock') {
    lose();
  }
  triggerGame();
}

triggerGame();