export default function addressReducer(state = '', action) {
	switch (action.type) {
		case 'updateAddress':
			return action.payload;
		default:
			return state;
	}
}
