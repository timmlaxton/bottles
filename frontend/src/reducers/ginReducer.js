export const ginListReducer = (state = { gins: [] }, action) => {
	switch (action.type) {
		case 'GIN_LIST_REQUEST':
			return { loading: true, gins: [] };
		case 'GIN_LIST_SUCCESS':
			return { loading: false, gins: action.payload };
		case 'GIN_LIST_FAIL':
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
