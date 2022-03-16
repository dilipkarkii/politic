import {
	ADMINLOGIN_ADD_FAIL,
	ADMINLOGIN_ADD_REQUEST,
	ADMINLOGIN_ADD_RESET,
	ADMINLOGIN_ADD_SUCCESS,
	ADMINLOGIN_DELETE_FAIL,
	ADMINLOGIN_DELETE_REQUEST,
	ADMINLOGIN_DELETE_RESET,
	ADMINLOGIN_DELETE_SUCCESS,
	ADMINLOGIN_LIST_FAIL,
	ADMINLOGIN_LIST_REQUEST,
	ADMINLOGIN_LIST_SUCCESS,
	ADMINLOGIN_UPDATE_FAIL,
	ADMINLOGIN_UPDATE_REQUEST,
	ADMINLOGIN_UPDATE_RESET,
	ADMINLOGIN_UPDATE_SUCCESS,
} from "../constants/AdminloginConstants";

export const adminloginAddReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMINLOGIN_ADD_REQUEST:
			return {
				loading: true,
			};
		case ADMINLOGIN_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				adminlogins: action.payload,
			};
		case ADMINLOGIN_ADD_FAIL:
			return {
				loading: true,
				err: true,
				error: action.payload,
			};
		case ADMINLOGIN_ADD_RESET:
			return {};
		default:
			return state;
	}
};

export const adminloginDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMINLOGIN_DELETE_REQUEST:
			return {
				loading: true,
			};
		case ADMINLOGIN_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				adminlogin: action.payload,
			};
		case ADMINLOGIN_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case ADMINLOGIN_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const adminloginListReducer = (state = { adminlogins: [] }, action) => {
	switch (action.type) {
		case ADMINLOGIN_LIST_REQUEST:
			return {
				loading: true,
			};
		case ADMINLOGIN_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				adminlogins: action.payload,
			};
		case ADMINLOGIN_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const adminloginUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMINLOGIN_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case ADMINLOGIN_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				adminlogin: action.payload,
			};
		case ADMINLOGIN_UPDATE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case ADMINLOGIN_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};
