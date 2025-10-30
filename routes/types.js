const typeController = require('../controllers/type');

const typesRouter = require('express').Router();

typesRouter.get('/', typeController.getTypes);
module.exports = typesRouter