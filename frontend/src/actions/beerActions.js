import axios from 'axios';

import { BEER_LIST_REQUEST, BEER_LIST_SUCCESS, BEER_LIST_FAIL } from '../constants/beerConstants';

export const listBeers = () => async (dispatch) => {
	try {
		dispatch({ type: BEER_LIST_REQUEST });

		const { data } = await axios.get('/api/beers');

		dispatch({
			type: BEER_LIST_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: BEER_LIST_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};
