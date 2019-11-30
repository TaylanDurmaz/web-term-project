import { saveEventListActionCreate } from "./actions";

export const fetchEventList = () => async (dispatch, getState, service) => {
  const response = await service.xmlFetch({
    path: "events",
    method: "GET",
    sendToken: true
  });
  await dispatch(saveEventListActionCreate(response));
  return response;
};

export const fetchUpcomingEventsList = () => async (
  dispatch,
  getState,
  service
) => {
  const response = await service.xmlFetch({
    path: "events/upcoming",
    method: "GET",
    sendToken: true
  });
  return response;
};

export const createEvent = eventConfig => async (
  dispatch,
  getState,
  service
) => {
  const response = await service.xmlFetch({
    path: "events",
    method: "POST",
    sendToken: true,
    body: eventConfig
  });
  return response;
};
