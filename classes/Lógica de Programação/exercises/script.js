// Escreva uma função que receba 2 números e retorne o maior deles
console.log('---1---');
const max = (x, y) =>  x > y ? x : y;
console.log(max(55,66));

/* 
  Escreva uma função chamada ePaisagem que recebe dois argumentos,
  largura e altura de uma imagem (number).
  Retorne true se a imagem estiver no modo paisagem.
*/
console.log('---2---');
const ePaisagem = (width, height) => width >= height;
console.log(ePaisagem(1920, 1080)); // true
console.log(ePaisagem(1080, 1920)); // false
console.log(ePaisagem(1080, 1080)); // true

/* 
  Escreva uma função que receba um número e retorne o seguinte:
  - Número é divisível por 3 = Fizz
  - Número é divisível por 5 = Buzz
  - Número é divisível por 3 e 5 = FizzBuzz
  - Número não é divisível por 3 e 5 = Retorna o próprio número
  Checar se o número é realmente um número. Use a função com números de 0 a 100
*/
console.log('---3---');
function fizzBuzz(x) {
  if(typeof x !== 'number') return x;

  if(x % 3 === 0 && x % 5 === 0 && x !== 0) return 'FizzBuzz';

  if(x % 3 !== 0 && x % 5 !== 0 || x === 0) return x;

  if(x % 3 === 0) return 'Fizz';

  if(x % 5 === 0) return 'Buzz';
}

for(let i = 0; i <= 100; i++) {
  console.log(i,':', fizzBuzz(i));
}