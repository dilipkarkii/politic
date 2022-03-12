import {
	POSTIMAGE_ADD_FAIL,
	POSTIMAGE_ADD_REQUEST,
	POSTIMAGE_ADD_RESET,
	POSTIMAGE_ADD_SUCCESS,
	POSTIMAGE_DELETE_FAIL,
	POSTIMAGE_DELETE_REQUEST,
	POSTIMAGE_DELETE_RESET,
	POSTIMAGE_DELETE_SUCCESS,
	POSTIMAGE_LIST_FAIL,
	POSTIMAGE_LIST_REQUEST,
	POSTIMAGE_LIST_SUCCESS,
	POSTIMAGE_UPDATE_FAIL,
	POSTIMAGE_UPDATE_REQUEST,
	POSTIMAGE_UPDATE_RESET,
	POSTIMAGE_UPDATE_SUCCESS,
} from "../constants/PostImageConstants";

export const PostImageAddReducer = (state = {}, action) => {
	switch (action.type) {
		case POSTIMAGE_ADD_REQUEST:
			return {
				loading: true,
			};
		case POSTIMAGE_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				postimages: action.payload,
			};
		case POSTIMAGE_ADD_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case POSTIMAGE_ADD_RESET:
			return {};
		default:
			return state;
	}
};

export const PostImageDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case POSTIMAGE_DELETE_REQUEST:
			return {
				loading: true,
			};
		case POSTIMAGE_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				postimage: action.payload,
			};
		case POSTIMAGE_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case POSTIMAGE_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const PostImageListReducer = (state = { postimages: [] }, action) => {
	switch (action.type) {
		case POSTIMAGE_LIST_REQUEST:
			return {
				loading: true,
			};
		case POSTIMAGE_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				postimages: action.payload,
			};
		case POSTIMAGE_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const PostImageUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case POSTIMAGE_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case POSTIMAGE_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				postimage: action.payload,
			};
		case POSTIMAGE_UPDATE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case POSTIMAGE_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};
