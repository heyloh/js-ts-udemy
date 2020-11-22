const people = [
  { id: 3, name: 'Lohana' },
  { id: 2, name: 'Elza' },
  { id: 1, name: 'Nelson'}
];

/* const newPeople = {};
for(const person of people) {
  const { id } = person;
  newPeople[id] = { ...person };
} */

const newPeople = new Map();
for(const person of people) {
  const { id } = person;
  newPeople.set(id, { ...person });
}

for (const person of newPeople.values()) {
  console.log(person);
}

/* for (const person of newPeople.keys()) {
  console.log(person);
} */