var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema
var soldSchema = new Schema({
  bookID: String,
  title: String,
  author: String,
  image: String,
  description: String,
  amazonID: String,
  sellerEmail: String,
  buyerEmail: String,
  finalPrice: String,
  offers: [{email: String, offerAmount: Number}]
});

//sold schema
var Sold = mongoose.model('Sold', marketplaceSchema);

//export schema
module.exports = Sold;
