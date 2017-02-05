/**
 * Created by user on 6.2.17.
 */
const bcrypt = require('bcryptjs');
const knex = require('./db');

function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser (req) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    return knex('users')
        .insert({
            username: req.body.username,
            password: hash,
            email: req.body.email,
            gender: req.body.gender
        })
        .returning('*');
}

module.exports = {
    comparePass,
    createUser
};