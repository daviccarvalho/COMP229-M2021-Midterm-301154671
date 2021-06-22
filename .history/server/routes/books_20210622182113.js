/*
Web App Name: Favourite Book List
Student Name: Davi Cavalcante de Carvalho
Student id# 301154671
June 22, 2021
*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let Book = require('../models/books');

//Display details page
router.get('/details', (req, res, next) => {
  Book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {title: 'Books', Books: books});
    }
    //To organize in alphabetical order
  }).sort({title: 1, author: 1});;
});

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  Book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {title: 'Books', Books: books});
    }
    //To organize in alphabetical order
  }).sort({title: 1, author: 1});;
});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
    res.render('books/add', {title: 'Add Book'});
});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

  let newBook = Book({
    "title": req.body.title,
    "author": req.body.author,
    "published": req.body.published,
    "description": req.body.description,
    "price": req.body.price,
    "genre": req.body.genre
  });

Book.create(newBook, (err, Book) =>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        // refresh the book list
        res.redirect('/books');
    }
});

});

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', (req, res, next) => {

  let id = req.params.id;

  Book.findById(id, (err, bookToEdit) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          //show the edit view
          res.render('books/edit', {title: 'Edit Book', book: bookToEdit})
      }
  });
});

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', (req, res, next) => {

  let id = req.params.id;

  let updatedBook = Book({
      "_id": id,
      "title": req.body.title,
      "author": req.body.author,
      "published": req.body.published,
      "description": req.body.description,
      "price": req.body.price,
      "genre": req.body.genre
  });

  Book.updateOne({_id: id}, updatedBook, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          // refresh the book list
          res.redirect('/books');
      }
  });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

  let id = req.params.id;

  Book.remove({_id: id}, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
           // refresh the book list
           res.redirect('/books');
      }
  });
});

module.exports = router;
