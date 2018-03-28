const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app.test.js');

chai.use(chaiHttp);

var idBooks;
describe('Crud Books', () => {
  describe('Read Books',() => {
    it('Should Display All Books', function(done) {
      expect('hello').to.be.a('string');
      chai.request(app)
        .get('/books')
        .end(function(err, res) {
           expect(res).to.have.status(200);
           expect(res).to.be.json;
           expect(res.body).to.have.property('message');
           expect(res.body.message).to.equal('Success Read Books');
           expect(res.body).to.have.property('data');
           expect(res.body.data).to.be.a('array');
           done();
        })
    })
  })
  describe('Create Books',() => {
    it('Should Create New Book', function(done) {
      chai.request(app)
        .post('/books')
        .send({ isbn: '123123', title: 'Judul', Author: 'haidar', category: 'komik', stock: 100 })
        .end(function(err, res) {
           expect(res).to.have.status(201);
           expect(res).to.be.json;
           expect(res.body).to.have.property('message');
           expect(res.body.message).to.equal('Success Create Book');
           expect(res.body).to.have.property('data');
           idBooks = res.body.data._id;
           done();
        })
    })
  })

  describe('Update Books',function() {
    it('Should Update an Books', function(done) {
      chai.request(app)
        .put(`/books/${idBooks}`)
        .send({ title: 'Judul Baru', author: 'hehehe' })
        .end(function(err, res) {
           expect(res).to.have.status(200);
           expect(res).to.be.json;
           expect(res.body).to.have.property('message');
           expect(res.body.message).to.equal('Success Update Book');
           expect(res.body).to.have.property('data');
           done();
        })
    })
  })
  describe('Delete Books',function() {
    it('Should Delete an Books', function(done) {
      chai.request(app)
        .del(`/books/${idBooks}`)
        .end(function(err, res) {
           expect(res).to.have.status(200);
           expect(res).to.be.json;
           expect(res.body).to.have.property('message');
           expect(res.body.message).to.equal('Success Delete Book');
           expect(res.body).to.have.property('data');
           done();
        })
    })
  })
})

var idTransaction;
describe('Crud Transaction', () => {
  describe('Read Transaction',() => {
    it('Should Display All Transaction', function(done) {
      expect('hello').to.be.a('string');
      chai.request(app)
        .get('/transactions')
        .end(function(err, res) {
           expect(res).to.have.status(200);
           expect(res).to.be.json;
           expect(res.body).to.have.property('message');
           expect(res.body.message).to.equal('Success Read Transaction');
           expect(res.body).to.have.property('data');
           expect(res.body.data).to.be.a('array');
           done();
        })
    })
  })
  describe('Create Transaction',() => {
    it('Should Create New Book', function(done) {
      chai.request(app)
        .post('/transactions')
        .send({memberid: 'haha', days: 2, price: 1000})
        .end(function(err, res) {
           expect(res).to.have.status(201);
           expect(res).to.be.json;
           expect(res.body).to.have.property('message');
           expect(res.body.message).to.equal('Success Create Transaction');
           expect(res.body).to.have.property('data');
           idTransaction = res.body.data._id;
           done();
        })
    })
  })

  describe('Update Transaction',function() {
    it('Should Update an Transaction', function(done) {
      chai.request(app)
        .put(`/transactions/${idTransaction}`)
        .send({memberid: 'hehe', days: 2, price: 1000})
        .end(function(err, res) {
           expect(res).to.have.status(200);
           expect(res).to.be.json;
           expect(res.body).to.have.property('message');
           expect(res.body.message).to.equal('Success Update Transaction');
           expect(res.body).to.have.property('data');
           done();
        })
    })
  })
  describe('Delete Transaction',function() {
    it('Should Delete an Transaction', function(done) {
      chai.request(app)
        .del(`/transactions/${idTransaction}`)
        .end(function(err, res) {
           expect(res).to.have.status(200);
           expect(res).to.be.json;
           expect(res.body).to.have.property('message');
           expect(res.body.message).to.equal('Success Delete Transaction');
           expect(res.body).to.have.property('data');
           done();
        })
    })
  })
})
