import {
	GIN_LIST_REQUEST,
	GIN_LIST_SUCCESS,
	GIN_LIST_FAIL,
	GIN_DETAILS_REQUEST,
	GIN_DETAILS_SUCCESS,
	GIN_DETAILS_FAIL
} from '../constants/ginConstants';

export const ginListReducer = (state = { gins: [] }, action) => {
	switch (action.type) {
		case GIN_LIST_REQUEST:
			return { loading: true, gins: [] };
		case GIN_LIST_SUCCESS:
			return { loading: false, gins: action.payload };
		case GIN_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const ginDetailsReducer = (state = { gin: { reviews: [] } }, action) => {
	switch (action.type) {
		case GIN_DETAILS_REQUEST:
			return { loading: true, ...state };
		case GIN_DETAILS_SUCCESS:
			return { loading: false, gin: action.payload };
		case GIN_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
