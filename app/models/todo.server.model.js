'use strict';

var mongoose = require('mongoose');

// schema
var Todo = new mongoose.Schema({
    title: String,
    completed: Boolean
});

mongoose.model('Todo', Todo);
console.log('You made todo model');