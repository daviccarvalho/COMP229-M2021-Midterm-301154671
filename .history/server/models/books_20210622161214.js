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
