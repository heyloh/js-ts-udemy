let cpf = '705.484.450-52';

let cleanCpf = cpf.replace(/\D+/g, '');

cpfArray = Array.from(cleanCpf);

const cpfArrayOrg = [...cpfArray];
cpfArrayOrg.pop();

const cpfArrayOrg2 = [...cpfArray];
cpfArrayOrg2.pop();
cpfArrayOrg2.pop();

let counter = 10;
const sum1 = cpfArrayOrg2.reduce((acc, value) => {
  acc += (Number(value) * counter);
  counter -= 1;
  return acc;
}, 0);

let firstDigit = 11 - (sum1 % 11);
firstDigit = firstDigit > 9 ? 0 : firstDigit;

let counter2 = 11;
const sum2 = cpfArrayOrg.reduce((ac, value) => {
  ac += (Number(value) * counter2);
  counter2 -= 1;
  return ac;
}, 0);

let secondDigit = 11 - (sum2 % 11);
secondDigit = secondDigit > 9 ? 0 : secondDigit;

const secondDigitOrg = Number(cpfArray.pop());
const firstDigitOrg = Number(cpfArray.pop());

if( secondDigit === secondDigitOrg && firstDigit === firstDigitOrg ){
  console.log(`${cpf} é um CPF válido.`);
} else {
  console.log(`${cpf} é um CPF inválido.`);
}
