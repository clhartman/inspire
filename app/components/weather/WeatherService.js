import Weather from "../../models/Weather.js";
// @ts-ignore

//Private
const weatherApi = axios.create({
	baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
	timeout: 3000
});

let _state = {
	weather: {}
}

let _subscribers = {
	weather: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn());
}



//Public
export default class WeatherService {
	get Weather() {
		return _state.weather
	}

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	getWeather() {
		console.log('Calling the Weatherman')
		weatherApi.get().then(res => {
			_setState('weather', new Weather(res.data, res.data.weather[0].icon))
		})
	}

}
