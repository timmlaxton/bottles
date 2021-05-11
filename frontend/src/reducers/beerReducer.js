import {
	BEER_LIST_REQUEST,
	BEER_LIST_SUCCESS,
	BEER_LIST_FAIL,
	BEER_DETAILS_REQUEST,
	BEER_DETAILS_SUCCESS,
	BEER_DETAILS_FAIL
} from '../constants/beerConstants';

export const beerListReducer = (state = { beers: [] }, action) => {
	switch (action.type) {
		case BEER_LIST_REQUEST:
			return { loading: true, beers: [] };
		case BEER_LIST_SUCCESS:
			return { loading: false, beers: action.payload };
		case BEER_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const beerDetailsReducer = (state = { beer: { reviews: [] } }, action) => {
	switch (action.type) {
		case BEER_DETAILS_REQUEST:
			return { loading: true, ...state };
		case BEER_DETAILS_SUCCESS:
			return { loading: false, beer: action.payload };
		case BEER_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
