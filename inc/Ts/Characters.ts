export class Character {
  constructor(name, image) {
 
    this.health = 100;
    this.hunger = 100;
  }
  

  getHealth() {
    return this.health;
  }
  getHunger() {
    return this.hunger;
  }


  heal(amount) {
    this.health = Math.min(this.health + amount, 100);
  }

  feed(amount) {
    this.hunger = Math.max(this.hunger - amount, 0);
  }


}
