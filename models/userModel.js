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
lex.email = 'alexis@email.com';
lex.password = 'pass';
lex.save();


//export
module.exports = User;
