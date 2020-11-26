/* fetch('pessoas.json')
  .then(response => response.json())
  .then(json => handleLoadElementsOnPage(json)); */

axios('pessoas.json')
  .then(response => handleLoadElementsOnPage(response.data))

function handleLoadElementsOnPage(json) {
  const result = document.querySelector('.resultado');
  const table = document.createElement('table');

  for(let person of json) {
    const tr = document.createElement('tr');
    let td = document.createElement('td');

    td.innerHTML = `
      <hr>
      <p><strong>Nome:</strong> ${person.nome}</p>
      <p><strong>Idade:</strong> ${person.idade}</p>
      <p><strong>Salário:</strong> ${person.salario}</p>
    `;

    tr.appendChild(td);
    table.appendChild(tr);
  }

  result.appendChild(table);
}