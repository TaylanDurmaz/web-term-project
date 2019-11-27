import { types } from "./actions";

const INITIAL_STATE = { clubList: [], count: 0 };

function clubReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SAVE_CLUB_LIST:
      return {
        ...state,
        clubList: action.payload.data,
        count: action.payload.count
      };
    default:
      return state;
  }
}

export default clubReducer;
