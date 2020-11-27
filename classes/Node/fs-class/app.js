const path = require('path');
const filePath = path.resolve(__dirname, 'file.json');

const write = require('./modules/write');
const read = require('./modules/read');

/* const people = [
  { name: 'Lohana' },
  { name: 'Elza' },
  { name: 'Marie' },
  { name: 'Nelson' }
];

const json = JSON.stringify(people, '', 2);

write(filePath, json); */
async function readIt(filePath) {
  const data = await read(filePath);
  renderData(data);
}

function renderData(data) {
  console.log(data);
}

readIt(filePath);