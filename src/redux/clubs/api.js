import { saveClubListActionCreator } from "./actions";

export const fetchClubList = () => async (dispatch, getState, service) => {
  const response = await service.xmlFetch({
    path: "clubs",
    method: "GET",
    sendToken: true
  });
  await dispatch(saveClubListActionCreator(response));
  return response;
};

export const createClub = clubConfig => async (dispatch, getState, service) => {
  const response = await service.xmlFetch({
    path: "clubs",
    method: "POST",
    sendToken: true,
    body: clubConfig
  });
  return response;
};
