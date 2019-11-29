import { types } from "./actions";

const INITIAL_STATE = { topicList: [], count: 0 };

function topicReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SAVE_TOPIC_LIST:
      return {
        ...state,
        topicList: action.payload.data,
        count: action.payload.count
      };
    default:
      return state;
  }
}

export default topicReducer;
