var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book
