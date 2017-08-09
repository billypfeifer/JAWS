var express = require('express');
var router = express.Router();

router.post('/getMarketPlace', function(req, res, next) {
 // res.render('index', { title: 'Express' });
});

module.exports = router;

var bodyParser = require('body-parser')
var models = require('./models.marketplaceModel')
router.use( bodyParser.json() );

router.get('/getmarketPlace', function(req, res, next) {

	models.find({}, function(err, books) {
	  if (err) throw err;

	  // object of all the users
	  res.send(books);
	  console.log(books);
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
>>>>>>> be8c8eeb335e79fcb457f0ac1a95331c5f6a3598
