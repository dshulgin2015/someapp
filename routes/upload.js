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
var multer = require('multer');
var stream = require('stream');
const mkdirp = require('mkdirp');
var cloudinary = require('cloudinary');
const knex = require('../config/db');
var Busboy = require('busboy');
var request = null;



cloudinary.config({
    cloud_name: 'hsbx7mifa',
    api_key: '916412692886171',
    api_secret: 'XhyukMieTwJkltzHoyHXctFGg4w'
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req.body);
        var dir = 'public/uploads/' + req.user.username;
        mkdirp(dir, err => cb(err, dir));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + req.user.username );
    }
});
var upload = multer({ storage: storage }).single('avatar');

router.post('/',function(req, res) {
    request = req;
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

        file.on('data', function(data) {

            console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
            var bufferStream = new stream.PassThrough();
            bufferStream.write(new Buffer(data), function(err) {
                bufferStream.end();
            });
            var stream1 = cloudinary.uploader.upload_stream(function(result) {
                console.log(result);
                knex('users').where('username', '=', request.cookies.username).update({
                    avatar: result.public_id + '.' + result.format,
                }).then(function (count) {
                    console.log(count);
                });
            });
            bufferStream.pipe(stream1);

        });
    });

    req.pipe(busboy);

    res.redirect('/profile');



});



module.exports = router;