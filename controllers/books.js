const Book = require('../models/Book')

module.exports = {
  all: function(req, res) {
    Book.find(function (err, books) {
      if (err) {
        res.send({err: err})
      }
      res.status(200).json({
        message: "Success Read Books",
        data : books
      })
    })
  },
  create: function(req, res) {
    console.log(req.body)
    var book = new Book(req.body);
    book.save(function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.status(201).json({
        message: "Success Create Book",
        data : result
      })
    });
  },
  update: function(req, res) {
    Book.update({ _id: req.params.id }, {
      $set: req.body
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.status(200).json({
        message: "Success Update Book",
        data : result
      })
    });
  },
  destroy: function(req, res) {
    Book.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.status(200).json({
        message: "Success Delete Book",
        data : result
      })
    });
  }
}
