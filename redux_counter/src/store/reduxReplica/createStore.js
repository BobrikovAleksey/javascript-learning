const createStore = (rootReducer, initialState) => {
  let state = rootReducer(initialState, { type: 'INIT' });
  const subscribers = [];

  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach((sub) => sub());
    },
    subscribe(cb) {
      subscribers.push(cb);
    },
    getState() {
      return state;
    },
  }
};

export {
  createStore,
};
