var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var Marketplace = require('../models/marketplaceModel')
var Sold = require('../models/soldModel')

router.use(bodyParser.json());

router.post('/', function(req, res, next) {
  if (req.session.user === null) { res.redirect('../') }

  var bookID = req.body.bookID
  var email = req.session.user;
  var amount = req.body.amount;
  var offerer = req.body.offerer;

  Marketplace.find({bookID : bookID }, function(err, book) {

    book.remove(function(err) {
      if (err) throw err;
    });

    book.buyerEmail = offerer;
    book.finalPrice = amount;

    var sold = new Sold( {
      bookID: book.bookID,
      title: book.title,
      authors: book.authors,
      image: book.image,
      descriptionGoogle: book.descriptionGoogle,
      descriptionUser: book.descriptionUser,
      sellerEmail: book.sellerEmail,
      buyerEmail: book.buyerEmail,
      finalPrice: book.finalPrice,
      offers: book.offers
    });

    sold.save();
    res.send({status: "success"});
  });
})

module.exports = router;
