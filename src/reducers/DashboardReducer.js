import {
	DASHBOARD_ADD_FAIL,
	DASHBOARD_ADD_REQUEST,
	DASHBOARD_ADD_RESET,
	DASHBOARD_ADD_SUCCESS,
	DASHBOARD_DELETE_FAIL,
	DASHBOARD_DELETE_REQUEST,
	DASHBOARD_DELETE_RESET,
	DASHBOARD_DELETE_SUCCESS,
	DASHBOARD_LIST_FAIL,
	DASHBOARD_LIST_REQUEST,
	DASHBOARD_LIST_SUCCESS,
	DASHBOARD_UPDATE_FAIL,
	DASHBOARD_UPDATE_REQUEST,
	DASHBOARD_UPDATE_RESET,
	DASHBOARD_UPDATE_SUCCESS,
} from "../constants/DashboardConstants";

export const dashboardAddReducer = (state = {}, action) => {
	switch (action.type) {
		case DASHBOARD_ADD_REQUEST:
			return {
				loading: true,
			};
		case DASHBOARD_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				dashboards: action.payload,
			};
		case DASHBOARD_ADD_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case DASHBOARD_ADD_RESET:
			return {};
		default:
			return state;
	}
};

export const dashboardDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case DASHBOARD_DELETE_REQUEST:
			return {
				loading: true,
			};
		case DASHBOARD_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				dashboard: action.payload,
			};
		case DASHBOARD_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case DASHBOARD_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const dashboardListReducer = (state = { dashboards: [] }, action) => {
	switch (action.type) {
		case DASHBOARD_LIST_REQUEST:
			return {
				loading: true,
			};
		case DASHBOARD_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				dashboards: action.payload,
			};
		case DASHBOARD_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const dashboardUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case DASHBOARD_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case DASHBOARD_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				dashboard: action.payload,
			};
		case DASHBOARD_UPDATE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case DASHBOARD_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};
