var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var User = require('../models/userModel')
var Marketplace = require('../models/marketplaceModel')
var Sold = require('../models/soldModel')


router.use( bodyParser.json());

var accountinfoJSON;

router.get('/', function(req, res, next) {
	if (req.session.user === null) { res.redirect('../')}

	User.find({ 'email': req.session.user }, function(err, user) {
 	  if (err) { res.send({ error: 'not found' }); }

		if (!user) {
			res.send({ error: 'not found' });
		}
		console.log(user);
		Marketplace.find({sellerEmail: req.session.user}, function(err, books) {
			user.booksOnSale = books;

			Sold.find({sellerEmail : req.session.user}, function(err, sold) {
				user.booksSold = sold;
				console.log(user)
				res.send(user);
			})
		})
	});

});

module.exports = router;
