import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ginListReducer } from './reducers/ginReducer';
import { beerListReducer } from './reducers/beerReducer';

const reducer = combineReducers({
	ginList: ginListReducer,
	beerList: beerListReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
