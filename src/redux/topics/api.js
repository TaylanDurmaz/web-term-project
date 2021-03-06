import { saveTopicListActionCreate } from "./actions";

export const fetchTopicList = () => async (dispatch, getState, service) => {
  const response = await service.xmlFetch({
    path: "topics",
    method: "GET",
    sendToken: true
  });
  await dispatch(saveTopicListActionCreate(response));
  return response;
};

export const fetchHotTopicList = () => async (dispatch, getState, service) => {
  const response = await service.xmlFetch({
    path: "topics/hot",
    method: "GET",
    sendToken: true
  });
  return response;
};

export const createTopic = topicConfig => async (
  dispatch,
  getState,
  service
) => {
  const response = await service.xmlFetch({
    path: "topics",
    method: "POST",
    sendToken: true,
    body: topicConfig
  });
  return response;
};

export const deleteTopic = topicId => async (dispatch, getState, service) => {
  const response = await service.xmlFetch({
    path: `topics/${topicId}`,
    method: "DELETE",
    sendToken: true
  });
  return response;
};
