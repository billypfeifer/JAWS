var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var models = require('../models/userModel')


router.use( bodyParser.json());

var accountinfoJSON;
router.get('/', function(req, res, next) {
	models.find({ 'name': 'lex' }, function(err, myaccount) {
 	  if (err) throw err;

	  // object of the user

	  accountinfoJSON=myaccount;
	  res.send(accountinfoJSON[0].booksSold);
	  console.log(myaccount);
	});

});

module.exports = router;
