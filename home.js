'use strict';
var playButton = document.getElementById('play-img');

var modal = document.getElementById('nameCreationModal');

var submitted = document.getElementById('usernameCreation');

// Load save data from local Storage
var loadLocalStorage = localStorage.getItem('TM-username');
var savedUserName = JSON.parse(loadLocalStorage);

if (typeof (savedUserName) === 'object') {
  playButton.addEventListener('click', newPlayer);
} else {
  playButton.addEventListener('click', oldPlayer);
}


function newPlayer() {
  event.preventDefault();

  modal.style.display = 'block';
}

function oldPlayer() {
  alert('Welcome back ' + savedUserName);
}

function submitter() {
  event.preventDefault();

  var userName = event.target.username.value;
  var userNameToLocalStorage = JSON.stringify(userName);
  var toLocalStorage = localStorage.setItem('TM-username', userNameToLocalStorage);
  window.location.href='gameplay.html';

  modal.style.display = 'none';
}

submitted.addEventListener('submit', submitter);