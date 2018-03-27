var round = 0;
var lives = 500;
var cannibalTurn = 0;
var cannibalActivate = false;
var computerPrevious = '';
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



function triggerGame(){
console.log('__________' + round)
  if (lives > 0) {
    cannibalIdentifier();
    computerCannibalCalculation();

  } else {
    alert('You\'re done!');
    window.location.href = 'index.html';
  }
}

var selectChoice = '';


function win() {
  if(cannibalActivate === true){
    cannibalActivate = false;
    cannibalTurn = 0;
  }
  round++;
  console.log('round ' + round);
  console.log('win');
}


function tie() {
  if(cannibalActivate === true && computerCannibalActivation === false){
    console.log('player activate cannibal, player win');
    cannibalActivate = false;
    cannibalTurn = 0;
    win();
  } else if (cannibalActivate === false && computerCannibalActivation === true){
    console.log('computer activated cannibal, player lose');
    computerCannibalActivation = false;
    computerCannibalTurn = 0;
    lose();
  } else {
    console.log('game tie, no cannonballs ' + round)
  }
}


function lose() {
  console.log('lose');
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
}

function computerDecision() {
  var computerChoice = Math.random();
  if (computerChoice < .33) {
    var selectedChoice = 'rock';
    console.log('computer played rock')

  } else if (computerChoice > .67) {
    selectedChoice = 'paper';
    console.log('computer played paper')

  } else {
    selectedChoice = 'scissors';
    console.log('computer played scissors')
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
  console.log('player played rock')
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
  console.log('player played paper')
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
  console.log('player played scissors')
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