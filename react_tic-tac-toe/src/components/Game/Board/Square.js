function Square(props) {
  return (
    <button className={ `square ${props.value ? 'disabled' : ''}` }
            onClick={ props.handleClick }>
      { props.value }
    </button>
  );
}

export {
  Square,
};

export default Square;
