import {
	POST_ADD_FAIL,
	POST_ADD_REQUEST,
	POST_ADD_RESET,
	POST_ADD_SUCCESS,
	POST_DELETE_FAIL,
	POST_DELETE_REQUEST,
	POST_DELETE_RESET,
	POST_DELETE_SUCCESS,
	POST_LIST_FAIL,
	POST_LIST_REQUEST,
	POST_LIST_SUCCESS,
	POST_UPDATE_FAIL,
	POST_UPDATE_REQUEST,
	POST_UPDATE_RESET,
	POST_UPDATE_SUCCESS,
} from "../constants/PostConstants";

export const PostAddReducer = (state = {}, action) => {
	switch (action.type) {
		case POST_ADD_REQUEST:
			return {
				loading: true,
			};
		case POST_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				posts: action.payload,
			};
		case POST_ADD_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case POST_ADD_RESET:
			return {};
		default:
			return state;
	}
};

export const PostDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case POST_DELETE_REQUEST:
			return {
				loading: true,
			};
		case POST_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				post: action.payload,
			};
		case POST_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case POST_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const PostListReducer = (state = { posts: [] }, action) => {
	switch (action.type) {
		case POST_LIST_REQUEST:
			return {
				loading: true,
			};
		case POST_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				posts: action.payload,
			};
		case POST_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const PostUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case POST_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case POST_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				post: action.payload,
			};
		case POST_UPDATE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case POST_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};
