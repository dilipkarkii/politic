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

export const addEvent =
	(title, description, agenda, location, date, time, link, organized_by) =>
	async (dispatch) => {
		try {
			dispatch({ type: EVENT_ADD_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.post(
				`${baseUrl}event/`,
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
				type: EVENT_ADD_SUCCESS,
				payload: data,
			});
		} catch (err) {
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
	} catch (err) {
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
	(id, title, description, agenda, location, date, time, link, organized_by) =>
	async (dispatch) => {
		try {
			dispatch({ type: EVENT_UPDATE_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.put(
				`${baseUrl}event/${id}/`,
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
				type: EVENT_UPDATE_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: EVENT_UPDATE_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
