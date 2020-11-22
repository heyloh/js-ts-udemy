function createPerson(name, lastName) {
  const personPrototype = {
    talk() {
      console.log(`${this.name} está falando.`);
    },

    eat() {
      console.log(`${this.name} está comendo.`);
    },

    drink() {
      console.log(`${this.name} está bebendo.`);
    },
  };
  return Object.create(personPrototype, {
    name: { value: name },
    lastName: { value: lastName},
  });
}

const p1 = createPerson('Lohana', 'Leopoldo');
const p2 = createPerson('Elza', 'Soares');
console.log(p1, p2);