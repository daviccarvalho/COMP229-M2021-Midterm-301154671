/*
Web App Name: Favourite Book List
Student Name: Davi Cavalcante de Carvalho
Student id# 301154671
June 22, 2021
*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    title: String,
    author: String,
    published: Number,
    description: String,
    price: Number,    
    genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
