import Square from './square';


class Board {
  constructor() {
    this.state = {
      squares: Array(9).fill(''),
      xIsNext: true,
    };
  }

  handleClick(i) {
    console.log('in handleclick', i)
    const squares = this.state.squares.slice();
    if (this.calculateWinner() || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.state = {
      squares: squares,
      xIsNext: !this.state.xIsNext,
    };
  }

  calculateWinner() {
    const squares = this.state.squares.slice();    
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }  

  hello(i) {
    alert('hello, '+ i)
  }

  render() {
    const winner = this.calculateWinner();
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (`
      <div>
        <div class="status">${ status }</div>
        <div class="board-row">
          <button class="square" onclick='${this.hello(0)}'>${this.state.squares[0]}</button>
          <button class="square" onclick='${this.handleClick(1)}'>${this.state.squares[1]}</button>
          <button class="square" onclick='${this.handleClick(2)}'>${this.state.squares[2]}</button>
        </div>
        <div class="board-row">
          <button class="square" onclick='${this.handleClick(3)}'>${this.state.squares[3]}</button>
          <button class="square" onclick='${this.handleClick(4)}'>${this.state.squares[4]}</button>
          <button class="square" onclick='${this.handleClick(5)}'>${this.state.squares[5]}</button>

        </div>
        <div class="board-row">
          <button class="square" onclick='${this.handleClick(6)}'>${this.state.squares[6]}</button>
          <button class="square" onclick='${this.handleClick(7)}'>${this.state.squares[7]}</button>
          <button class="square" onclick='${this.handleClick(8)}'>${this.state.squares[8]}</button>
        </div>
      </div>
    `);
  }
}

      /*<div>
        <div class="status">${ status }</div>
        <div class="board-row">
          ${ Square({value: this.state.squares[0], onClick: this.handleClick(0)}) }
          ${ Square({value: this.state.squares[1], onClick: this.handleClick(1)}) }
          ${ Square({value: this.state.squares[2], onClick: this.handleClick(2)}) }        
        </div>
        <div class="board-row">
          ${ Square({value: this.state.squares[3], onClick: this.handleClick(3)}) }
          ${ Square({value: this.state.squares[4], onClick: this.handleClick(4)}) }
          ${ Square({value: this.state.squares[5], onClick: this.handleClick(5)}) }
        </div>
        <div class="board-row">
          ${ Square({value: this.state.squares[6], onClick: this.handleClick(6)}) }
          ${ Square({value: this.state.squares[7], onClick: this.handleClick(7)}) }
          ${ Square({value: this.state.squares[8], onClick: this.handleClick(8)}) }
        </div>
      </div>*/


export default Board;