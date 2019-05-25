import WeatherController from "./components/weather/weather-controller.js";
import TodoController from "./components/todo/TodoController.js";
import ImageController from "./components/image/ImageController.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController(),
      imageController: new ImageController()
    }
  }
}

window['app'] = new App()  