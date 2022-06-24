import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_LOADING } from './types';

const initialState = {
  isLoading: false,
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
    case COUNTER_DECREMENT: return { ...state, value: state.value - 1 };
    case COUNTER_INCREMENT: return { ...state, value: state.value + 1 };
    case COUNTER_LOADING: return { ...state, isLoading: action.payload };
  }
};

export {
  counterReducer,
};
