import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/gins/${id}`);
	// const { beerData } = await axios.get(`/api/beers/${id}`);

	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			gin: data._id,
			brand: data.brand,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			qty
		}
	});
	// dispatch({
	// 	type: CART_ADD_ITEM,
	// 	payload: {
	// 		beer: beerData._id,
	// 		name: beerData.name,
	// 		image: beerData.image,
	// 		price: beerData.price,
	// 		countInStock: beerData.countInStock,
	// 		qty
	// 	}
	// });

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
