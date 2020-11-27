const express = require('express');

const HomeController = require('./controllers/HomeController');

const routes = express.Router();

// Rotas da Home
routes.get('/', HomeController.index);
routes.post('/', HomeController.store);

module.exports = routes;