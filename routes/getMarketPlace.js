var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var models = require('../models/marketplaceModel')

router.use( bodyParser.json() );

router.get('/', function(req, res, next) {
  if (req.session.user === null) { res.redirect('../')}

	models.find({}, function(err, books) {
	  if (err) throw err;
    console.log(books);
	  res.send(books);
	});
});


module.exports = router;
