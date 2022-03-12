import {
	GALLARY_ADD_FAIL,
	GALLARY_ADD_REQUEST,
	GALLARY_ADD_RESET,
	GALLARY_ADD_SUCCESS,
	GALLARY_DELETE_FAIL,
	GALLARY_DELETE_REQUEST,
	GALLARY_DELETE_RESET,
	GALLARY_DELETE_SUCCESS,
	GALLARY_LIST_FAIL,
	GALLARY_LIST_REQUEST,
	GALLARY_LIST_SUCCESS,
	GALLARY_UPDATE_FAIL,
	GALLARY_UPDATE_REQUEST,
	GALLARY_UPDATE_RESET,
	GALLARY_UPDATE_SUCCESS,
} from "../constants/GallaryConstants";

export const gallaryAddReducer = (state = {}, action) => {
	switch (action.type) {
		case GALLARY_ADD_REQUEST:
			return {
				loading: true,
			};
		case GALLARY_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				gallarys: action.payload,
			};
		case GALLARY_ADD_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case GALLARY_ADD_RESET:
			return {};
		default:
			return state;
	}
};

export const gallaryDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case GALLARY_DELETE_REQUEST:
			return {
				loading: true,
			};
		case GALLARY_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				gallary: action.payload,
			};
		case GALLARY_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case GALLARY_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const gallaryListReducer = (state = { gallarys: [] }, action) => {
	switch (action.type) {
		case GALLARY_LIST_REQUEST:
			return {
				loading: true,
			};
		case GALLARY_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				gallary: action.payload,
			};
		case GALLARY_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const gallaryUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case GALLARY_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case GALLARY_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				gallary: action.payload,
			};
		case GALLARY_UPDATE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case GALLARY_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};
