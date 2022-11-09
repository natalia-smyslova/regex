export default class Mathematic {
  get stoned() {
    return this.attackValue;
  }

  set stoned([x, y]) {
    this.attackValue = y - ((y / 100) * (x * 10 - 10));
    this.attackValue = Math.ceil(this.attackValue);
  }

  get attack() {
    return this.attackValue;
  }

  set attack([x, y]) {
    const attackWithPlace = y - ((y / 100) * (x * 10 - 10));

    this.attackValue = attackWithPlace - Math.log2(x) * 5;
    this.attackValue = Math.ceil(this.attackValue);
  }
}
