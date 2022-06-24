import types from './types';

const rootReducer = (state, action) => {
  const { counter, theme } = state;
  switch (action.type) {
    default: return state;
    case types.COUNTER_DECREMENT:
      return { ...state, counter: { ...counter, value: counter.value - 1 } };
    case types.COUNTER_INCREMENT:
      return { ...state, counter: { ...counter, value: counter.value + 1 } };
    case types.THEME_SWITCH:
      return { ...state, theme: { ...theme, dark: !theme.dark } };
  }
};

export {
  rootReducer,
};
