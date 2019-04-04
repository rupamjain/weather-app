import axios from 'axios';
import { secretKey } from '../utils/key';

export function updateAddress(newAdd) {
	return {
		type: 'updateAddress',
		payload: newAdd
	};
}

function updateWeather(data) {
	return {
		type: 'WEATHER_INFO',
		payload: {
			temp: data.main.temp,
			desc: data.weather[0].description,
			humidity: data.main.humidity,
			pressure: data.main.pressure,
			wind: data.wind.speed
		}
	};
}
function giveError() {
	return {
		type: 'ERROR_INFO',
		payload: 'Error Occured'
	};
}

export function fetchWeather(add, country) {
	//put your secret key or appID in teh url below
	const request = axios.get(
		'http://api.openweathermap.org/data/2.5/weather?q=' + add + ',' + country + '&APPID=' + secretKey
	);

	return (dispatch) => {
		request
			.then((data) => {
				console.log(data);
				//dispatch(updateWeather(data.data.main.temp));
				dispatch(updateWeather(data.data));
			})
			.catch((e) => {
				dispatch(giveError());
			});
	};
}
