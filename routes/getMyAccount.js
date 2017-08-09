var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var models = require('./models.marketplaceModel')

router.post('/getmyAccount', function(req, res, next) {
	models.find({ username: '' }, function(err, myaccount) {
 	  if (err) throw err;
	  // object of the user
	  console.log(myaccount);
	});
});

module.exports = router;
