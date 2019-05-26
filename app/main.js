import WeatherController from "./components/weather/WeatherController.js";
import TodoController from "./components/todo/TodoController.js";
import ImageController from "./components/image/ImageController.js";
import QuoteController from "./components/quote/QuoteController.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController(),
      imageController: new ImageController(),
      QuoteController: new QuoteController()
    }
  }
}

window['app'] = new App()  