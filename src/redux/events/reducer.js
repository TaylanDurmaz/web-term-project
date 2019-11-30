import { types } from "./actions";

const INITIAL_STATE = { eventList: [], count: 0 };

function eventReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SAVE_EVENT_LIST:
      return {
        ...state,
        eventList: action.payload.data,
        count: action.payload.count
      };
    default:
      return state;
  }
}

export default eventReducer;
