var game;

var topLeft = document.getElementById('1');
var topMiddle = document.getElementById('2');
var topRight = document.getElementById('3');
var middleLeft = document.getElementById('4');
var middleMiddle = document.getElementById('5');
var middleRight = document.getElementById('6');
var bottomLeft = document.getElementById('7');
var bottomMiddle = document.getElementById('8');
var bottomRight = document.getElementById('9');
var gameArea = document.getElementById('gameSection');
var whichTurn = document.getElementById('whichTurn');
var playerOneWins = document.getElementById('playerOneWins');
var playerTwoWins = document.getElementById('playerTwoWins');
var playerWinMessage = document.getElementById('playerWinMessage');
var clearButton = document.getElementById('clearLocalStorage')

document.addEventListener('DOMContentLoaded', startGame);
gameArea.addEventListener('click', makeTurn);
clearButton.addEventListener('click', clearLocalStorage);

function startGame() {
  var playerOne = new Player('⭕️');
  var playerTwo = new Player('❌');

  if (localStorage.hasOwnProperty("stringWins")) {
    game = retrieveFromStorage();
    playerOne.wins = game.playerOne.wins;
    playerTwo.wins = game.playerTwo.wins;
  }

  game = new Game(playerOne, playerTwo);
  game.playerOne.turn = true;

  playerOneWins.innerText = `${game.playerOne.wins} wins`;
  playerTwoWins.innerText = `${game.playerTwo.wins} wins`;
}

function makeTurn() {
  if (event) {
    game.gameTurn(event);
  }
  whichTurn.innerText = `It's Player ${game.playerTurn}'s Turn`;
}

function markSquare(event) {
  var eventId = event.target.id;
  if (eventId === topLeft.id) {
    topLeft.innerText = game.playerTurn;
    topLeft.disabled = true;
  }else if (eventId === topMiddle.id) {
    topMiddle.innerText = game.playerTurn;
    topMiddle.disabled = true;
  }else if (eventId === topRight.id) {
    topRight.innerText = game.playerTurn;
    topRight.disabled = true;
  }else if (eventId === middleLeft.id) {
    middleLeft.innerText = game.playerTurn;
    middleLeft.disabled = true;
  }else if (eventId === middleMiddle.id) {
    middleMiddle.innerText = game.playerTurn;
    middleMiddle.disabled = true;
  }else if (eventId === middleRight.id) {
    middleRight.innerText = game.playerTurn;
    middleRight.disabled = true;
  }else if (eventId === bottomLeft.id) {
    bottomLeft.innerText = game.playerTurn;
    bottomLeft.disabled = true;
  }else if (eventId === bottomMiddle.id) {
    bottomMiddle.innerText = game.playerTurn;
    bottomMiddle.disabled = true;
  }else if (eventId === bottomRight.id) {
    bottomRight.innerText = game.playerTurn;
    bottomRight.disabled = true;
  }
}

function displayWins() {
  if (game.playerTurn === '⭕️') {
    playerOneWins.innerText = `${game.playerOne.wins} wins`;
    show(playerWinMessage);
    hide(whichTurn);
    playerWinMessage.innerText = `Player ⭕️ wins!`
  }else {
    playerTwoWins.innerText = `${game.playerTwo.wins} wins`;
    show(playerWinMessage);
    hide(whichTurn);
    playerWinMessage.innerText = `Player ❌ wins!`
  }
}

function disableButtons() {
  topLeft.disabled = true;
  topMiddle.disabled = true;
  topRight.disabled = true;
  middleLeft.disabled = true;
  middleMiddle.disabled = true;
  middleRight.disabled = true;
  bottomLeft.disabled = true;
  bottomMiddle.disabled = true;
  bottomRight.disabled = true;
}

function enableButtons() {
  topLeft.disabled = false;
  topLeft.innerText = ''
  topMiddle.disabled = false;
  topMiddle.innerText = ''
  topRight.disabled = false;
  topRight.innerText = ''
  middleLeft.disabled = false;
  middleLeft.innerText = ''
  middleMiddle.disabled = false;
  middleMiddle.innerText = ''
  middleRight.disabled = false;
  middleRight.innerText = ''
  bottomLeft.disabled = false;
  bottomLeft.innerText = ''
  bottomMiddle.disabled = false;
  bottomMiddle.innerText = ''
  bottomRight.disabled = false;
  bottomRight.innerText = ''
}

function retrieveFromStorage() {
  var retrievedWins = localStorage.getItem("stringWins");
  return JSON.parse(retrievedWins);
}

function clearLocalStorage() {
  localStorage.clear();
  startGame();
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}
