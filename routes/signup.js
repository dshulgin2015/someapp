/**
 * Created by user on 5.2.17.
 */
var express = require('express');
var router = express.Router();
const authHelpers = require('../config/_helpers');
const passport = require('../config/local');


router.get('/', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('signup.html');
});

router.post('/', (req, res, next)  => {
    console.log(111);
    return authHelpers.createUser(req, res)
        .then((response) => {
            passport.authenticate('local', (err, user, info) => {
                if (user) { handleResponse(res, 200, 'success'); }
            })(req, res, next);
        })
        .catch((err) => { console.log(err);/*handleResponse(res, 500, 'error');*/ });
});

function handleResponse(res, code, statusMsg) {
    res.status(code).json({status: statusMsg});
}


module.exports = router;