// TYPES
const LOGIN_ACTION_TYPE = "LOGIN_ACTION_TYPE";
const LOGOUT_ACTION_TYPE = "LOGOUT_ACTION_TYPE";

export const types = {
  LOGIN_ACTION_TYPE,
  LOGOUT_ACTION_TYPE
};

// ACTION CREATORS
export const loginActionCreator = userConfig => ({
  type: LOGIN_ACTION_TYPE,
  payload: userConfig
});
export const logoutActionCreator = () => ({
  type: LOGOUT_ACTION_TYPE
});
