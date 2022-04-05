import {
	DASHBOARD_ADD_REQUEST,
	DASHBOARD_ADD_SUCCESS,
	DASHBOARD_ADD_FAIL,
	DASHBOARD_LIST_REQUEST,
	DASHBOARD_LIST_SUCCESS,
	DASHBOARD_LIST_FAIL,
	DASHBOARD_DELETE_REQUEST,
	DASHBOARD_DELETE_SUCCESS,
	DASHBOARD_DELETE_FAIL,
	DASHBOARD_UPDATE_REQUEST,
	DASHBOARD_UPDATE_SUCCESS,
	DASHBOARD_UPDATE_FAIL,
} from "../constants/DashboardConstants";
import axios from "axios";
import { baseUrl } from "../constant";

export const addDashboard =
	(
		firstName,
		middleName,
		lastName,
		age,
		username,
		email,
		phone,
		address,
		education,
		electionArea,
		position,
		password,
		slogan,
		politicalBackground,
		description,
		flag,
		profilePhoto,
		memberSince
	) =>
	async (dispatch) => {
		try {
			dispatch({ type: DASHBOARD_ADD_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			let formData = new FormData();
			formData.append("firstName", firstName);
			formData.append("middleName", middleName);
			formData.append("lastName", lastName);
			formData.append("age", age);
			formData.append("username", username);
			formData.append("email", email);
			formData.append("phone", phone);
			formData.append("address", address);
			formData.append("education", education);
			formData.append("electionArea", electionArea);
			formData.append("position", position);
			formData.append("password", password);
			formData.append("slogan", slogan);
			formData.append("politicalBackground", politicalBackground);
			formData.append("description", description);
			formData.append("flag", flag);
			formData.append("profilePhoto", profilePhoto);
			formData.append("memberSince", memberSince);
			const { data } = await axios.post(
				`${baseUrl}politician/`,
				formData,
				config
			);
			dispatch({
				type: DASHBOARD_ADD_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: DASHBOARD_ADD_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};

export const listDashboard = (id) => async (dispatch) => {
	try {
		dispatch({ type: DASHBOARD_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(`${baseUrl}politician/?page=1`, config);
		console.log("data", data);
		dispatch({
			type: DASHBOARD_LIST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: DASHBOARD_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
export const deleteDashboard = (id) => async (dispatch) => {
	try {
		dispatch({ type: DASHBOARD_DELETE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.delete(`${baseUrl}politician/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: DASHBOARD_DELETE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: DASHBOARD_DELETE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const updateDashboard =
	(
		id,
		firstName,
		middleName,
		lastName,
		age,
		username,
		email,
		phone,
		address,
		education,
		electionArea,
		position,
		password,
		slogan,
		politicalBackground,
		description,
		flag,
		profilePhoto,
		memberSince
	) =>
	async (dispatch) => {
		try {
			dispatch({ type: DASHBOARD_UPDATE_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			let formData = new FormData();
			formData.append("firstName", firstName);
			formData.append("middleName", middleName);
			formData.append("lastName", lastName);
			formData.append("age", age);
			formData.append("username", username);
			formData.append("email", email);
			formData.append("phone", phone);
			formData.append("address", address);
			formData.append("education", education);
			formData.append("electionArea", electionArea);
			formData.append("position", position);
			formData.append("password", password);
			formData.append("slogan", slogan);
			formData.append("politicalBackground", politicalBackground);
			formData.append("description", description);
			formData.append("flag", flag);
			formData.append("profilePhoto", profilePhoto);
			formData.append("memberSince", memberSince);
			const { data } = await axios.patch(
				`${baseUrl}politician/${id}/`,
				formData,
				// {
				// 	firstName,
				// 	middleName,
				// 	lastName,
				// 	age,
				// 	username,
				// 	email,
				// 	phone,
				// 	address,
				// 	education,
				// 	electionArea,
				// 	position,
				// 	password,
				// 	slogan,
				// 	politicalBackground,
				// 	description,
				// 	flag,
				// 	profilePhoto,
				// 	memberSince,
				// },
				config
			);
			dispatch({
				type: DASHBOARD_UPDATE_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: DASHBOARD_UPDATE_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
