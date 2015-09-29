'use strict';

// connect with mongoDB
var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/todo_backbone_database';

mongoose.connect(dbURI,  function(err) {
    if(!err) {
        console.error('Connect to MongoDB!');
    } else {
        console.error('Could not connect to MongoDB!');
    }
});

// mongoose.connect(dbURI);

// mongoose.connection.on('connected', function() {
// 	console.error('Connect to MongoDB!');
// });

// mongoose.connection.on('error', function() {
// 	console.error('Could not connect to MongoDB!');
// });

// mongoose.connection.on('disconnected', function() {
// 	console.error('Disconnect to MongoDB!');
// });

// process.on('SIGINIT', function() {
// 	mongoose.connection.close(function() {
// 		console.log('Application process is going down!');
// 		process.exit(0);
// 	});
// });