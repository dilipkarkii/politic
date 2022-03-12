import {
	AWARD_ADD_REQUEST,
	AWARD_ADD_SUCCESS,
	AWARD_ADD_FAIL,
	AWARD_LIST_REQUEST,
	AWARD_LIST_SUCCESS,
	AWARD_LIST_FAIL,
	AWARD_DELETE_REQUEST,
	AWARD_DELETE_SUCCESS,
	AWARD_DELETE_FAIL,
	AWARD_UPDATE_REQUEST,
	AWARD_UPDATE_SUCCESS,
	AWARD_UPDATE_FAIL,
} from "../constants/AwardConstants";
import axios from "axios";
import { baseUrl } from "../constant";

export const addAward = (awards, politician) => async (dispatch) => {
	try {
		dispatch({ type: AWARD_ADD_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`${baseUrl}award/`,
			{
				awards,
				politician,
			},
			config
		);
		dispatch({
			type: AWARD_ADD_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: AWARD_ADD_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const listAward = (id) => async (dispatch) => {
	try {
		dispatch({ type: AWARD_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(`${baseUrl}politician/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: AWARD_LIST_SUCCESS,
			payload: data.politicianawards_set.reverse(),
		});
	} catch (err) {
		dispatch({
			type: AWARD_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
export const deleteAward = (id) => async (dispatch) => {
	try {
		dispatch({ type: AWARD_DELETE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.delete(`${baseUrl}award/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: AWARD_DELETE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: AWARD_DELETE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const updateAward = (id, awards, politician) => async (dispatch) => {
	try {
		dispatch({ type: AWARD_UPDATE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.put(
			`${baseUrl}award/${id}/`,
			{
				awards,
				politician,
			},
			config
		);
		dispatch({
			type: AWARD_UPDATE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: AWARD_UPDATE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
