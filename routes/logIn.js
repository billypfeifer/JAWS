var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var models = require('../models/marketplaceModel')
var User = require('../models/userModel');

router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  var emailG = req.body.email;
  var passwordG = req.body.password;


  User.find({email: emailG}, function(error, user) {
    if (user) {
      if (user.password === passwordG) {
        req.session.user = emailG;
        res.redirect('/home');
      }
      else {
        res.send({error: 'Password not correct.'});
      }
    }
    else {
      res.send({error: 'Email not correct.'});
    }
  });

 // res.render('index', { title: 'Express' });
});


module.exports = router;
