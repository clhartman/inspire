import WeatherController from "./components/weather/weather-controller.js";
import TodoController from "./components/todo/TodoController.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController()
    }
  }
}

window['app'] = new App()  