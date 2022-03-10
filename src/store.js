import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
	eventListReducer,
	eventAddReducer,
	eventDeleteReducer,
	eventUpdateReducer,
} from "./reducers/EventReducer";

import {
	planListReducer,
	planAddReducer,
	planDeleteReducer,
	planUpdateReducer,
} from "./reducers/PlanReducer";

const reducer = combineReducers({
	eventList: eventListReducer,
	eventAdd: eventAddReducer,
	eventDelete: eventDeleteReducer,
	eventUpdate: eventUpdateReducer,

	// plans
	planList: planListReducer,
	planAdd: planAddReducer,
	planDelete: planDeleteReducer,
	planUpdate: planUpdateReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
