const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();

app.set('views', path.resolve(__dirname, 'views')); // Onde buscar por Views
app.set('view engine', 'ejs'); // O que vamos usar para renderizar as Views

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server listening on: 3333');
  console.log('🚧 URL: http://localhost:3333/');
});