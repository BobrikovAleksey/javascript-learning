function Board(props) {
  const board = [0, 1, 2].map((i) => {
    const shift = i * 3;
    const row = [1 + shift, 2 + shift, 3 + shift].map((k) => {
      const value = props.cells[k];
      return (
        <button className={ `board-cell ${value ? 'disabled' : ''}` } key={ k }
                onClick={ () => props.handleClick(k) }>
          { value }
        </button>
      );
    });

    return (
      <div className="board-row" key={ i }>
        { row }
      </div>
    );
  });

  return (
    <div className={ `board ${props.gameOver ? 'disabled' : ''}` }>
      { board }
    </div>
  );
}

export {
  Board,
};
