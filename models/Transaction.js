var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Book = require('./Book');

var transactionSchema = new Schema({
  memberid: String,
  days: { type: Number, default: 0},
  date: { type: Date, default: Date.now },
  price: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

transactionSchema.pre('save', function(next) {
  // do stuff
  let books = this.booklist;
  for (var i = 0; i < books.length; i++) {
    Book.findOne({_id: books[i]},(err,data) => {
      let currentStock = data.stock - 1;
      Book.update({_id:data._id},{$set:{ stock: currentStock }},(err,data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
      })
    })
  }
  next();
});

transactionSchema.pre('remove', { query: true, doc: true }, function(next) {
  for (var i = 0; i < books.length; i++) {
    Book.findOne({_id: books[i]},(err,data) => {
      let currentStock = data.stock + 1;
      Book.update({_id:data._id},{$set:{ stock: currentStock }},(err,data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
      })
    })
  }
  next();
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
