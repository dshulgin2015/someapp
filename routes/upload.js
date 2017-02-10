// /**
//  * Created by user on 8.2.17.
//  */
// var express = require('express');
// var router = express.Router();

//
// router.post('/', uploading, function(req, res) {
//     res.redirect('back');
// });
//
// module.exports = router;
/**
 * Created by user on 6.2.17.
 */

var express = require('express');
var router = express.Router();

var stream = require('stream');
var cloudinary = require('cloudinary');
const knex = require('../config/db');
var Busboy = require('busboy');




cloudinary.config({
    cloud_name: 'hsbx7mifa',
    api_key: '916412692886171',
    api_secret: 'XhyukMieTwJkltzHoyHXctFGg4w'
});

var cloudinary_stream = null;
router.post('/',function(req, res) {

    console.log("1st point");

    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

        console.log("can never be reached");
        cloudinary_stream = cloudinary.uploader.upload_stream(function(result) { //renew stream to avoid "write after end" error
            console.log(result);
            knex('users').where('username', '=', req.cookies.username).update({
                avatar: result.public_id + '.' + result.format,
            }).then(function (count) {
                console.log(count);
            });
        });
        var chunks = [];
        file.on('data', function(data) {

            console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
            chunks.push(data);
        });
        file.on('end', function() {
            var buffer = Buffer.concat(chunks);

            console.log('File [' + fieldname + '] got ' + buffer.length + ' bytes');

        }).pipe(cloudinary_stream);
    });
    console.log('2nd point')
    var req_stream = req.pipe(busboy);
    req_stream.on('finish', function () {
        res.redirect('/profile');
    });





});



module.exports = router;