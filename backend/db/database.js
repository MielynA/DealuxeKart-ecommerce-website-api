const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/DealuxeKart');

module.exports = db; 