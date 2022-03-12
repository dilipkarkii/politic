import {
	CONTRIBUTION_ADD_REQUEST,
	CONTRIBUTION_ADD_SUCCESS,
	CONTRIBUTION_ADD_FAIL,
	CONTRIBUTION_LIST_REQUEST,
	CONTRIBUTION_LIST_SUCCESS,
	CONTRIBUTION_LIST_FAIL,
	CONTRIBUTION_DELETE_REQUEST,
	CONTRIBUTION_DELETE_SUCCESS,
	CONTRIBUTION_DELETE_FAIL,
	CONTRIBUTION_UPDATE_REQUEST,
	CONTRIBUTION_UPDATE_SUCCESS,
	CONTRIBUTION_UPDATE_FAIL,
} from "../constants/ContributionConstants";
import axios from "axios";
import { baseUrl } from "../constant";

export const addContribution =
	(contributions, politician) => async (dispatch) => {
		try {
			dispatch({ type: CONTRIBUTION_ADD_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.post(
				`${baseUrl}contribution/`,
				{
					contributions,
					politician,
				},
				config
			);
			dispatch({
				type: CONTRIBUTION_ADD_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: CONTRIBUTION_ADD_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};

export const listContribution = (id) => async (dispatch) => {
	try {
		dispatch({ type: CONTRIBUTION_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(`${baseUrl}politician/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: CONTRIBUTION_LIST_SUCCESS,
			payload: data.politiciancontributions_set.reverse(),
		});
	} catch (err) {
		dispatch({
			type: CONTRIBUTION_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
export const deleteContribution = (id) => async (dispatch) => {
	try {
		dispatch({ type: CONTRIBUTION_DELETE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.delete(
			`${baseUrl}contribution/${id}/`,
			config
		);
		console.log("data", data);
		dispatch({
			type: CONTRIBUTION_DELETE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: CONTRIBUTION_DELETE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const updateContribution =
	(id, contributions, politician) => async (dispatch) => {
		try {
			dispatch({ type: CONTRIBUTION_UPDATE_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.put(
				`${baseUrl}contribution/${id}/`,
				{
					contributions,
					politician,
				},
				config
			);
			dispatch({
				type: CONTRIBUTION_UPDATE_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: CONTRIBUTION_UPDATE_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
