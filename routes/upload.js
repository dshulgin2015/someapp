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
const mkdirp = require('mkdirp');
// var cloudinary = require('cloudinary');
// cloudinary.config({
//     cloud_name: 'hsbx7mifa',
//     api_key: '916412692886171',
//     api_secret: 'a676b67565c6767a6767d6767f676fe1'
// });

// var upload = multer({
//     dest: function (req, file, cb) {
//         var dir = 'public/uploads/' + req.user.username;
//         mkdirp(dir, err => cb(err, dir))
//     },
//     limits: {fileSize: 1000000, files:1},
// }).single('image');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var dir = 'public/uploads/' + req.user.username;
        mkdirp(dir, err => cb(err, dir));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + req.user.username );
    }
});
var upload = multer({ storage: storage }).single('avatar');

router.post('/',function(req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return res.end('Error uploading your new avatar')
        }

        res.redirect('back');
    });

});



module.exports = router;