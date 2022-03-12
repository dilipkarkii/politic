import {
	PERSONAL_ADD_REQUEST,
	PERSONAL_ADD_SUCCESS,
	PERSONAL_ADD_FAIL,
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
  memberSince) =>
	async (dispatch) => {
		try {
			dispatch({ type: PERSONAL_ADD_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.post(
				`${baseUrl}politician/`,
				{
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
					memberSince,
				},
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
			payload: data.reverse(),
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
	(id, title, description, agenda, location, date, time, link, organized_by) =>
	async (dispatch) => {
		try {
			dispatch({ type: PERSONAL_UPDATE_REQUEST });
			const config = {
				Headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.put(
				`${baseUrl}politician/${id}/`,
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
