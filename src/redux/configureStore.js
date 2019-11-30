import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import xmlHttpRequestService from "../utils/xmlHttpRequestService";
import authReducer from "./auth/reducer";
import clubReducer from "./clubs/reducer";
import topicReducer from "./topics/reducer";
import eventReducer from "./events/reducer";

const reducers = combineReducers({
  auth: authReducer,
  clubs: clubReducer,
  topics: topicReducer,
  events: eventReducer
});

const store = createStore(
  reducers,
  applyMiddleware(reduxThunk.withExtraArgument(xmlHttpRequestService))
);

export default store;
