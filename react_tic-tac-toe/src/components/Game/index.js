import React from 'react';

import { Board } from './Board';
import { History } from './History';
import { Status } from './Status';

/**
 * @param {string|null[]} cells
 * @returns {string|boolean}
 */
const findWinner = (cells) => {
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
  for (let i = 0; i < lines.length; i += 1) {
    const [ a, b, c ] = lines[i];
    const cellA = cells[a], cellB = cells[b], cellC = cells[c];
    if (cellA && cellB === cellA && cellC === cellA) return cellA;
  }
  return false;
};

class Game extends React.Component {
  state = {
    history: [{
      cells: new Array(9).fill(null),
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

  get cells() {
    const { history } = this.state;
    return history[history.length - 1].cells;
  }

  handleBoardClick = (i) => {
    if (this.cells[i] || this.gameOver) return;
    const cells = this.cells.slice();
    cells[i] = this.nextPlayer;
    this.state.history.push({
      cells,
      col: i % 3 + 1,
      row: Math.floor(i / 3 + 1),
      player: this.nextPlayer,
    });
    this.setState({ ...this.state, winner: findWinner(cells) });
  };

  handleHistoryClick = (move) => {
    const history = this.state.history.slice(0, move + 1);
    const winner = findWinner(history[history.length - 1].cells);
    this.setState({ ...this.state, history, winner });
  }

  renderBoard() {
    return (
      <Board
        cells={ this.cells }
        gameOver={ this.gameOver }
        handleClick={ this.handleBoardClick }
      />
    );
  }

  renderHistory() {
    return (
      <History
        history={ this.state.history }
        handleClick={ this.handleHistoryClick }
      />
    );
  }

  renderStatus() {
    return (
      <Status
      gameOver={ this.gameOver }
      nextPlayer={ this.nextPlayer }
      winner={ this.state.winner }
    />
    );
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          { this.renderBoard() }
        </div>
        <div className="game-info">
          <div className="game-status">
            { this.renderStatus() }
          </div>
          <div className="game-history">
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
