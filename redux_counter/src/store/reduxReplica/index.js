import { createStore } from './createStore';
import { rootReducer } from './reducers/root';
import { counter } from './counter';
import { theme } from './theme';

const store = theme(counter(createStore(rootReducer, {
  counter: {
    value: 0,
  },
  theme: {
    dark: false,
  },
})));

store.dispatch({ type: 'INIT' });
