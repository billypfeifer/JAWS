var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var Marketplace = require('../models/marketplaceModel')
var User = require('../models/userModel')

router.use(bodyParser.json());

router.post('/', function(req, res, next) {
  if (req.session.user == null) { res.redirect('../'); }


  var offerer = req.session.user;
  var amount = req.body.amount;
  var bookID = req.body.bookID;

  Marketplace.find({bookID: bookID}, function(err, book) {
    book.offers.push({
      email: offerer,
      offerAmount: amount
    });

    book.save();

  })

  User.find({email: offerer}, function(error, user) {
    user.offersMade.push({
      book: bookID,
      offerAmount: amount,
      status: "pending"
    })
  });
});

module.exports = router;
