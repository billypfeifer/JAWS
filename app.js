var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var amazon = require('amazon-product-api');

var index = require('./routes/index');
var users = require('./routes/users');
var makeOffer = require('./routes/makeOffer');
var acceptOffer = require('./routes/acceptOffer');
var addBook = require('./routes/addBook');
var deleteBook = require('./routes/deleteBook');
var getmarketPlace = require('./routes/getmarketPlace');
var getmyAccount = require('./routes/getmyAccount');
var register = require('./routes/register');
var logOut = require('./routes/logOut');




var mongoose = require('mongoose');
var User = require('./models/userModel');

var app = express();


<<<<<<< HEAD
mongoose.connect('mongodb://alexis:JawsTeam1@ds161225.mlab.com:61225/bookmarketplace', {
  useMongoClient: true
});



=======
>>>>>>> 1d85036bf054427dac8dda9c396e9b1505da5cad
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/makeOffer', makeOffer);
app.use('/acceptOffer', acceptOffer);
app.use('/addBook', addBook);
app.use('/deleteBook', deleteBook);
app.use('/getmarketPlace', getmarketPlace);
app.use('/getmyAccount', getmyAccount);
app.use('/register', register);
app.use('/logOut', logOut);


/*var client = amazon.createClient({
  awsId: "aws ID",
  awsSecret: "aws Secret",
  awsTag: "aws Tag"
});

client.itemSearch({
  director: 'Quentin Tarantino'
}).then(function(results){
  console.log(results);
}).catch(function(err){
  console.log(err);
});*/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
