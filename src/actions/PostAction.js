import {
	POST_ADD_REQUEST,
	POST_ADD_SUCCESS,
	POST_ADD_FAIL,
	POST_LIST_REQUEST,
	POST_LIST_SUCCESS,
	POST_LIST_FAIL,
	POST_DELETE_REQUEST,
	POST_DELETE_SUCCESS,
	POST_DELETE_FAIL,
	POST_UPDATE_REQUEST,
	POST_UPDATE_SUCCESS,
	POST_UPDATE_FAIL,
} from "../constants/PostConstants";
import axios from "axios";
import { baseUrl } from "../constant";
import { POSTIMAGE_ADD_SUCCESS } from "../constants/PostImageConstants";
import { POSTIMAGE_UPDATE_SUCCESS } from "../constants/PostImageConstants";
import { addPostImage } from "./PostImageAction";

export const addPost =
	(title, description, posted_by, image) => async (dispatch) => {
		try {
			dispatch({ type: POST_ADD_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			let { data } = await axios.post(
				`${baseUrl}create_post/`,
				{
					title,
					description,
					posted_by,
				},
				config
			);
			dispatch({
				type: POST_ADD_SUCCESS,
				payload: data,
			});
			if (data.id) {
				// addPostImage(image, data.id);
				const config = {
					Headers: {
						"Content-Type": "application/json",
					},
				};
				var formdata = new FormData();
				formdata.append("image", image, image.name);
				formdata.append("post", data.id);

				const res = await axios.post(
					`${baseUrl}create_post_image/`,
					formdata,
					config
				);
				dispatch({
					type: POSTIMAGE_ADD_SUCCESS,
					payload: res.data,
				});
				console.log("data", data.id);
			}
		} catch (err) {
			dispatch({
				type: POST_ADD_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};

export const listPost = (id) => async (dispatch) => {
	try {
		dispatch({ type: POST_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(`${baseUrl}politician/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: POST_LIST_SUCCESS,
			payload: data.post_set.reverse(),
		});
	} catch (err) {
		dispatch({
			type: POST_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
export const deletePost = (id) => async (dispatch) => {
	try {
		dispatch({ type: POST_DELETE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.delete(`${baseUrl}create_post/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: POST_DELETE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: POST_DELETE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const updatePost =
	(title, description, image, post_id, posted_by) => async (dispatch) => {
		try {
			dispatch({ type: POST_UPDATE_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.put(
				`${baseUrl}create_post/${post_id}/`,
				{
					title,
					description,

					posted_by,
				},
				config
			);
			dispatch({
				type: POST_UPDATE_SUCCESS,
				payload: data,
			});
			if (data.id) {
				// addPostImage(image, data.id);
				const config = {
					Headers: {
						"Content-Type": "application/json",
					},
				};

				var formdata = new FormData();
				formdata.append("image", image, image.name);
				formdata.append("post", data.id);

				const res = await axios.put(
					`${baseUrl}create_post_image/${post_id}/`,
					formdata,
					config
				);
				dispatch({
					type: POSTIMAGE_UPDATE_SUCCESS,
					payload: res.data,
				});
				console.log("data", data.id);
			}
		} catch (err) {
			dispatch({
				type: POST_UPDATE_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
