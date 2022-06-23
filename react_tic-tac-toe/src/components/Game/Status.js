function Status(props) {
  if (!props.gameOver) return (
    <p className="game-status">Next player: <b>{ props.nextPlayer }</b></p>
  );
  if (props.winner) return (
    <p className="game-status">Winner: <b>{ props.winner }</b></p>
  );
  return (
    <p className="game-status">Game over</p>
  );
}

export {
  Status,
};

export default Status;
