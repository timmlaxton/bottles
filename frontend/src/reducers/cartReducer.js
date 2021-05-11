import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;

			const existItem = state.cartitems.find((x) => x.gin || x.beer === item.gin || item.beer);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartitems.ap((x) => (x.beer || x.gin === existItem.gin || existItem.beer ? item : x))
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item]
				};
			}
		default:
			return state;
	}
};
