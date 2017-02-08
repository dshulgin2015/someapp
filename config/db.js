/**
 * Created by user on 5.2.17.
 */
// var config = {
//     user: 'dshulgin2',
//     database: 'appdb',
//     password: '111111',
//     host: 'localhost', // Server hosting the postgres database
// };
//
// var knex = require('knex')({
//     client: 'pg',
//     connection: config,
//     pool: { min: 0, max: 10 }
// });
var knex = require('knex')({
    client: 'pg',
    connection: 'postgres://vqkwwouonqctvi:cee20663aaadc74235b240cdb5f7ad41e4d5b8c7218f71a86337d18b98fb25bb@ec2-54-243-38-139.compute-1.amazonaws.com:5432/d6uj4rs3kf0tg6',
    pool: { min: 0, max: 10 }
});

module.exports = knex;
