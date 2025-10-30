const speciesRouter = require('express').Router();
const speciesController = require('../controllers/species');
speciesRouter.get('/todo', speciesController.getSpecies);
module.exports = speciesRouter