var round = 0;

var lives = 500;
var cannibalTurn = 0;
var cannibalActivate = false;

// Computer modifier variables
var computerCannibalActivation = false;
var computerCannibalTurn = 0;

var computerLastInput = '';
var playerLastInput = '';


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
    console.log('cannibal event listener is activated');
    playerCannibal.addEventListener('click', activateCannibal);

  } else {
    console.log('cannibal is deactivated');
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
  }
  console.log('still round ' + round);
  console.log('tie');
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

  } else if (computerChoice > .67) {
    selectedChoice = 'paper';

  } else {
    selectedChoice = 'scissors';
  }
  selectChoice = selectedChoice;
  computerLastInput = selectChoice;
  console.log(computerLastInput);
}

var computerModifierRandom = Math.random();

function computerCannibalCalculation(){

  if(computerCannibalTurn > 3 && computerModifierRandom > .25){
    computerCannibalTurn = 0;
    computerCannibalActivation = true;
  } else {
    computerCannibalTurn++;
  }
  console.log('computerCannibal turn', computerCannibalTurn);
}

function playerSelRock() {
  playerLastInput = 'rock';
  computerDecision();
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
  playerLastInput = 'paper';
  computerDecision();
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
  playerLastInput = 'scissors';
  computerDecision();
  if (selectChoice === 'scissors') {
    tie();
  } else if (selectChoice === 'paper') {
    win();
  } else if (selectChoice === 'rock') {
    lose();
  }
  
  
  
  
//sound effects for buttons

var soundRock = document.getElementById('rock');
var soundPaper = document.getElementById('paper');
var soundScissors = document.getElementById('scissors');

soundRock.addEventListener('click', playRockSound);
soundPaper.addEventListener('click', playPaperSound);
soundScissors.addEventListener('click', playerScissorsSound);

function playRockSound () {

  var audio = new Audio('audio/craycray.mp3');
  audio.play();

}

function playPaperSound () {

  var audio = new Audio('audio/craycray.mp3');
  audio.play();


}

function playerScissorsSound () {

  var audio = new Audio('audio/craycray.mp3');
  audio.play();

}

  triggerGame();
}

triggerGame();

