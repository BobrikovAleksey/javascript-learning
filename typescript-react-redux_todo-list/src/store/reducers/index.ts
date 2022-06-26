import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
