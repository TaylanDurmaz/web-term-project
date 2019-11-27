import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import xmlHttpRequestService from "../utils/xmlHttpRequestService";
import authReducer from "./auth/reducer";
import clubReducer from "./clubs/reducer";

const reducers = combineReducers({
  auth: authReducer,
  clubs: clubReducer
});

const store = createStore(
  reducers,
  applyMiddleware(reduxThunk.withExtraArgument(xmlHttpRequestService))
);

export default store;
