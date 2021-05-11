import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ginListReducer, ginDetailsReducer } from './reducers/ginReducer';
import { beerListReducer, beerDetailsReducer } from './reducers/beerReducer';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
	cart: cartReducer,
	ginList: ginListReducer,
	ginDetails: ginDetailsReducer,
	beerList: beerListReducer,
	beerDetails: beerDetailsReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
	cart: { cartItems: cartItemsFromStorage }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
