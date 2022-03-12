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

export const addPostImage =
	(title, description, agenda, location, date, time, link, organized_by) =>
	async (dispatch) => {
		try {
			dispatch({ type: POSTIMAGE_ADD_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.post(
				`${baseUrl}POSTIMAGE/`,
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
			payload: data.POSTIMAGE_set.reverse(),
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
		const { data } = await axios.delete(`${baseUrl}POSTIMAGE/${id}/`, config);
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

export const updatePOSTIMAGE =
	(id, title, description, agenda, location, date, time, link, organized_by) =>
	async (dispatch) => {
		try {
			dispatch({ type: POSTIMAGE_UPDATE_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.put(
				`${baseUrl}POSTIMAGE/${id}/`,
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
