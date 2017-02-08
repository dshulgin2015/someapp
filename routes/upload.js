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

var upload = multer({
    dest: function (req, file, cb) {
        cb(null, 'public/uploads/' + req.user.username);
    },
    rename: function (fieldname, filename) {
        return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
    },
    limits: {fileSize: 1000000, files:1},
});


router.post('/', upload.single('image'),function(req, res) {
    res.redirect('back');
});



module.exports = router;