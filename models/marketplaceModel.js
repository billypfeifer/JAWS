var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema
var marketplaceSchema = new Schema({
  bookID: String,
  title: String,
  authors: [String],
  image: String,
  descriptionGoogle: String,
  descriptionUser: String,
  sellerEmail: String,
  offers: [{email: String, offerAmount: Number}]
});

//marketplace schema
var Marketplace = mongoose.model('Marketplace', marketplaceSchema);



var book1 = new Marketplace({
  bookID: '1',
  title: 'book 1',
  authors: ['a1', 'a2'],
  image: 'image1',
  descriptionGoogle: 'gD1',
  descriptionUser: 'uD1',
  sellerEmail: 'emailA',
  offers: [{email: 'emailB', offerAmount: 200}]
})

book1.save()


var book2 = new Marketplace({
  bookID: '2',
  title: 'book 2',
  authors: ['a3', 'a4'],
  image: 'image2',
  descriptionGoogle: 'gD2',
  descriptionUser: 'uD2',
  sellerEmail: 'emailB',
  offers: [{email: 'emailC', offerAmount: 500}]
})

book2.save()





//export schema
module.exports = Marketplace;
