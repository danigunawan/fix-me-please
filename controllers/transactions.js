const Transaction = require('../models/Transaction')
module.exports = {
  all: function(req, res) {
    Transaction.find(function (err, transactions) {
      if (err) {
        res.send({err: err})
      }
      res.status(200).json({
        message: "Success Read Transaction",
        data : transactions
      })

    })
  },
  create: function(req, res) {
    var transaction = new Transaction(req.body);
    transaction.save(function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.status(201).json({
        message: "Success Create Transaction",
        data : result
      })

    });
  },
  update: function(req, res) {
    Transaction.update({ _id: req.params.id }, {
      $set: req.body
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.status(200).json({
        message: "Success Update Transaction",
        data : result
      })
    });
  },
  delete: function(req, res) {
    Transaction.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.status(200).json({
        message: "Success Delete Transaction",
        data : result
      })
    });
  }
}
