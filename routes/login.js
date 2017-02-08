/**
 * Created by user on 5.2.17.
 */
var express = require('express');
var router = express.Router();
const passport = require('../config/local');


router.get('/', function (req, res) {

    // render the page and pass in any flash data if it exists
    res.render('login.html');
});

router.post('/', function (req, res, next) {

    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function(err) {

            if (err) { return next(err); }
            if (!req.body.loggedin) {
                var randomNumber=Math.random().toString();
                randomNumber=randomNumber.substring(2,randomNumber.length);
                res.cookie('loggedin',randomNumber, { maxAge: 900000, httpOnly: true });
                res.cookie('username', user, { maxAge: 900000, httpOnly: true });
            }
            return res.redirect('/profile');
        });
    })(req, res, next);

});


module.exports = router;