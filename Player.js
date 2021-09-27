class Player {
  constructor(icon, wins) {
    this.icon = icon;
    this.moves = [];
    this.turn = false;
    this.wins = 0;
  }

  saveToStorage() {
    var stringifiedIdeas = JSON.stringify(game);
    localStorage.setItem(`stringWins`, stringifiedIdeas);
  }
}
