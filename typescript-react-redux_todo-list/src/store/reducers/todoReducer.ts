import { TodoAction, TodoActionTypes, TodoState } from '../../types/todo';

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: null,
  page: 0,
  limit: 10,
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    default: return state;
    case TodoActionTypes.FETCH_TODOS: return {
      ...state,
      isLoading: true,
      error: null,
    };
    case TodoActionTypes.FETCH_TODOS_SUCCESS: return {
      ...state,
      isLoading: false,
      error: null,
      todos: action.payload,
    };
    case TodoActionTypes.FETCH_TODOS_ERROR: return {
      ...state,
      isLoading: false,
      error: action.payload,
      todos: [],
    };
    case TodoActionTypes.SET_TODO_PAGE: return {
      ...state,
      page: action.payload,
    };
  }
};
