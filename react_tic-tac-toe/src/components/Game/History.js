import React from 'react';

class History extends React.Component {
  state = {
    reversed: true,
  }

  handleReverseChange() {
    this.setState({ ...this.state, reversed: !this.state.reversed });
  }

  renderList() {
    const list = this.props.history.map((step, move) => {
      let caption, position = '';
      if (move > 0) {
        caption = `Go to move #${move}`;
        position = (<b>{ `: C${step.col}R${step.row} => ${step.player}` }</b>);
      } else caption = 'Play again';
      return <li className="history-item" key={ move }>
        <button onClick={() => this.props.handleClick(move)}>{ caption }{ position }</button>
      </li>;
    });
    if (this.state.reversed) list.reverse();
    return list;
  }

  render() {
    return <div className="history">
      <label className="history-reverse">
        <input type="checkbox" checked={ this.state.reversed }
               onChange={ () => this.handleReverseChange() }/>
        Reverse order
      </label>
      <ol className="history-list"
          reversed={ this.state.reversed }>{ this.renderList() }</ol>
    </div>;
  }
}

export {
  History,
};
