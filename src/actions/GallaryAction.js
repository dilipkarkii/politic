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
		let formData = new FormData();
		formData.append("image", image);
		formData.append("description", description);
		formData.append("owner", owner);
		const { data } = await axios.post(
			`${baseUrl}gallery/`,

			formData,
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
		// const config = {
		// 	Headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// };
		const { data } = await axios.delete(`${baseUrl}gallery/${id}/`);
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
			let config = {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			};
			const formData = new FormData();
			formData.append("description", description);
			formData.append("image", image);
			formData.append("owner", owner);
			const { data } = await axios.put(
				`http://44.199.61.81/gallery/${id}/`,
				formData,
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
