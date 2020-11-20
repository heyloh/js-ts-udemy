// Funções geradoras

function* generator() {
  yield 'Value: 1';
  yield 'Value: 2';
  yield 'Value: 3';
}

/* 
  Cada vez que você chamar a função geradora, ela irá retornar um valor
  diferente. Além disso, você pode iterar ela.
*/

const gen = generator();
for(let value of gen) {
  console.log(value);
}