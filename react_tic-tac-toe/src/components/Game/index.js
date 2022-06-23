import React from 'react';

import { Board } from './Board';
import { History } from './History';
import { Status } from './Status';

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

class Game extends React.Component {
  state = {
    history: [{
      squares: new Array(9).fill(null),
    }],
    winner: null,
  }

  get gameOver() {
    const { history, winner } = this.state;
    return (history.length > 9) || Boolean(winner);
  }

  get nextPlayer() {
    const { history } = this.state;
    return (history.length % 2 === 1) ? 'X' : 'O';
  }

  get squares() {
    const { history } = this.state;
    return history[history.length - 1].squares;
  }

  handleHistoryClick = (move) => {
    const history = this.state.history.slice(0, move + 1);
    const winner = findWinner(history[history.length - 1].squares);
    this.setState({ ...this.state, history, winner });
  }

  handleBoardClick = (i) => {
    if (this.squares[i] || this.gameOver) return;
    const squares = this.squares.slice();
    squares[i] = this.nextPlayer;
    this.state.history.push({
      col: (i - 1) % 3 + 1,
      row: Math.floor((i - 1) / 3 + 1),
      player: this.nextPlayer,
      squares,
    });
    this.setState({ ...this.state, winner: findWinner(squares) });
  };

  renderBoard() {
    return (<Board
      cells={ this.squares }
      gameOver={ this.gameOver }
      handleClick={ this.handleBoardClick }
    />);
  }

  renderHistory() {
    return (<History
      history={ this.state.history }
      handleClick={ this.handleHistoryClick }
    />);
  }

  renderStatus() {
    return (<Status
      gameOver={ this.gameOver }
      nextPlayer={ this.nextPlayer }
      winner={ this.state.winner }
    />);
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          { this.renderBoard() }
        </div>
        <div className="game-info">
          <div>
            { this.renderStatus() }
          </div>
          <div>
            { this.renderHistory() }
          </div>
        </div>
      </div>
    );
  }
}

export {
  Game,
};

export default Game;
