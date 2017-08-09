var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//user schema
var userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  booksOnSale: [{bookID: String}],
  booksSold: [{bookID: String}],
  offersMade: [{bookID: String, offerAmount: Number, status: String}]
});

//user model
var User = mongoose.model('User', userSchema);

var lex = new User();
console.log(lex);
lex.save();

User.findOne({ 'name' :'lexs' }, function(err, user) {
  console.log(err);
  console.log(user);
  console.log('here')
  if (!user) {


    lex.name = 'lexs';

    lex.save(function(err, updatedOG) {
				if (err) { console.log(err); }
			});
  }
});


//export
module.exports = User;
