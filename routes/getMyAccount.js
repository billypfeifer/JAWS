var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var models = require('./models.marketplaceModel')

router.post('/getmyAccount', function(req, res, next) {
 // res.render('index', { title: 'Express' });
});

module.exports = router;
