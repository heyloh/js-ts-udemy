require('dotenv').config();

const express = require('express');
const path = require('path');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ Connection to the database established.');
    app.emit('Ready!');
  })
  .catch(e => {
    console.log('🚨 Error connecting to the database: ', e);
  });

app.set('views', path.resolve(__dirname, 'views')); // Onde buscar por Views
app.set('view engine', 'ejs'); // O que vamos usar para renderizar as Views

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(routes);

app.on('Ready!', () => {
  app.listen(3333, () => {
    console.log('🚀 Server listening on: 3333');
    console.log('🚧 URL: http://localhost:3333/');
  });
});
