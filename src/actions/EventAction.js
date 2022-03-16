import {
	EVENT_ADD_REQUEST,
	EVENT_ADD_SUCCESS,
	EVENT_ADD_FAIL,
	EVENT_LIST_REQUEST,
	EVENT_LIST_SUCCESS,
	EVENT_LIST_FAIL,
	EVENT_DELETE_REQUEST,
	EVENT_DELETE_SUCCESS,
	EVENT_DELETE_FAIL,
	EVENT_UPDATE_REQUEST,
	EVENT_UPDATE_SUCCESS,
	EVENT_UPDATE_FAIL,
} from "../constants/EventConstants";
import axios from "axios";
import { baseUrl } from "../constant";
import { toast } from "react-toastify";

export const addEvent =
	(
		title,
		description,
		agenda,
		location,
		date,
		time,
		link,
		image,
		organized_by
	) =>
	async (dispatch) => {
		try {
			dispatch({ type: EVENT_ADD_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			let formData = new FormData();
			formData.append("title", title);
			formData.append("description", description);
			formData.append("agenda", agenda);
			formData.append("location", location);
			formData.append("date", date);
			formData.append("time", time);
			formData.append("link", link);
			formData.append("image", image);
			formData.append("organized_by", organized_by);

			const { data } = await axios.post(
				`${baseUrl}event/`,
				formData,
				// {
				// 	image,
				// 	title,
				// 	description,
				// 	agenda,
				// 	location,
				// 	date,
				// 	time,
				// 	link,
				// 	organized_by,
				// },
				config
			);
			toast.info("Event Added", {
				autoClose: 1000,
			});
			dispatch({
				type: EVENT_ADD_SUCCESS,
				payload: data,
			});
		} catch (err) {
			toast.error("Fail To Add Event", {
				autoClose: 1000,
			});
			dispatch({
				type: EVENT_ADD_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};

export const listEvent = (id) => async (dispatch) => {
	try {
		dispatch({ type: EVENT_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(`${baseUrl}politician/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: EVENT_LIST_SUCCESS,
			payload: data.event_set.reverse(),
		});
	} catch (err) {
		dispatch({
			type: EVENT_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
export const deleteEvent = (id) => async (dispatch) => {
	try {
		dispatch({ type: EVENT_DELETE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.delete(`${baseUrl}event/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: EVENT_DELETE_SUCCESS,
			payload: data,
		});
		toast.info("Event Deleted", {
			autoClose: 1000,
		});
	} catch (err) {
		toast.error("Error In Delete", {
			autoClose: 1000,
		});
		dispatch({
			type: EVENT_DELETE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const updateEvent =
	(
		id,
		title,
		description,
		agenda,
		location,
		date,
		time,
		link,
		image,
		organized_by
	) =>
	async (dispatch) => {
		try {
			dispatch({ type: EVENT_UPDATE_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			let formData = new FormData();
			formData.append("title", title);
			formData.append("description", description);
			formData.append("agenda", agenda);
			formData.append("location", location);
			formData.append("date", date);
			formData.append("time", time);
			formData.append("link", link);
			formData.append("image", image);
			formData.append("organized_by", organized_by);
			const { data } = await axios.put(
				`${baseUrl}event/${id}/`,
				formData,
				// {
				// 	title,
				// 	description,
				// 	agenda,
				// 	location,
				// 	date,
				// 	time,
				// 	link,
				// 	organized_by,
				// },
				config
			);
			dispatch({
				type: EVENT_UPDATE_SUCCESS,
				payload: data,
			});
			toast.info("Event Updated", {
				autoClose: 1000,
			});
		} catch (err) {
			toast.info("Updated Error", {
				autoClose: 1000,
			});
			dispatch({
				type: EVENT_UPDATE_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
