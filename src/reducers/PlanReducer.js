import {
	PLAN_ADD_FAIL,
	PLAN_ADD_REQUEST,
	PLAN_ADD_RESET,
	PLAN_ADD_SUCCESS,
	PLAN_DELETE_FAIL,
	PLAN_DELETE_REQUEST,
	PLAN_DELETE_RESET,
	PLAN_DELETE_SUCCESS,
	PLAN_LIST_FAIL,
	PLAN_LIST_REQUEST,
	PLAN_LIST_SUCCESS,
	PLAN_UPDATE_FAIL,
	PLAN_UPDATE_REQUEST,
	PLAN_UPDATE_RESET,
	PLAN_UPDATE_SUCCESS,
} from "../constants/PlanConstants";

export const planAddReducer = (state = {}, action) => {
	switch (action.type) {
		case PLAN_ADD_REQUEST:
			return {
				loading: true,
			};
		case PLAN_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				plans: action.payload,
			};
		case PLAN_ADD_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case PLAN_ADD_RESET:
			return {};
		default:
			return state;
	}
};

export const planDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case PLAN_DELETE_REQUEST:
			return {
				loading: true,
			};
		case PLAN_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				plan: action.payload,
			};
		case PLAN_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case PLAN_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const planListReducer = (state = { plans: [] }, action) => {
	switch (action.type) {
		case PLAN_LIST_REQUEST:
			return {
				loading: true,
			};
		case PLAN_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				plans: action.payload,
			};
		case PLAN_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const planUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case PLAN_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case PLAN_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				plans: action.payload,
			};
		case PLAN_UPDATE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case PLAN_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};
