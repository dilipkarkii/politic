import {
	PERSONAL_ADD_FAIL,
	PERSONAL_ADD_REQUEST,
	PERSONAL_ADD_RESET,
	PERSONAL_ADD_SUCCESS,
	MANIFESTO_ADD_FAIL,
	MANIFESTO_ADD_REQUEST,
	MANIFESTO_ADD_RESET,
	MANIFESTO_ADD_SUCCESS,
	MANIFESTO_DELETE_FAIL,
	MANIFESTO_DELETE_REQUEST,
	MANIFESTO_DELETE_RESET,
	MANIFESTO_DELETE_SUCCESS,
	MANIFESTO_LIST_FAIL,
	MANIFESTO_LIST_REQUEST,
	MANIFESTO_LIST_SUCCESS,
	PERSONAL_DELETE_FAIL,
	PERSONAL_DELETE_REQUEST,
	PERSONAL_DELETE_RESET,
	PERSONAL_DELETE_SUCCESS,
	PERSONAL_LIST_FAIL,
	PERSONAL_LIST_REQUEST,
	PERSONAL_LIST_SUCCESS,
	PERSONAL_UPDATE_FAIL,
	PERSONAL_UPDATE_REQUEST,
	PERSONAL_UPDATE_RESET,
	PERSONAL_UPDATE_SUCCESS,
} from "../constants/PersonalConstants";

export const personalAddReducer = (state = {}, action) => {
	switch (action.type) {
		case PERSONAL_ADD_REQUEST:
			return {
				loading: true,
			};
		case PERSONAL_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				personals: action.payload,
			};
		case PERSONAL_ADD_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case PERSONAL_ADD_RESET:
			return {};
		default:
			return state;
	}
};
export const manifestoAddReducer = (state = {}, action) => {
	switch (action.type) {
		case MANIFESTO_ADD_REQUEST:
			return {
				loading: true,
			};
		case MANIFESTO_ADD_SUCCESS:
			return {
				loading: false,
				success: true,
				manifestos: action.payload,
			};
		case MANIFESTO_ADD_FAIL:
			return {
				loading: true,
				iserror:true,
				error: action.payload,
			};
		case MANIFESTO_ADD_RESET:
			return {};
		default:
			return state;
	}
};

export const personalDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case PERSONAL_DELETE_REQUEST:
			return {
				loading: true,
			};
		case PERSONAL_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				personal: action.payload,
			};
		case PERSONAL_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case PERSONAL_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const personalListReducer = (state = {}, action) => {
	switch (action.type) {
		case PERSONAL_LIST_REQUEST:
			return {
				loading: true,
			};
		case PERSONAL_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				personals: action.payload,
			};
		case PERSONAL_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const personalUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case PERSONAL_UPDATE_REQUEST:
			return {
				loading: true,
			};
		case PERSONAL_UPDATE_SUCCESS:
			return {
				loading: false,
				success: true,
				personal: action.payload,
			};
		case PERSONAL_UPDATE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case PERSONAL_UPDATE_RESET:
			return {};
		default:
			return state;
	}
};


export const manifestoDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case MANIFESTO_DELETE_REQUEST:
			return {
				loading: true,
			};
		case MANIFESTO_DELETE_SUCCESS:
			return {
				loading: false,
				success: true,
				manifesto: action.payload,
			};
		case MANIFESTO_DELETE_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		case MANIFESTO_DELETE_RESET:
			return {};
		default:
			return state;
	}
};

export const manifestoListReducer = (state = {}, action) => {
	switch (action.type) {
		case MANIFESTO_LIST_REQUEST:
			return {
				loading: true,
			};
		case MANIFESTO_LIST_SUCCESS:
			return {
				loading: false,
				success: true,
				manifestos: action.payload,
			};
		case MANIFESTO_LIST_FAIL:
			return {
				loading: true,
				error: action.payload,
			};
		default:
			return state;
	}
};