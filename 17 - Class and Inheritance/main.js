class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} can Walk!`);
  }

  eat() {
    console.log(`${this.name} can Walk!`);
  }

  sleep() {
    console.log(`${this.name} can Walk!`);
  }
}

class Human extends Animal {
  constructor(name) {
    super(name);
    this.age = age;
  }

  think() {
    console.log(`${this.name} can Think!`);
  }
}

class Bird extends Human {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name} can Fly!`);
  }
}
const a1 = new Animal("Lion");
const h1 = new Human("Someone");
const b1 = new Bird("Pigeon");

a1.eat();
h1.eat();
b1.eat();

h1.think();

b1.fly();
