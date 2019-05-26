export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.name = data.name
    this.temp = data.temp || ((data.main.temp - 273.15) * 1.8 + 32).toFixed(2)
  }


  get Template() {
    return `
    <ul>
				<p>${this.name}</p>
				<p>${this.temp}</p>
			</ul>
    `
  }


}
// HEY FUN FACT
// Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
// data.main.temp is the temperature in Kelvin
// You should probably convert the temperature data to either F or C