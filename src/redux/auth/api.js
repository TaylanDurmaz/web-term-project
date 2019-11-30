import {
  loginActionCreator,
  logoutActionCreator,
  signUpActionCreater
} from "./actions";

export const tryLogin = ({ email, password }) => async (
  dispatch,
  getState,
  service
) => {
  const response = await service.xmlFetch({
    path: "login",
    method: "POST",
    body: { email, password }
  });
  await window.localStorage.setItem("jwt", response.token);
  await dispatch(loginActionCreator(response));
  return response;
};

export const signUp = userConfig => async (dispatch, getState, service) => {
  const response = await service.xmlFetch({
    path: "signup",
    method: "POST",
    body: userConfig
  });
  return response;
};

export const logout = () => async (dispatch, getState, service) => {
  await window.localStorage.setItem("jwt", null);
  await dispatch(logoutActionCreator());
};
