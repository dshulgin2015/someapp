/**
 * Created by dshulgin on 8.2.17.
 */
var express = require('express');
var router = express.Router();
const authHelpers = require('../config/_helpers');


router.get('/', authHelpers.loginRequired, (req, res, next) => {
    req.logout();
    //handleResponse(res, 200, 'success');
    res.redirect('/');
});

function handleResponse(res, code, statusMsg) {
    res.status(code).json({status: statusMsg});
}


module.exports = router;