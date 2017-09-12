import Board from './board';


class Game {
  constructor() {
    this.board = new Board();
  }

  render() {
    return (`
      <div class="game">
        <div class="game-board">
          ${ this.board.render() }
        </div>
      </div>
    `);
  }
}

export default Game;