import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { ginData } = await axios.get(`/api/gins/${id}`);
	const { beerData } = await axios.get(`/api/beers/${id}`);

	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			gin: ginData._id,

			name: ginData.name,
			image: ginData.image,
			price: ginData.price,
			countInStock: ginData.countInStock,
			qty
		}
	});
	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			beer: beerData._id,

			name: beerData.name,
			image: beerData.image,
			price: beerData.price,
			countInStock: beerData.countInStock,
			qty
		}
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
