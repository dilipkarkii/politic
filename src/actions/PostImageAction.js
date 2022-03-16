import {
	POSTIMAGE_ADD_REQUEST,
	POSTIMAGE_ADD_SUCCESS,
	POSTIMAGE_ADD_FAIL,
	POSTIMAGE_LIST_REQUEST,
	POSTIMAGE_LIST_SUCCESS,
	POSTIMAGE_LIST_FAIL,
	POSTIMAGE_DELETE_REQUEST,
	POSTIMAGE_DELETE_SUCCESS,
	POSTIMAGE_DELETE_FAIL,
	POSTIMAGE_UPDATE_REQUEST,
	POSTIMAGE_UPDATE_SUCCESS,
	POSTIMAGE_UPDATE_FAIL,
} from "../constants/PostImageConstants";
import axios from "axios";
import { baseUrl } from "../constant";

export const addPostImage = (image, post_id) => async (dispatch) => {
	try {
		dispatch({ type: POSTIMAGE_ADD_REQUEST });

		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};

		var formdata = new FormData();
		formdata.append("image", image, image.name);
		formdata.append("post", post_id);

		const { data } = await axios.post(
			`${baseUrl}create_post_image/`,
			formdata,
			config
		);
		dispatch({
			type: POSTIMAGE_ADD_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: POSTIMAGE_ADD_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const listPostImage = (id) => async (dispatch) => {
	try {
		dispatch({ type: POSTIMAGE_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(`${baseUrl}politician/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: POSTIMAGE_LIST_SUCCESS,
			payload: data.postimage_set.reverse(),
		});
	} catch (err) {
		dispatch({
			type: POSTIMAGE_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
export const deletePostImage = (id) => async (dispatch) => {
	try {
		dispatch({ type: POSTIMAGE_DELETE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.delete(
			`${baseUrl}create_post_image/${id}/`,
			config
		);
		console.log("data", data);
		dispatch({
			type: POSTIMAGE_DELETE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: POSTIMAGE_DELETE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const updatePostImage = (id, image, post) => async (dispatch) => {
	try {
		dispatch({ type: POSTIMAGE_UPDATE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.put(
			`${baseUrl}create_post_imageE/${id}/`,
			{
				image,
				post,
			},
			config
		);
		dispatch({
			type: POSTIMAGE_UPDATE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: POSTIMAGE_UPDATE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
