import {
	CONTRIBUTION_ADD_FAIL,
	CONTRIBUTION_ADD_REQUEST,
	CONTRIBUTION_ADD_RESET,
	CONTRIBUTION_ADD_SUCCESS,
	CONTRIBUTION_DELETE_FAIL,
	CONTRIBUTION_DELETE_REQUEST,
	CONTRIBUTION_DELETE_RESET,
	CONTRIBUTION_DELETE_SUCCESS,
	CONTRIBUTION_LIST_FAIL,
	CONTRIBUTION_LIST_REQUEST,
	CONTRIBUTION_LIST_SUCCESS,
	CONTRIBUTION_UPDATE_FAIL,
	CONTRIBUTION_UPDATE_REQUEST,
	CONTRIBUTION_UPDATE_RESET,
	CONTRIBUTION_UPDATE_SUCCESS,
} from "../constants/ContributionConstants";

export const contributionAddReducer = (state = {}, action) => {
	switch (action.type) {
		case CONTRIBUTION_ADD_REQUEST:
			return {
				loading: true,
			};
		case CONTRIBUTION_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				contributions: action.payload,
			};
		case CONTRIBUTION_ADD_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case CONTRIBUTION_ADD_RESET:
			return {};
		default:
			return state;
	}
};

export const contributionDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case CONTRIBUTION_DELETE_REQUEST:
			return {
				loading: true,
			};
		case CONTRIBUTION_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				contribution: action.payload,
			};
		case CONTRIBUTION_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case CONTRIBUTION_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const contributionListReducer = (
	state = { contributions: [] },
	action
) => {
	switch (action.type) {
		case CONTRIBUTION_LIST_REQUEST:
			return {
				loading: true,
			};
		case CONTRIBUTION_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				contributions: action.payload,
			};
		case CONTRIBUTION_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const contributionUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case CONTRIBUTION_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case CONTRIBUTION_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				contribution: action.payload,
			};
		case CONTRIBUTION_UPDATE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case CONTRIBUTION_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};
