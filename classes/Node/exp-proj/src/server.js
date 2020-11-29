require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const sessionOptions = session({
  secret: 'Ax4#Wd1{Ee8^Zw2[Fs2^',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  }
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(() => {
    console.log('✅ Connection to the database established.');
    app.emit('Ready!');
  }).catch(e => {
    console.log('🚨 Error connecting to the database: ', e);
  });

app.set('views', path.resolve(__dirname, 'views')); // Onde buscar por Views
app.set('view engine', 'ejs'); // O que vamos usar para renderizar as Views

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(sessionOptions);
app.use(flash());
app.use(routes);

app.on('Ready!', () => {
  app.listen(3333, () => {
    console.log('🚀 Server listening on: 3333');
    console.log('🚧 URL: http://localhost:3333/');
  });
});
