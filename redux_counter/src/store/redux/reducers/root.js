import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { themeReducer } from './theme';

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export {
  rootReducer,
};
