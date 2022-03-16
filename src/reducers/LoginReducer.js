import {
	LOGIN_ADD_FAIL,
	LOGIN_ADD_REQUEST,
	LOGIN_ADD_RESET,
	LOGIN_ADD_SUCCESS,
	LOGIN_DELETE_FAIL,
	LOGIN_DELETE_REQUEST,
	LOGIN_DELETE_RESET,
	LOGIN_DELETE_SUCCESS,
	LOGIN_LIST_FAIL,
	LOGIN_LIST_REQUEST,
	LOGIN_LIST_SUCCESS,
	LOGIN_UPDATE_FAIL,
	LOGIN_UPDATE_REQUEST,
	LOGIN_UPDATE_RESET,
	LOGIN_UPDATE_SUCCESS,
} from "../constants/LoginConstants";

export const loginAddReducer = (state = {}, action) => {
	switch (action.type) {
		case LOGIN_ADD_REQUEST:
			return {
				loading: true,
			};
		case LOGIN_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				logins: action.payload,
			};
		case LOGIN_ADD_FAIL:
			return {
				loading: true,
				err: true,
				error: action.payload,
			};
		case LOGIN_ADD_RESET:
			return {};
		default:
			return state;
	}
};

export const loginDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case LOGIN_DELETE_REQUEST:
			return {
				loading: true,
			};
		case LOGIN_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				login: action.payload,
			};
		case LOGIN_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case LOGIN_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const loginListReducer = (state = { logins: [] }, action) => {
	switch (action.type) {
		case LOGIN_LIST_REQUEST:
			return {
				loading: true,
			};
		case LOGIN_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				logins: action.payload,
			};
		case LOGIN_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const loginUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case LOGIN_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case LOGIN_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				login: action.payload,
			};
		case LOGIN_UPDATE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case LOGIN_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};
