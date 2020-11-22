class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  talk() {
    console.log(`${this.name} está falando.`);
  }

  eat() {
    console.log(`${this.name} está comendo.`);
  }

  drink(){
    console.log(`${this.name} está bebendo.`);
  }
}

const p1 = new Person('Lohana', 'Torres');
console.log(p1.talk());
console.log(p1.eat());
console.log(p1.drink());