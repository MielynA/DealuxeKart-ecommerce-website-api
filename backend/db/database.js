const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/dealuxekart');

module.exports = db; 