var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var models = require('../models/marketplaceModel')
var books = require('google-books-search');

router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  var query = req.body.bookQuery;
  books.search('Hamlet', function(error, results) {
    if ( ! error ) {
      res.send(results)
      } else {
      }
  });

 // res.render('index', { title: 'Express' });
});


module.exports = router;
