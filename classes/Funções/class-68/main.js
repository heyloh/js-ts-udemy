const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const persons = [
  { name: 'Lohana', age: 19 },
  { name: 'Elza', age: 90 },
  { name: 'Alcione', age: 72 },
  { name: 'Marielle', age: 38 },
  { name: 'Angela', age: 76 },
  { name: 'Zumbi', age: 40 },
];

const pairs = numbers
  .filter(number => number % 2 === 0)
  .map(number => number * 2)
  .reduce((acc, number) => acc += number);
// Soma do dobro de todos os pares
console.log(pairs);