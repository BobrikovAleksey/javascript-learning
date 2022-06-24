function Status(props) {
  if (!props.gameOver)
    return <p className="status">Next player: <b>{ props.nextPlayer }</b></p>;
  if (props.winner)
    return <p className="status">Winner: <b>{ props.winner }</b></p>;
  return <p className="status">Game over</p>;
}

export {
  Status,
};
