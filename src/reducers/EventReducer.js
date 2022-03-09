import {
	EVENT_ADD_FAIL,
	EVENT_ADD_REQUEST,
	EVENT_ADD_RESET,
	EVENT_ADD_SUCCESS,
	EVENT_DELETE_FAIL,
	EVENT_DELETE_REQUEST,
	EVENT_DELETE_RESET,
	EVENT_DELETE_SUCCESS,
	EVENT_LIST_FAIL,
	EVENT_LIST_REQUEST,
	EVENT_LIST_SUCCESS,
	EVENT_UPDATE_FAIL,
	EVENT_UPDATE_REQUEST,
	EVENT_UPDATE_RESET,
	EVENT_UPDATE_SUCCESS,
} from "../constants/EventConstants";

export const eventAddReducer = (state = {}, action) => {
	switch (action.type) {
		case EVENT_ADD_REQUEST:
			return {
				loading: true,
			};
		case EVENT_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				events: action.payload,
			};
		case EVENT_ADD_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case EVENT_ADD_RESET:
			return {};
		default:
			return state;
	}
};

export const eventDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case EVENT_DELETE_REQUEST:
			return {
				loading: true,
			};
		case EVENT_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				event: action.payload,
			};
		case EVENT_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case EVENT_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const eventListReducer = (state = { events: [] }, action) => {
	switch (action.type) {
		case EVENT_LIST_REQUEST:
			return {
				loading: true,
			};
		case EVENT_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				events: action.payload,
			};
		case EVENT_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const eventUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case EVENT_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case EVENT_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				event: action.payload,
			};
		case EVENT_UPDATE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case EVENT_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};
