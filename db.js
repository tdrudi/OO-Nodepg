/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://teagan:password@127.0.0.1:5432/lunchly");

db.connect();

module.exports = db;
