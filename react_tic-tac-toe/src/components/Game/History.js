function History(props) {
  const history = props.history.map((step, move) => {
    return (<li key={ move }>
      <button onClick={() => props.handleClick(move)}>
        {(move > 0) ? `Go to move #${move}` : 'Play again'}
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
