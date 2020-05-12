import Target from "../Models/Target.js";


let _target = new Target({ health: 100, attacks: { slap: 1, tickle: 10, punch: 15 } })

export default class GameService {
  attack(attackName) {
    console.log("attack from service", attackName);
    _target.health -= _target.attacks[attackName]
  }

  slap() {
    console.log("slap from service");
    _target.health -= _target.attacks.slap
    console.log(_target.health);
  }

  get TargetHealth() {
    return _target.health
  }

  reset() {
    _target.health = _target.maxHealth
  }

  constructor() {
    console.log("Hello from Game Service");
    console.log(_target);
  }
}