const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.isaacRoute);
routes.get('/fernanda', lesson1Controller.fernandaRoute);
routes.get('/xavier', lesson1Controller.xavierRoute);

module.exports = routes;