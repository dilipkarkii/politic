import {
	ACHIVEMENT_ADD_FAIL,
	ACHIVEMENT_ADD_REQUEST,
	ACHIVEMENT_ADD_RESET,
	ACHIVEMENT_ADD_SUCCESS,
	ACHIVEMENT_DELETE_FAIL,
	ACHIVEMENT_DELETE_REQUEST,
	ACHIVEMENT_DELETE_RESET,
	ACHIVEMENT_DELETE_SUCCESS,
	ACHIVEMENT_LIST_FAIL,
	ACHIVEMENT_LIST_REQUEST,
	ACHIVEMENT_LIST_SUCCESS,
	ACHIVEMENT_UPDATE_FAIL,
	ACHIVEMENT_UPDATE_REQUEST,
	ACHIVEMENT_UPDATE_RESET,
	ACHIVEMENT_UPDATE_SUCCESS,
} from "../constants/AchivementConstants";

export const AchivementAddReducer = (state = {}, action) => {
	switch (action.type) {
		case ACHIVEMENT_ADD_REQUEST:
			return {
				loading: true,
			};
		case ACHIVEMENT_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				achivements: action.payload,
			};
		case ACHIVEMENT_ADD_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case ACHIVEMENT_ADD_RESET:
			return {};
		default:
			return state;
	}
};

export const AchivementDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case ACHIVEMENT_DELETE_REQUEST:
			return {
				loading: true,
			};
		case ACHIVEMENT_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				achivement: action.payload,
			};
		case ACHIVEMENT_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case ACHIVEMENT_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const AchivementListReducer = (state = {}, action) => {
	switch (action.type) {
		case ACHIVEMENT_LIST_REQUEST:
			return {
				loading: true,
			};
		case ACHIVEMENT_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				achivements: action.payload,
			};
		case ACHIVEMENT_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const AchivementUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case ACHIVEMENT_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case ACHIVEMENT_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				achivement: action.payload,
			};
		case ACHIVEMENT_UPDATE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case ACHIVEMENT_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};
