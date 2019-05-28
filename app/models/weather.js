export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.name = data.name
    this.temp = data.temp || ((data.main.temp - 273.15) * 1.8 + 32).toFixed(0)
    this.icon = data.icon || data.weather[0].icon

  }


  get Template() {
    return `
    <ul class="weather-stuff">
        <p class="weather-specifics">${this.temp} °F <img src="http://openweathermap.org/img/w/${this.icon}.png"/></p>
				<p class="weather-specifics">in ${this.name}</p>
			</ul>
    `
  }


}