// TYPES
const SAVE_TOPIC_LIST = "SAVE_TOPIC_LIST";
const CREATE_TOPIC = "CREATE_TOPIC";

export const types = {
  SAVE_TOPIC_LIST,
  CREATE_TOPIC
};

// ACTION CREATORS
export const saveTopicListActionCreate = topicList => ({
  type: SAVE_TOPIC_LIST,
  payload: topicList
});
