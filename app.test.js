const express = require('express');
const app = express();
const cors = require('cors')
var bodyParser = require('body-parser');




var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
var books = require('./routes/books');
var transactions = require('./routes/transactions');

app.use('/books', books);
app.use('/transactions', transactions);

module.exports = app;
