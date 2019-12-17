const pgp = require('pg-promise')();

const db = pgp ('postgres://mek212:Mek123@localhost:5422/pokemondata');

module.exports = db;