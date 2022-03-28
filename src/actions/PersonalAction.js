import {
	PERSONAL_ADD_REQUEST,
	PERSONAL_ADD_SUCCESS,
	PERSONAL_ADD_FAIL,
	MANIFESTO_ADD_REQUEST,
	MANIFESTO_ADD_SUCCESS,
	MANIFESTO_ADD_FAIL,
	PERSONAL_LIST_REQUEST,
	PERSONAL_LIST_SUCCESS,
	PERSONAL_LIST_FAIL,
	PERSONAL_DELETE_REQUEST,
	PERSONAL_DELETE_SUCCESS,
	PERSONAL_DELETE_FAIL,
	PERSONAL_UPDATE_REQUEST,
	PERSONAL_UPDATE_SUCCESS,
	PERSONAL_UPDATE_FAIL,
} from "../constants/PersonalConstants";
import axios from "axios";
import { baseUrl } from "../constant";

export const addPersonal =
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
			dispatch({ type: PERSONAL_ADD_REQUEST });
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
				type: PERSONAL_ADD_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: PERSONAL_ADD_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};

export const listPersonal = (id) => async (dispatch) => {
	try {
		dispatch({ type: PERSONAL_LIST_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(`${baseUrl}politician/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: PERSONAL_LIST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: PERSONAL_LIST_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
export const deletePersonal = (id) => async (dispatch) => {
	try {
		dispatch({ type: PERSONAL_DELETE_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.delete(`${baseUrl}politician/${id}/`, config);
		console.log("data", data);
		dispatch({
			type: PERSONAL_DELETE_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: PERSONAL_DELETE_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};

export const updatePersonal =
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
		slogan,
		politicalBackground,
		description,
		// flag,
		// profilePhoto,
		memberSince,
		id
	) =>
	async (dispatch) => {
		try {
			dispatch({ type: PERSONAL_UPDATE_REQUEST });
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
			// formData.append("password", password);
			formData.append("slogan", slogan);
			formData.append("politicalBackground", politicalBackground);
			formData.append("description", description);
			// formData.append("flag", flag);
			// formData.append("profilePhoto", profilePhoto);
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
				type: PERSONAL_UPDATE_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: PERSONAL_UPDATE_FAIL,
				paylod:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};

export const addManifesto = (manifesto, politician) => async (dispatch) => {
	try {
		dispatch({ type: MANIFESTO_ADD_REQUEST });
		const config = {
			Headers: {
				"Content-Type": "application/json",
			},
		};
		let formData = new FormData();
		formData.append("manifesto", manifesto);
		formData.append("politician", politician);
		const { data } = await axios.post(
			`${baseUrl}manifesto/`,

			formData,
			config
		);
		dispatch({
			type: MANIFESTO_ADD_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: MANIFESTO_ADD_FAIL,
			paylod:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message,
		});
	}
};
