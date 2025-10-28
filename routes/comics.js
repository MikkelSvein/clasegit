const router = require('express').Router();
const comicsController = require('../controllers/comics');
router.get('/comics', comicsController.getComics);
module.exports = router;