// TYPES
const SAVE_EVENT_LIST = "SAVE_EVENT_LIST";

export const types = {
  SAVE_EVENT_LIST
};

// ACTION CREATORS
export const saveEventListActionCreate = eventList => ({
  type: SAVE_EVENT_LIST,
  payload: eventList
});
