const abilityRouter = require('express').Router();

const abilityController = require('../controllers/ability');

abilityRouter.get('/', abilityController.getAbility);

module.exports = abilityRouter