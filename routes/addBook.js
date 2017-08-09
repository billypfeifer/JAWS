var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var Book = require('../models/marketplaceModel')

router.use(bodyParser.json());

router.post('/', function(req, res, next) {
  if (req.session.user === null) { res.redirect('../')}
  //title, authors: array, descriptionGoogle, descriptionUser, id, img
  //email
  var title = req.body.title;
  var authors = req.body.authors;
  var descriptionGoogle = req.body.descriptionGoogle;
  var descriptionUser = req.body.descriptionUser;
  var bookID = req.body.bookID + req.session.user;
  var image = req.body.image;
  var email = req.session.user;

  var insertingBook = new Book({
    bookID: bookID,
    title: title,
    author: authors,
    image: image,
    descriptionGoogle: descriptionGoogle,
    descriptionUser: descriptionUser,
    sellerEmail: email,
  });
  insertingBook.save();
  res.send(JSON.parse(insertingBook));
});

module.exports = router;
