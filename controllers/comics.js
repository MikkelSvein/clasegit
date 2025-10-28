const comicsController = {};

comicsController.getComics = (req, res) => {
    res.json({ message: 'List of comics' });
}

module.exports = comicsController;
