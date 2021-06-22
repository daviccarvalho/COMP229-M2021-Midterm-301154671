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
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
