/**
 * Created by user on 6.2.17.
 */

var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
    if (req.user){
        return next();
    }
    res.redirect('/');
}
router.get('/', isAuthenticated, function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('profile.html');
});

module.exports = router;