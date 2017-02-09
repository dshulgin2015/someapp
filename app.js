var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
//var fileUpload = require('express-fileupload');
var bodyParser = require('body-parser');
var session = require('express-session');
//var busboy = require('connect-busboy');

const passport = require('passport');
var index = require('./routes/index');
var login = require('./routes/login');
var upload = require('./routes/upload');
var logout = require('./routes/logout');
var signup = require('./routes/signup');
var profile = require('./routes/profile');
var busboy = require('busboy');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use(logger('dev'));
//app.use(fileUpload());

//app.use(busboy());
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());
app.use(cookieParser());


app.use(session({
    secret: 'anything',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true,
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/login', login);
app.use('/logout', logout);
app.use('/upload', upload);
app.use('/signup', signup);
app.use('/profile', profile);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = app;
