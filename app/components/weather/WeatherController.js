import WeatherService from "./WeatherService.js";

var _weatherService = new WeatherService()

function drawWeather() {
	let weather = _weatherService.Weather
	document.getElementById('weather').innerHTML = weather.Template
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
