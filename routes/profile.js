/**
 * Created by user on 6.2.17.
 */

var express = require('express');
var router = express.Router();
const knex = require('../config/db');
var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'hsbx7mifa',
    api_key: '916412692886171',
    api_secret: 'XhyukMieTwJkltzHoyHXctFGg4w'
});



var isAuthenticated = function (req, res, next) {
    if (req.cookies.loggedin || req.user){

        return next();
    }
    res.redirect('/');
}
router.get('/', isAuthenticated, function(req, res) {

    knex('users').where({
        username: req.cookies.username
    }).select('avatar').then(function (values) {
        console.log(values[0].avatar);
        res.render('profile.html', {avatar: cloudinary.image(values[0].avatar)});
    });


});

module.exports = router;