'use strict';

// connect with mongoDB
var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/todo_backbone_require_database';

mongoose.connect(dbURI,  function(err) {
    if(!err) {
        console.error('Connect to MongoDB!');
    } else {
        console.error('Could not connect to MongoDB!');
    }
});
