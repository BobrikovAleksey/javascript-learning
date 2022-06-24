function Board(props) {
  const board = [0, 1, 2].map((i) => {
    const shift = i * 3;
    const row = [shift, 1 + shift, 2 + shift].map((k) => {
      const value = props.cells[k];
      const active = props.wonline?.includes(k);
      return <button className={ `board-cell ${active ? 'active' : ''} ${value ? 'disabled' : ''}` }
                     onClick={ () => props.handleClick(k) }
                     key={ k }>{ value }</button>;
    });

    return <div className="board-row" key={ i }>{ row }</div>;
  });

  return <div className={ `board ${props.gameOver ? 'disabled' : ''}` }>{ board }</div>;
}

export {
  Board,
};
