import {
	AWARD_ADD_FAIL,
	AWARD_ADD_REQUEST,
	AWARD_ADD_RESET,
	AWARD_ADD_SUCCESS,
	AWARD_DELETE_FAIL,
	AWARD_DELETE_REQUEST,
	AWARD_DELETE_RESET,
	AWARD_DELETE_SUCCESS,
	AWARD_LIST_FAIL,
	AWARD_LIST_REQUEST,
	AWARD_LIST_SUCCESS,
	AWARD_UPDATE_FAIL,
	AWARD_UPDATE_REQUEST,
	AWARD_UPDATE_RESET,
	AWARD_UPDATE_SUCCESS,
} from "../constants/AwardConstants";

export const awardAddReducer = (state = {}, action) => {
	switch (action.type) {
		case AWARD_ADD_REQUEST:
			return {
				loading: true,
			};
		case AWARD_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				awards: action.payload,
			};
		case AWARD_ADD_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case AWARD_ADD_RESET:
			return {};
		default:
			return state;
	}
};

export const awardDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case AWARD_DELETE_REQUEST:
			return {
				loading: true,
			};
		case AWARD_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				award: action.payload,
			};
		case AWARD_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case AWARD_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const awardListReducer = (state = { AWARDs: [] }, action) => {
	switch (action.type) {
		case AWARD_LIST_REQUEST:
			return {
				loading: true,
			};
		case AWARD_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				awards: action.payload,
			};
		case AWARD_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const awardUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case AWARD_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case AWARD_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				award: action.payload,
			};
		case AWARD_UPDATE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case AWARD_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};
