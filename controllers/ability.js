const abilityController = {};
const axios = require('axios');

abilityController.getAbility = (req, res) => {
    const POKEMON_API = process.env.POKEMON_API;

    axios.get(POKEMON_API + '/ability/')
    .then(resp => {res.json(resp.data);})
}

module.exports = abilityController;