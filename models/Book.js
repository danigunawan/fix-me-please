var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: { type: Number, default: 0}
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book
