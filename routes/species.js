const speciesController = require('../controllers/species');

const speciesRouter = require('express').Router();

speciesRouter.get('/', speciesController.getSpecies);

module.exports = speciesRouter