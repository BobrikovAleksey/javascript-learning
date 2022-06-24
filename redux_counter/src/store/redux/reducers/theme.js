import { THEME_SWITCH } from './types';

const initialState = {
  dark: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
    case THEME_SWITCH: return { ...state, dark: !state.dark };
  }
};

export {
  themeReducer,
};
