'use strict';

var round = 0;
var lives = 10;

/////FEEDBACKRACK


var feedBackRackL = document.getElementById('feedBackRackL');
feedBackRackL.textContent = 'FIGHT!!';
var feedBackRackR = document.getElementById('feedBackRackR');
feedBackRackR.textContent = 'FIGHT!!';



/////
var livesCounter = document.getElementById('livesCounter');
livesCounter.textContent = lives;

//canibal variables
var cannibalTurn = 0;
var cannibalActivate = false;

//time machine variables
var winStrk = 0;
var timeMachineUsable = false;
var timeWarp = false;

//computer variables
// var computerPrevious = '';
var computerPrevious = [];
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

var cannibalUse = 0;
var cannibalCounter = 0;
//take next counter, multiply it by the number of times you want it to be used, then add that to previous counter

function cannibalFreqMod() {
  if (cannibalUse <= 3) {
    cannibalCounter = 1;
    console.log('shift up');
  }
  else if (cannibalUse <= 6) {
    cannibalCounter = 2;
    console.log('shift up2');
  }
  else if (cannibalUse <= 9) {
    cannibalCounter = 3;
    console.log('shift up3');

  }
  else if (cannibalUse <= 12) {
    cannibalCounter = 4;
    console.log('shift up4');

  }
  else if (cannibalUse <= 15) {
    cannibalCounter = 5;
    console.log('shift up5');

  } else {
    cannibalCounter = 6;
    console.log('shift up6');

  }
}

//Cannibal Modifier
function cannibalIdentifier() {
  if (cannibalTurn > cannibalCounter) {
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
  cannibalUse++;
  feedBackRackL.textContent = 'CANNIBAL MODE!';
  feedBackRackR.textContent = '';
  cannibalFreqMod();
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
  feedBackRackL.textContent = '1.21 gigawatts!';
}

function triggerGame() {
  if (lives > 0) {
    var displayRound = round + 1;
    var displayElement = document.getElementById('roundNumber');
    displayElement.textContent = displayRound;
    console.log(computerPrevious);

    cannibalIdentifier();
    computerCannibalCalculation();
    timeMachineIdentifier();

  } else {
    gameOver();
    gameIsOver();
    // window.location.href = '../index.html';
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function win() {

  feedBackRackL.textContent = '\"haHA!\"';
  feedBackRackR.textContent = '\"BZZZz\"';

  if (winStrk >= 2) {
    timeMachineUsable = true;
    feedBackRackL.textContent = 'WINNING STREAK!!';
  }

  if (cannibalActivate === true) {
    lives++;
    livesCounter.textContent = lives;
    cannibalActivate = false;
    cannibalTurn = 0;
    feedBackRackL.textContent = 'NOM NOM: LIVES +1';
  }

  round++;
  winStrk++;

  display('../img/WIN.gif');

}

function tie() {
  if (cannibalActivate === true && computerCannibalActivation === false) {
    cannibalActivate = false;
    cannibalTurn = 0;
    console.log('you cannibal');
    lives = lives++;
    livesCounter.textContent = lives;
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

    feedBackRackL.textContent = '\"JINX!\"';
    feedBackRackR.textContent = '\"JINX!\"';

    display('../img/TIE.gif');//tie img

  } else {
    console.log('no cannibals');
    feedBackRackL.textContent = '\"JINX!\"';
    feedBackRackR.textContent = '\"JINX!\"';
    display('../img/TIE.gif');//tie img

    triggerGame();
  }
}

function lose() {
  lives--;
  livesCounter.textContent = lives;
  round++;
  if (cannibalActivate === true) {
    cannibalActivate = false;
    cannibalTurn = 0;
  }
  winStrk = 0;

  display('../img/LOSE.gif');//lose img

  feedBackRackL.textContent = '-1 LIFE';
  feedBackRackR.textContent = '\"haHA!\"';

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
  feedBackRackL.textContent = 'GAME OVER';
  feedBackRackL.textContent = '\"EVIL TRIUMPHS!\"';
}


function timeMachineDestination() {
  computerPrevious.unshift(computerChoice);
  if (computerPrevious.length > 2) {
    computerPrevious.pop();
  }
}


function timeMachineActivation() {
  if (timeWarp === true) {
    computerChoice = computerPrevious[1];
    timeWarp = false;
  } if (computerChoice === 'rock') {
    computerrock('computerTrackImg');
  } else if (computerChoice === 'paper') {
    computerpaper('computerTrackImg');
  } else {
    computerscissors('computerTrackImg');
  }
}


function computerDecision() {
  var computerValue = Math.random();
  if (computerValue < .33) {
    var computerSelectedChoice = 'rock';
    computerrock('computerTrackImg');

  } else if (computerValue > .67) {
    computerSelectedChoice = 'paper';
    computerpaper('computerTrackImg');

  } else {
    computerSelectedChoice = 'scissors';
    computerscissors('computerTrackImg');
  }
  computerChoice = computerSelectedChoice;
}

var computerModifierRandom = Math.random();

function computerCannibalCalculation() {


  if (computerCannibalTurn > 3 && computerModifierRandom > .25) {
    computerCannibalTurn = 0;
    computerCannibalActivation = true;
    feedBackRackR.textContent = 'CANNIBAL MODE!';
  } else {
    computerCannibalTurn++;
  }
}




function playerSelRock() {
  playerrock('playerTrackImg');
  computerDecision();

  timeMachineActivation();

  if (computerChoice === 'scissors') {
    win();
  } else if (computerChoice === 'paper') {
    lose();
  } else if (computerChoice === 'rock') {
    tie();
  }
  timeMachineDestination();
  // computerPrevious = computerChoice;
  triggerGame();
}

function playerSelPaper() {
  playerpaper('playerTrackImg');
  computerDecision();

  timeMachineActivation();

  if (computerChoice === 'scissors') {
    lose();

  } else if (computerChoice === 'paper') {
    tie();

  } else if (computerChoice === 'rock') {
    win();
  }
  timeMachineDestination();
  // computerPrevious = computerChoice;
  triggerGame();
}

function playerSelScissors() {
  playerscissors('playerTrackImg');
  computerDecision();

  timeMachineActivation();
  if (computerChoice === 'scissors') {
    tie();
  } else if (computerChoice === 'paper') {
    win();
  } else if (computerChoice === 'rock') {
    lose();
  }
  timeMachineDestination();
  // computerPrevious = computerChoice;
  triggerGame();
}
//////////////////////////////////////////////////////////
function playerrock(myImg) {
  document.getElementById(myImg).src = '../img/ROCKplay.gif';
}

function playerpaper(myImg) {
  document.getElementById(myImg).src = '../img/PAPERplay.gif';
}

function playerscissors(myImg) {
  document.getElementById(myImg).src = '../img/SCISSORplay.gif';
}
//////////
function computerrock(myImg2) {
  document.getElementById(myImg2).src = '../img/ROCKcomp.gif';
}

function computerpaper(myImg2) {
  document.getElementById(myImg2).src = '../img/PAPERcomp.gif';
}

function computerscissors(myImg2) {
  document.getElementById(myImg2).src = '../img/SCISSORcomp.gif';
}

function display(outcome) {
  document.getElementById('outcomeTrackImg').src = outcome;
}

//////////////////////////////////////////////////////////////////////
var battleRack = document.getElementById('battleRack');
var playerHand = document.getElementById('computerTrack');


var playerTrack = document.getElementById('playerTrack');

function displayPlayerHand() {

}


triggerGame();


//How To Play Instruction Window
var howToPlay = document.getElementById('how-to-play');
var instruction = document.getElementById('instruction-window');
var exitButton = document.getElementById('exit-instruction');

//Exit Game window
var gameOverWindow = document.getElementById('GO-window');

var exitToHomeButton = document.getElementById('back-to-home');

exitToHomeButton.addEventListener('click', exitToHome);

function exitToHome() {
  event.preventDefault();
  window.location.href = '../index.html';
}

function gameIsOver() {
  gameOverWindow.style.display = 'block';

}

gameOverWindow.style.display = 'none';

howToPlay.addEventListener('click', gameInstructionWindow);
exitButton.addEventListener('click', exitGameInstruction);

function gameInstructionWindow() {
  instruction.style.display = 'block';
}
function exitGameInstruction() {
  instruction.style.display = 'none';
}

// Animation
// function animation() {
//   document.getElementById('playerTrackImg').className('left-to-right');
// }
// playerRock.addEventListener('animationend', animation, false);

var rockAni = document.getElementById('rock');
var playerHand = document.getElementById('move-right');

rockAni.addEventListener('mousedown', function () {
  playerHand.style.keyframes = '';
}, false);

rockAni.addEventListener('click', function () {
  playerHand.style.keyframes = 'shake';
});



// document.getElementById('playerTrackImg').onclick = function(){
//   playerHand.style.keyframes = 'shake';
// };


//Audio Player
var audio = document.getElementById('audio-img');
var audioPlayer = document.getElementById('audio-player');
audio.addEventListener('click', audioPlayMute, false);

function audioPlayMute() {
  if (audioPlayer.muted === true) {
    audioPlayer.muted = false;
    audio.src = '../img/audio.svg';
  } else {
    audioPlayer.muted = true;
    audio.src = '../img/audio.mute.svg';
  }
}