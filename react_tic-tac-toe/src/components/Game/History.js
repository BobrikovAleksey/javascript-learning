function History(props) {
  const history = props.history.map((step, move) => {
    const caption = (move > 0) ? `Go to move #${move}` : 'Play again';
    const position = (move > 0) ? (<b>{ `: C${step.col}R${step.row}` }</b>) : '';
    return (<li key={ move }>
      <button onClick={() => props.handleClick(move)}>
        { caption }
        { position }
      </button>
    </li>)
  }).reverse();
  return (<ol reversed>
    { history }
  </ol>);
}

export {
  History,
};

export default History;
