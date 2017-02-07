/**
 * Created by user on 5.2.17.
 */
// var config = {
//     user: 'dshulgin2',
//     database: 'appdb',
//     password: 'Uh!_!67912311',
//     host: 'localhost', // Server hosting the postgres database
// };

var knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: { min: 0, max: 10 }
});

module.exports = knex;
