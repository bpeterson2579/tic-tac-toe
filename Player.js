class Player {
  constructor(icon, wins) {
    this.icon = icon;
    this.moves = [];
    this.turn = false;
    this.wins = 0;
  }

  saveToStorage() {
    var stringifiedWins = JSON.stringify(game);
    localStorage.setItem(`stringWins`, stringifiedWins);
  }
}
