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

export const addPost =
	(title, description, agenda, location, date, time, link, organized_by) =>
	async (dispatch) => {
		try {
			dispatch({ type: POST_ADD_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.post(
				`${baseUrl}create_post/`,
				{
					title,
					description,
					agenda,
					location,
					date,
					time,
					link,
					organized_by,
				},
				config
			);
			dispatch({
				type: POST_ADD_SUCCESS,
				payload: data,
			});
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
		const { data } = await axios.delete(`${baseUrl}create_set/${id}/`, config);
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
	(id, title, description, agenda, location, date, time, link, organized_by) =>
	async (dispatch) => {
		try {
			dispatch({ type: POST_UPDATE_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.put(
				`${baseUrl}POST/${id}/`,
				{
					title,
					description,
					agenda,
					location,
					date,
					time,
					link,
					organized_by,
				},
				config
			);
			dispatch({
				type: POST_UPDATE_SUCCESS,
				payload: data,
			});
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
