import {
	COMMENT_ADD_FAIL,
	COMMENT_ADD_REQUEST,
	COMMENT_ADD_RESET,
	COMMENT_ADD_SUCCESS,
	COMMENT_DELETE_FAIL,
	COMMENT_DELETE_REQUEST,
	COMMENT_DELETE_RESET,
	COMMENT_DELETE_SUCCESS,
	COMMENT_LIST_FAIL,
	COMMENT_LIST_REQUEST,
	COMMENT_LIST_SUCCESS,
	COMMENT_REPLY_LIST_FAIL,
	COMMENT_REPLY_LIST_REQUEST,
	COMMENT_REPLY_LIST_SUCCESS,
	COMMENT_UPDATE_FAIL,
	COMMENT_UPDATE_REQUEST,
	COMMENT_UPDATE_RESET,
	COMMENT_UPDATE_SUCCESS,
	POSTCOMMENT_LIST_FAIL,
	POSTCOMMENT_LIST_REQUEST,
	POSTCOMMENT_LIST_SUCCESS,
	POSTCOMMENT_REPLY_LIST_FAIL,
	POSTCOMMENT_REPLY_LIST_REQUEST,
	POSTCOMMENT_REPLY_LIST_SUCCESS,
} from "../constants/CommentConstants";

export const commentAddReducer = (state = {}, action) => {
	switch (action.type) {
		case COMMENT_ADD_REQUEST:
			return {
				loading: true,
			};
		case COMMENT_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				comments: action.payload,
			};
		case COMMENT_ADD_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case COMMENT_ADD_RESET:
			return {};
		default:
			return state;
	}
};

export const commentDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case COMMENT_DELETE_REQUEST:
			return {
				loading: true,
			};
		case COMMENT_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				comment: action.payload,
			};
		case COMMENT_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case COMMENT_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const commentListReducer = (state = {}, action) => {
	switch (action.type) {
		case COMMENT_LIST_REQUEST:
			return {
				loading: true,
			};
		case COMMENT_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				comments: action.payload,
			};
		case COMMENT_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};
export const replyListReducer = (state = {}, action) => {
	switch (action.type) {
		case COMMENT_REPLY_LIST_REQUEST:
			return {
				loading: true,
			};
		case COMMENT_REPLY_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				comment: action.payload,
			};
		case COMMENT_REPLY_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const commentUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case COMMENT_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case COMMENT_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				comment: action.payload,
			};
		case COMMENT_UPDATE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case COMMENT_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};


export const postcommentListReducer = (state = {}, action) => {
	switch (action.type) {
		case POSTCOMMENT_LIST_REQUEST:
			return {
				loading: true,
			};
		case POSTCOMMENT_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				postcomments: action.payload,
			};
		case POSTCOMMENT_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};
export const postreplyListReducer = (state = {}, action) => {
	switch (action.type) {
		case POSTCOMMENT_REPLY_LIST_REQUEST:
			return {
				loading: true,
			};
		case POSTCOMMENT_REPLY_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				postcomment: action.payload,
			};
		case POSTCOMMENT_REPLY_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};
