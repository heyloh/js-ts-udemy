const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const persons = [
  { name: 'Lohana', age: 19 },
  { name: 'Elza', age: 90 },
  { name: 'Alcione', age: 72 },
  { name: 'Marielle', age: 38 },
  { name: 'Angela', age: 76 },
  { name: 'Zumbi', age: 40 },
];

// Filter -> Retorna array com mesma quantidade de elementos ou menos
(function () {
  // Exemplo 1
  const biggerThanTen = numbers.filter(number => number > 10);
  /* console.log(biggerThanTen);
  console.log('========================'); */
  
  // Exemplo 2
  const fiveLettersOrMore = persons.filter(person => person.name.length >= 5);

  const olderThanFifty = persons.filter(person => person.age > 50);

  const nameEndsWithA = persons.filter(person => {
    return person.name.toLowerCase().endsWith('a');
  });

  // console.log(`Pessoas cujo nome tem 5 letras ou mais:`);
  for (let person of fiveLettersOrMore) {
    // console.log(person.name);
  }

 /*  console.log('========================');
  console.log(`Pessoas com mais de 50 anos:`); */
  for (let person of olderThanFifty) {
    // console.log(`${person.name}, ${person.age} anos`);
  }

  /* console.log('========================');
  console.log(`Pessoas cuja última letra do nome é 'a':`); */
  for (let person of nameEndsWithA) {
    // console.log(person.name);
  }

  // console.log('========================');
})();

// Map -> Retorna array com o mesmo tamanho original, porém com valores alterados
(function (){
  // Exemplo 1
  const double = numbers.map(number => number * 2);
  // console.log(double);

  // Exemplo 2

  // Retornar string com nome da pessoa
  const names = persons.map(person => person.name);
  // console.log(names);

  // Remover apenas a chave nome do objeto
  const personsWithoutNames = persons.map(person => ({ age: person.age }));
  // console.log(personsWithoutNames);

  // Adicionar uma chave id em cada objeto
  const personsWithIds = persons.map((person, index) => {
    // Criando um novo objeto para não alterar o original
    const newPerson = { ...person };
    newPerson.id = index;
    return newPerson;
  });
  // console.log(personsWithIds);
})();

// Reduce -> Normalmente, usada pra retornar somente 1 elemento do array
(function(){
  // Exemplo 1
  const total = numbers.reduce((accumulator, number) => {
    return accumulator += number;
  }, 0 /* Valor inicial do acumulador */);
  console.log('Soma dos números: ', total);

  // Exemplo 2
  const pairs = numbers.reduce((accumulator, number) => {
    number % 2 === 0 ? accumulator.push(number) : accumulator;
    return accumulator;
  }, []);
  console.log('Números pares: ', pairs);

  // Exemplo 3
  const older = persons.reduce((accumulator, person) => {
    person.age > accumulator.age ? accumulator = person : accumulator;
    return accumulator;
  });
  console.log(older);
})();