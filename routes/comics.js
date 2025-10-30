const comicsRouter = require('express').Router();
const comicsController = require('../controllers/comics');
comicsRouter.get('/', comicsController.getComics);
module.exports = comicsRouter