'use strict';
var playButton = document.getElementById('play-img');

// Load save data from local Storage
var loadLocalStorage = localStorage.getItem('TM-username');
var savedUserName = JSON.parse(loadLocalStorage);

if(typeof(savedUserName) === 'object'){
  playButton.addEventListener('click', newPlayer);
} else {
  playButton.addEventListener('click', oldPlayer);
}



function newPlayer(){

  var userName = prompt('Please Enter Your Name');

  alert('Right here is the instructions on how to play the game');

  var userNameToLocalStorage = JSON.stringify(userName);
  var toLocalStorage = localStorage.setItem('TM-username', userNameToLocalStorage);
}

function oldPlayer(){
  alert('Welcome back ' + savedUserName);
}


var soundPlay = document.getElementById('play-img');
var soundAbout = document.getElementById('about-img');

//high score not enabled as a button yet
//var soundScore = document.getElementById('score-img');

soundPlay.addEventListener('click', startPlaySound);
soundAbout.addEventListener('click', startAboutSound);

//soundScore.addEventListener('click', startScoreSound);

function startPlaySound () {

  var audio = new Audio('audio/Teleport.wav');
  audio.play();

}

function startAboutSound () {

  var audio = new Audio('audio/Teleport.wav');
  audio.play();


}

//function startScoreSound () {

//var audio = new Audio('audio/craycray.mp3');
//audio.play();

//}
