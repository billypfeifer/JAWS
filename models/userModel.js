var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//user schema
var userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  booksOnSale: [String],
  booksSold: [String],
  offersMade: [{book: String, offerAmount: Number, status: String}]
});

//user model
var User = mongoose.model('User', userSchema);


// var alexis = new User(
//   {
//     email: 'emailA',
//     name: 'Alexis',
//     password: 'pass',
//     booksOnSale: ['1', '2'],
//     booksSold: ['3', '4'],
//     offersMade: [{book: '3', offerAmount: 10, satus: 'pending'}]
//   }
// )
//
// alexis.save();


//export
module.exports = User;
