import {
	COMMENT_ADD_REQUEST,
	COMMENT_ADD_SUCCESS,
	COMMENT_ADD_FAIL,
	COMMENT_LIST_REQUEST,
	COMMENT_LIST_SUCCESS,
	COMMENT_LIST_FAIL,
	COMMENT_DELETE_REQUEST,
	COMMENT_DELETE_SUCCESS,
	COMMENT_DELETE_FAIL,
	COMMENT_UPDATE_REQUEST,
	COMMENT_UPDATE_SUCCESS,
	COMMENT_UPDATE_FAIL,
	COMMENT_REPLY_LIST_REQUEST,
	COMMENT_REPLY_LIST_SUCCESS,
	COMMENT_REPLY_LIST_FAIL,
	POSTCOMMENT_REPLY_REQUEST,
	POSTCOMMENT_REPLY_SUCCESS,
	POSTCOMMENT_REPLY_FAIL,
	FEEDBACKCOMMENT_REPLY_REQUEST,
	FEEDBACKCOMMENT_REPLY_SUCCESS,
	FEEDBACKCOMMENT_REPLY_FAIL,
	POSTCOMMENT_LIST_REQUEST,
	POSTCOMMENT_LIST_SUCCESS,
	POSTCOMMENT_LIST_FAIL,
	SUGGESTION_LIST_REQUEST,
	SUGGESTION_LIST_SUCCESS,
	SUGGESTION_LIST_FAIL,
} from "../constants/CommentConstants";
import axios from "axios";
import { baseUrl } from "../constant";

export const addComment = (title, posted_by) => async (dispatch) => {
	try {
		dispatch({ type: COMMENT_ADD_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`${baseUrl}tweetslike/`,
			{
				title,
				posted_by,
			},
			config
		);
		dispatch({
			type: COMMENT_ADD_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: COMMENT_ADD_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const listComment = (userId) => async (dispatch) => {
	try {
		dispatch({ type: COMMENT_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(
			`${baseUrl}tweetslike/?posted_by=${userId}`,
			config
		);
		console.log("data", data);
		dispatch({
			type: COMMENT_LIST_SUCCESS,
			payload: data.reverse(),
		});
	} catch (err) {
		dispatch({
			type: COMMENT_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
export const listReply = (comment_id) => async (dispatch) => {
	try {
		dispatch({ type: COMMENT_REPLY_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(
			`${baseUrl}tweets/comment/${comment_id}/`,
			config
		);
		console.log("data", data);
		dispatch({
			type: COMMENT_REPLY_LIST_SUCCESS,
			payload: data.reverse(),
		});
	} catch (err) {
		dispatch({
			type: COMMENT_REPLY_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
export const deleteComment = (id) => async (dispatch) => {
	try {
		dispatch({ type: COMMENT_DELETE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.delete(`${baseUrl}comments/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: COMMENT_DELETE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: COMMENT_DELETE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const updateCOMMENT = (id, comments, politician) => async (dispatch) => {
	try {
		dispatch({ type: COMMENT_UPDATE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.put(
			`${baseUrl}COMMENT/${id}/`,
			{
				comments,
				politician,
			},
			config
		);
		dispatch({
			type: COMMENT_UPDATE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: COMMENT_UPDATE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const listPostcomment = (id) => async (dispatch) => {
	try {
		dispatch({ type: POSTCOMMENT_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(`${baseUrl}postlisting/${id}`, config);
		console.log("data", data);
		dispatch({
			type: POSTCOMMENT_LIST_SUCCESS,
			payload: data.commentsonpost_set.reverse(),
		});
	} catch (err) {
		dispatch({
			type: POSTCOMMENT_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
export const replyCommentPost =
	(reply_text, user, politician, comment) => async (dispatch) => {
		try {
			dispatch({ type: POSTCOMMENT_REPLY_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.post(
				`${baseUrl}reply/`,
				{ reply_text, user, politician, comment },
				config
			);
			console.log("data", data);
			dispatch({
				type: POSTCOMMENT_REPLY_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: POSTCOMMENT_REPLY_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};

export const listSuggestion = (userId) => async (dispatch) => {
	try {
		dispatch({ type: SUGGESTION_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(
			`${baseUrl}suggestation/?politician_id=${userId}`,
			config
		);
		console.log("data", data);
		dispatch({
			type: SUGGESTION_LIST_SUCCESS,
			payload: data.reverse(),
		});
	} catch (err) {
		dispatch({
			type: SUGGESTION_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const replyFeedbackPost =
	(reply_text, user, politician, comment) => async (dispatch) => {
		try {
			dispatch({ type: FEEDBACKCOMMENT_REPLY_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.post(
				`${baseUrl}tweets/reply/`,
				{ reply_text, user, politician, comment },
				config
			);
			console.log("data", data);
			dispatch({
				type: FEEDBACKCOMMENT_REPLY_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: FEEDBACKCOMMENT_REPLY_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
