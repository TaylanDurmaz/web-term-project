import { types } from "./actions";

const INITIAL_STATE = { user: { role: 2 }, loggedIn: true };

function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN_ACTION_TYPE:
      return { ...state, user: action.payload.user, loggedIn: true };
    case types.LOGOUT_ACTION_TYPE:
      return { ...state, user: null, loggedIn: false };
    default:
      return state;
  }
}

export default authReducer;
