import {
	GALLARY_ADD_REQUEST,
	GALLARY_ADD_SUCCESS,
	GALLARY_ADD_FAIL,
	GALLARY_LIST_REQUEST,
	GALLARY_LIST_SUCCESS,
	GALLARY_LIST_FAIL,
	GALLARY_DELETE_REQUEST,
	GALLARY_DELETE_SUCCESS,
	GALLARY_DELETE_FAIL,
	GALLARY_UPDATE_REQUEST,
	GALLARY_UPDATE_SUCCESS,
	GALLARY_UPDATE_FAIL,
} from "../constants/GallaryConstants";
import axios from "axios";
import { baseUrl } from "../constant";

export const addGallary = (image, description, owner) => async (dispatch) => {
	try {
		dispatch({ type: GALLARY_ADD_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`${baseUrl}gallery/`,
			{
				image,
				description,
				owner,
			},
			config
		);
		dispatch({
			type: GALLARY_ADD_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: GALLARY_ADD_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const listGallary = (id) => async (dispatch) => {
	try {
		dispatch({ type: GALLARY_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(`${baseUrl}politician/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: GALLARY_LIST_SUCCESS,
			payload: data.gallery_set.reverse(),
		});
	} catch (err) {
		dispatch({
			type: GALLARY_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
export const deleteGallary = (id) => async (dispatch) => {
	try {
		dispatch({ type: GALLARY_DELETE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.delete(`${baseUrl}gallary/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: GALLARY_DELETE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: GALLARY_DELETE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const updateGallary =
	(id, image, description, owner) => async (dispatch) => {
		try {
			dispatch({ type: GALLARY_UPDATE_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.put(
				`${baseUrl}gallary/${id}/`,
				{
					image,
					description,
					owner,
				},
				config
			);
			dispatch({
				type: GALLARY_UPDATE_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: GALLARY_UPDATE_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
