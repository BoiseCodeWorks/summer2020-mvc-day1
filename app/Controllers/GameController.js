import GameService from "../Services/GameService.js";

let _gameService = new GameService()

function _draw() {
  document.getElementById("health").innerHTML = _gameService.TargetHealth
}

export default class GameController {
  constructor() {
    console.log("Hello from Game Controller");
  }

  slap() {
    console.log("slap from controller");
    _gameService.slap()
    _draw()
  }

  attack(attackName) {
    _gameService.attack(attackName)
    _draw()
  }

  reset() {
    _gameService.reset()
    _draw()
  }

}