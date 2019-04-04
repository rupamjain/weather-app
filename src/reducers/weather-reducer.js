export default function weatherReducer(state = '', action) {
	switch (action.type) {
		case 'WEATHER_INFO':
            return action.payload;
        case 'ERROR_INFO':
                return action.payload;     
		default:
			return state;
	}
}
