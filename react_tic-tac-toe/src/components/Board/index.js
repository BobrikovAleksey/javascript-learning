import React from 'react';

import { Square } from './Square';

/**
 * Определяет победителя
 * @param {string|null[]} squares
 * @returns {string|boolean}
 */
const findWinner = (squares) => {
  const lines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [ a, b, c ] = lines[i];
    const A = squares[a], B = squares[b], C = squares[c];
    if (A && B === A && C === A) return A;
  }
  return false;
};

class Board extends React.Component {
  state = {
    history: [ new Array(9).fill(null) ],
  }

  get gameOver() {
    return (this.state.history.length > 9) || Boolean(findWinner(this.squares));
  }

  get nextPlayer() {
    return (this.state.history.length % 2 === 1) ? 'X' : 'O';
  }

  get squares() {
    const { history } = this.state;
    return history[history.length - 1];
  }

  get status() {
    if (!this.gameOver) return `Next player: ${this.nextPlayer}`;
    if (findWinner(this.squares)) return `Winner ${findWinner(this.squares)}`;
    return 'Game over';
  }

  handleSquaresClick = (i) => {
    if (this.squares[i] || this.gameOver) return;
    const history = this.state.history.slice();
    const squares = this.squares.slice();
    history.push(squares);
    squares[i] = this.nextPlayer;
    this.setState({ ...this.state, history });
  };

  renderSquare(i) {
    return <Square
      value={ this.squares[i] }
      handleClick={ () => this.handleSquaresClick(i) }
    />;
  }

  render() {
    return (
      <div>
        <div className="status">{ this.status }</div>
        <div className="board-row">
          { this.renderSquare(1) }
          { this.renderSquare(2) }
          { this.renderSquare(3) }
        </div>
        <div className="board-row">
          { this.renderSquare(4) }
          { this.renderSquare(5) }
          { this.renderSquare(6) }
        </div>
        <div className="board-row">
          { this.renderSquare(7) }
          { this.renderSquare(8) }
          { this.renderSquare(9) }
        </div>
      </div>
    );
  }
}

export {
  Board,
};

export default Board;
