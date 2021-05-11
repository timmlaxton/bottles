import axios from 'axios';

import {
	GIN_LIST_REQUEST,
	GIN_LIST_SUCCESS,
	GIN_LIST_FAIL,
	GIN_DETAILS_FAIL,
	GIN_DETAILS_SUCCESS,
	GIN_DETAILS_REQUEST
} from '../constants/ginConstants';

export const listGins = () => async (dispatch) => {
	try {
		dispatch({ type: GIN_LIST_REQUEST });

		const { data } = await axios.get('/api/gins');

		dispatch({
			type: GIN_LIST_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: GIN_LIST_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};

export const listGinDetails = (ID) => async (dispatch) => {
	try {
		dispatch({ type: GIN_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/gins/${ID}`);

		dispatch({
			type: GIN_DETAILS_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: GIN_DETAILS_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};