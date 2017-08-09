var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema
var soldSchema = new Schema({
  bookID: String,
  title: String,
  authors: [String],
  image: String,
  descriptionGoogle: String,
  descriptionUser: String,
  sellerEmail: String,
  buyerEmail: String,
  finalPrice: String,
  offers: [{email: String, offerAmount: Number}]
});

//sold schema
var Sold = mongoose.model('Sold', soldSchema);


var book3 = new Sold({
  bookID: '3',
  title: 'book 3',
  authors: ['a7', 'a242'],
  image: 'image3',
  descriptionGoogle: 'gD3',
  descriptionUser: 'uD3',
  sellerEmail: 'emailC',
  buyerEmail: 'buyerem',
  finalPrice: 2000,
  offers: [{email: 'emailD', offerAmount: 800}]
})

book3.save();

var book4 = new Sold({
  bookID: '4',
  title: 'book 4',
  authors: ['a444', 'a242ew'],
  image: 'image4',
  descriptionGoogle: 'gD4',
  descriptionUser: 'uD4',
  sellerEmail: 'emailC',
  buyerEmail: 'buyerem',
  finalPrice: 42000,
  offers: [{email: 'email4', offerAmount: 09093200}]
})

book4.save();

//export schema
module.exports = Sold;
