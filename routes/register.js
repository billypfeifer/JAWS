var express = require('express');
var router = express.Router();
var User = require('../models/userModel');


router.get('/', function(req, res, next) {
  var emailG = req.body.email;
  var passwordG = req.body.password;
  var nameG = req.body.name;

  User.find({email: emailG}, function(error, user) {
    if (user) {
      res.send({error: 'Email already registered'});
    }
    else {
      var userData = new User({
        email: emailG,
        name: nameG,
        password: passwordG
      });
      userData.save();
      req.session.user = emailG;
      res.redirect('/home')
    }
  });


module.exports = router;
