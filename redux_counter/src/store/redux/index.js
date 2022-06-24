import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/root';
import { counter } from './counter';
import { theme } from './theme';

const store = theme(counter(createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)),
)));

store.dispatch({ type: 'INIT' });
