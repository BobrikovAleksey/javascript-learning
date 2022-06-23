import React from 'react';

import { Square } from './Square';

class Board extends React.Component {
  state = {
    history: [ new Array(9).fill(null) ],
  }

  get nextPlayer() {
    return (this.state.history.length % 2 === 1) ? 'X' : 'O';
  }

  get squares() {
    const { history } = this.state;
    return history[history.length - 1];
  }

  handleSquaresClick = (i) => {
    if (this.squares[i]) return;
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
    const status = `Next player: ${this.nextPlayer}`;

    return (
      <div>
        <div className="status">{ status }</div>
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
