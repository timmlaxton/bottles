import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ginListReducer, ginDetailsReducer } from './reducers/ginReducer';
import { beerListReducer, beerDetailsReducer } from './reducers/beerReducer';

const reducer = combineReducers({
	ginList: ginListReducer,
	ginDetails: ginDetailsReducer,
	beerList: beerListReducer,
	beerDetails: beerDetailsReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
