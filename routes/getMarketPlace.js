var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var models = require('../models/userModel')

router.use( bodyParser.json() );

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
