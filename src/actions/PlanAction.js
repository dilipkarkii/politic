import {
	PLAN_ADD_REQUEST,
	PLAN_ADD_SUCCESS,
	PLAN_ADD_FAIL,
	PLAN_LIST_REQUEST,
	PLAN_LIST_SUCCESS,
	PLAN_LIST_FAIL,
	PLAN_DELETE_REQUEST,
	PLAN_DELETE_SUCCESS,
	PLAN_DELETE_FAIL,
	PLAN_UPDATE_REQUEST,
	PLAN_UPDATE_SUCCESS,
	PLAN_UPDATE_FAIL,
} from "../constants/PlanConstants";
import axios from "axios";
import { baseUrl } from "../constant";

export const addPlan = (plan, vision, politician) => async (dispatch) => {
	try {
		dispatch({ type: PLAN_ADD_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`${baseUrl}plan-vision/`,
			{
				plan,
				vision,
				politician,
			},
			config
		);
		dispatch({
			type: PLAN_ADD_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: PLAN_ADD_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const listPlan = (id) => async (dispatch) => {
	try {
		dispatch({ type: PLAN_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(`${baseUrl}politician/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: PLAN_LIST_SUCCESS,
			payload: data.planandvision_set.reverse(),
		});
	} catch (err) {
		dispatch({
			type: PLAN_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
export const deletePlan = (id) => async (dispatch) => {
	try {
		dispatch({ type: PLAN_DELETE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.delete(`${baseUrl}plan-vision/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: PLAN_DELETE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: PLAN_DELETE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const updatePlan =
	(id, plan, vision, politician) => async (dispatch) => {
		try {
			dispatch({ type: PLAN_UPDATE_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.put(
				`${baseUrl}plan-vision/${id}/`,
				{
					plan,
					vision,
					politician,
				},
				config
			);
			dispatch({
				type: PLAN_UPDATE_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: PLAN_UPDATE_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
