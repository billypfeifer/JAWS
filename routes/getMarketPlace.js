var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var models = require('../models/marketplaceModel')

router.use( bodyParser.json() );

router.post('/getMarketPlace', function(req, res, next) {
 // res.render('index', { title: 'Express' });
});


router.get('/', function(req, res, next) {

	models.find({}, function(err, books) {
	  if (err) throw err;

	  // object of all the users
    console.log(books);
	  res.send("HELLO");
	});
});


module.exports = router;
/*
models.findAll().then(function(surveys){

    res.status(200)
    .json({
      status: 'success',
      data: surveys

    });

  }).catch(function(error){

  });
*/
