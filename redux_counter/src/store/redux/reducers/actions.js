import types from './types';

export const decrement = () => ({ type: types.COUNTER_DECREMENT });
export const increment = () => ({ type: types.COUNTER_INCREMENT });

export const async = () => (dispatch) => {
  dispatch({ type: types.COUNTER_LOADING, payload: true });
  setTimeout(() => {
    dispatch(increment());
    dispatch({ type: types.COUNTER_LOADING, payload: false })
  }, 2500);
};

export const changeTheme = () => ({ type: types.THEME_SWITCH });

export default {
  async,
  decrement,
  increment,
  changeTheme,
};
