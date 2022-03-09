import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
	eventListReducer,
	eventAddReducer,
	eventDeleteReducer,
	eventUpdateReducer,
} from "./reducers/EventReducer";

const reducer = combineReducers({
	eventList: eventListReducer,
	eventAdd: eventAddReducer,
	eventDelete: eventDeleteReducer,
	eventUpdate: eventUpdateReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
