
var modal = document.getElementById('nameCreationModal');

var play = document.getElementById('play-button');

var submitted = document.getElementById('usernameCreation');

modal.style.display = 'none';

function playButton() {
  modal.style.display = 'block';
}

play.addEventListener('click', playButton);



function submitter() {
  event.preventDefault();

  var userName = event.target.username.value;
  var userNameToLocalStorage = JSON.stringify(userName);
  var toLocalStorage = localStorage.setItem('Test-username', userNameToLocalStorage);

  modal.style.display = 'none';
}

submitted.addEventListener('submit', submitter);
// When the user clicks anywhere outside of the modal, close it


