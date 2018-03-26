'use strict';
var playButton = document.getElementById('to-gameplay');

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
  alert('welcome Back ' + savedUserName);
}