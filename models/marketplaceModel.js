var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema
var marketplaceSchema = new Schema({
  bookID: String,
  title: String,
  author: String,
  image: String,
  description: String,
  amazonID: String,
  sellerEmail: String,
  offers: [{email: String, offerAmount: Number}]
});

//marketplace schema
var Marketplace = mongoose.model('Marketplace', marketplaceSchema);

//export schema
module.exports = Marketplace;
