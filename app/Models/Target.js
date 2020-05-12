export default class Target {
  constructor(data) {
    this.health = data.health
    this.maxHealth = data.health
    this.attacks = data.attacks
    this.hits = 0
    console.log("hello from Target Model");
  }
}