export default class Weather {
  constructor(data, icon) {
    console.log('[RAW WEATHER API DATA]', data);
    this.iconName = icon || this.iconName;
    this.name = data.name
    this.temp = data.temp || ((data.main.temp - 273.15) * 1.8 + 32).toFixed(0)
    // this.icon = icon
    this.icon = './assets/' + this.iconName + '.png'

  }


  get Template() {
    return `
    <ul class="weather-stuff">
        <p class="weather-specifics">${this.temp} °F</p>
        <p class="weather-specifics">in <img src="${this.icon}"/></p>
				<p class="weather-specifics">in ${this.name}</p>
			</ul>
    `
  }


}
// HEY FUN FACT
// Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
// data.main.temp is the temperature in Kelvin
// You should probably convert the temperature data to either F or C