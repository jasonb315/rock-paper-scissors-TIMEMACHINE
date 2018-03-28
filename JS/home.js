'use strict';

var playButton = document.getElementById('play-img');

var newUser = document.getElementById('transition-window');

var submitted = document.getElementById('usernameCreation');

var oldUser = document.getElementById('welcome-back');

var welcomeBack = document.getElementById('welcomeBack');

var playGame = document.getElementById('welcome-back-msg');

var howToPlay = document.getElementById('instruction-window');

var instruction= document.getElementById('howtoplay-window');


// Load user name and high score from local Storage
var loadLocalStorage = localStorage.getItem('TM-username');
var savedUserName = JSON.parse(loadLocalStorage);

var loadLocalHighScore = localStorage.getItem('High-Score', loadLocalHighScore);
var savedHighScore = JSON.parse(loadLocalHighScore);

var playerHighScore = document.getElementById('highest-round');
playerHighScore.textContent = savedHighScore;

if (typeof (savedUserName) === 'object') {
  playButton.addEventListener('click', newPlayer);
} else {
  playButton.addEventListener('click', oldPlayer);
}


//window for users to input user name
function newPlayer() {
  event.preventDefault();
  newUser.style.display = 'block';
}

function submitter() {
  event.preventDefault();

  var userName = event.target.username.value;
  var userNameToLocalStorage = JSON.stringify(userName);
  var toLocalStorage = localStorage.setItem('TM-username', userNameToLocalStorage);
  newUser.style.display = 'none';

  // Show instruction if not seen already
  var fromLocalStorage = localStorage.getItem('TM-instruction-read');
  var seenInstruction = JSON.parse(fromLocalStorage);

  if (seenInstruction === true) {
    window.location.href='HTML/gameplay.html';
  } else {
    gameInstructionWindow();
  }

}


//window for old users, welcome window
function oldPlayer() {
  event.preventDefault();

  welcomeBack.textContent = 'Welcome Back ' + savedUserName;
  oldUser.style.display = 'block';
}

function playGameNow() {
  event.preventDefault();
  oldUser.style.display = 'none';


  // Show instruction if not seen already
  var fromLocalStorage = localStorage.getItem('TM-instruction-read');
  var seenInstruction = JSON.parse(fromLocalStorage);

  if (seenInstruction === true) {
    window.location.href='HTML/gameplay.html';
  } else {
    gameInstructionWindow();
  }
}


//window for How To Play instructions
function gameInstructionWindow() {
  event.preventDefault();

  howToPlay.style.display = 'block';
}

function goToGamePlay() {
  event.preventDefault();

  var useenInstruction = JSON.stringify(true);
  var toLocalStorage = localStorage.setItem('TM-instruction-read', useenInstruction);

  howToPlay.style.display = 'none';
  window.location.href='HTML/gameplay.html';
}


submitted.addEventListener('submit', submitter);
playGame.addEventListener('submit', playGameNow);
instruction.addEventListener('submit', goToGamePlay);