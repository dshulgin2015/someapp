/**
 * Created by user on 5.2.17.
 */
var express = require('express');
var router = express.Router();
const passport = require('../config/local');


router.get('/', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('login.html');
});

router.post('/', function(req, res, next) {

    passport.authenticate('local', {successReturnToOrRedirect : "/profile", failureRedirect: "/login"})(req, res, next);

});




module.exports = router;