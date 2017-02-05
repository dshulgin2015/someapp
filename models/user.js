/**
 * Created by user on 5.2.17.
 */
var bcrypt   = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define('users', {
        annotation_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.DATE,
            field: 'firstName'
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,

    }, {
        freezeTableName: true,
        instanceMethods: {
            generateHash: function(password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            },
            validPassword: function(password) {
                return bcrypt.compareSync(password, this.password);
            },
        }
    });

    return User;
}