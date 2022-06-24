import types from './types';

export const async = (store) => {
  setTimeout(() => (store.dispatch({ type: types.COUNTER_INCREMENT })), 2500);
};

export const decrement = (store) => (store.dispatch({ type: types.COUNTER_DECREMENT }));
export const increment = (store) => (store.dispatch({ type: types.COUNTER_INCREMENT }));

export const changeTheme = (store) => (store.dispatch({ type: types.THEME_SWITCH }));

export default {
  async,
  decrement,
  increment,
  changeTheme,
};
