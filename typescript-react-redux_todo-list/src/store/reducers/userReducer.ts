import { UserAction, UserActionTypes, UserState } from '../../types/user';

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    default: return state;
    case UserActionTypes.FETCH_USERS: return {
      ...state,
      isLoading: true,
      error: null,
    };
    case UserActionTypes.FETCH_USERS_SUCCESS: return {
      isLoading: false,
      error: null,
      users: action.payload,
    };
    case UserActionTypes.FETCH_USERS_ERROR: return {
      isLoading: false,
      error: action.payload,
      users: [],
    };
  }
};
