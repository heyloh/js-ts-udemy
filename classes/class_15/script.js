const number = Number(prompt('Digite seu número: '));
const titleNumber = document.getElementById('numero-titulo');
const text = document.getElementById('texto');

titleNumber.innerHTML = number;
text.innerHTML = `
  <p>Raiz quadrada: ${Math.sqrt(number)}</p>
  <p>${number} é inteiro: ${Number.isInteger(number)}</p>
  <p>É NaN: ${Number.isNaN(number)}</p>
  <p>Arredondando para baixo: ${Math.floor(number)}</p>
  <p>Arredondando para cima: ${Math.ceil(number)}</p>
  <p>Com duas casas decimais: ${number.toFixed(2)}</p>
`;