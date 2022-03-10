import {
	ACHIVEMENT_ADD_REQUEST,
	ACHIVEMENT_ADD_SUCCESS,
	ACHIVEMENT_ADD_FAIL,
	ACHIVEMENT_LIST_REQUEST,
	ACHIVEMENT_LIST_SUCCESS,
	ACHIVEMENT_LIST_FAIL,
	ACHIVEMENT_DELETE_REQUEST,
	ACHIVEMENT_DELETE_SUCCESS,
	ACHIVEMENT_DELETE_FAIL,
	ACHIVEMENT_UPDATE_REQUEST,
	ACHIVEMENT_UPDATE_SUCCESS,
	ACHIVEMENT_UPDATE_FAIL,
} from "../constants/AchivementConstants";
import axios from "axios";
import { baseUrl } from "../constant";

export const addAchivement =
	(title, description, agenda, location, date, time, link, organized_by) =>
	async (dispatch) => {
		try {
			dispatch({ type: ACHIVEMENT_ADD_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.post(
				`${baseUrl}achievement/`,
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
				type: ACHIVEMENT_ADD_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: ACHIVEMENT_ADD_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};

export const listAchivement = (id) => async (dispatch) => {
	try {
		dispatch({ type: ACHIVEMENT_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(`${baseUrl}politician/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: ACHIVEMENT_LIST_SUCCESS,
			payload: data.politicianachievements_set.reverse(),
		});
	} catch (err) {
		dispatch({
			type: ACHIVEMENT_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
export const deleteAchivement = (id) => async (dispatch) => {
	try {
		dispatch({ type: ACHIVEMENT_DELETE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.delete(`${baseUrl}achievement/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: ACHIVEMENT_DELETE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: ACHIVEMENT_DELETE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const updateAchivement =
	(id, title, description, agenda, location, date, time, link, organized_by) =>
	async (dispatch) => {
		try {
			dispatch({ type: ACHIVEMENT_UPDATE_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.put(
				`${baseUrl}achievement/${id}/`,
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
				type: ACHIVEMENT_UPDATE_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: ACHIVEMENT_UPDATE_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
