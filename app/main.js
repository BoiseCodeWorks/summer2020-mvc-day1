import GameController from "./Controllers/GameController.js"
import FoodController from "./Controllers/FoodController.js"


class App {
  constructor() {
    console.log("Hello from app")
    this.gameController = new GameController()
    this.foodController = new FoodController()
  }
}

window["app"] = new App()