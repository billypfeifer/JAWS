var express = require('express');
var router = express.Router();
var User = require('../models/userModel');


router.post('/', function(req, res, next) {
  var emailG = req.body.email;
  var passwordG = req.body.password;
  var nameG = req.body.name;

  User.find({email: emailG}, function(error, user) {
    console.log("error: " + error);
    console.log(user)

    var userData = new User({
      email: emailG,
      name: nameG,
      password: passwordG
    });
    userData.save();
    req.session.user = emailG;
    console.log(req.session.user)
    res.send({})
  });
});

module.exports = router;
