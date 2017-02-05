/**
 * Created by user on 5.2.17.
 */
var express = require('express');
var router = express.Router();
const authHelpers = require('../config/_helpers');
const passport = require('../config/local');


router.get('/', function (req, res) {

    res.render('signup.html');
});

router.post('/', (req, res, next) => {
    return authHelpers.createUser(req, res)
        .then((response) => {
            passport.authenticate('local', (err, user, info) => {
                if (user) {
                    handleResponse(res, 200, 'success');
                    console.log(err);
                }
            })(req, res, next);
            res.redirect('/profile');
        })
        .catch((err) => {
            handleResponse(res, 500, 'error');
            console.log(err);
        });


});

function handleResponse(res, code, statusMsg) {
    res.status(code).json({status: statusMsg});
}


module.exports = router;