class Game {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.playerTurn = '⭕️';
  }

  gameTurn(event) {
    var gamePad = [topLeft.id, topMiddle.id, topRight.id, middleLeft.id, middleMiddle.id, middleRight.id, bottomLeft.id, bottomMiddle.id, bottomRight.id];
    var eventId = event.target.id;

    for (var i = 0; i < gamePad.length; i++) {
      if (eventId === gamePad[i] && game.playerTurn === '⭕️') {
        markSquare(event);
        game.playerOne.moves.push(i);
        game.playerOne.moves.sort();
        this.gameDraw();
        this.gameWin(this.playerOne);
        this.playerTurn = '❌';
      }else if (eventId === gamePad[i] && game.playerTurn === '❌') {
        markSquare(event);
        game.playerTwo.moves.push(i);
        game.playerTwo.moves.sort();
        this.gameDraw();
        this.gameWin(this.playerTwo);
        this.playerTurn = '⭕️';
      }
    }
  }

  gameWin(player) {
    if (player.moves.includes(0) && player.moves.includes(1) && player.moves.includes(2)) {
      player.wins++
      this.playerOne.moves = [];
      this.playerTwo.moves = [];
    }else if (player.moves.includes(3) && player.moves.includes(4) && player.moves.includes(5)) {
      player.wins++
      this.playerOne.moves = [];
      this.playerTwo.moves = [];
    }else if (player.moves.includes(6) && player.moves.includes(7) && player.moves.includes(8)) {
      player.wins++
      this.playerOne.moves = [];
      this.playerTwo.moves = [];
    }else if (player.moves.includes(0) && player.moves.includes(3) && player.moves.includes(6)) {
      player.wins++
      this.playerOne.moves = [];
      this.playerTwo.moves = [];
    }else if (player.moves.includes(1) && player.moves.includes(4) && player.moves.includes(7)) {
      player.wins++
      this.playerOne.moves = [];
      this.playerTwo.moves = [];
    }else if (player.moves.includes(2) && player.moves.includes(5) && player.moves.includes(8)) {
      player.wins++
      this.playerOne.moves = [];
      this.playerTwo.moves = [];
    }else if (player.moves.includes(0) && player.moves.includes(4) && player.moves.includes(8)) {
      player.wins++
      this.playerOne.moves = [];
      this.playerTwo.moves = [];
    }else if (player.moves.includes(2) && player.moves.includes(4) && player.moves.includes(6)) {
      player.wins++
      this.playerOne.moves = [];
      this.playerTwo.moves = [];
    }else {
      return
    }
    displayWins();
    disableButtons();
    setTimeout(resetGame, 3000);
  }

  gameDraw() {
    if (this.playerOne.moves.length > 4 || this.playerTwo.moves.length > 4) {
      playerWinMessage.innerText = "This game is a Draw!";
      show(playerWinMessage);
      hide(whichTurn);
      setTimeout(resetGame, 3000);
    }
  }
}
