var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var TodoModel = mongoose.model('Todo');

/* SELECT todos. */
router.get('/', function(req, res, next) {
    console.log('You are in todos get router!');
    return TodoModel.find(function(err, todos) {
        if(!err) {
            return res.send(todos);
        } else {
            return console.log(err);
        }
    });
});

/* INSERT todos. */
router.post('/', function(req, res, next) {
    console.log('You are in todos post router!');
    var todo = new TodoModel({
        title: req.body.title,
        completed: req.body.completed
    });
    todo.save(function(err) {
        if(!err) {
            return console.log('saved');
        } else {
            return console.log(err);
        }
    });
    return res.send(todo);
});

/* SELECT todo */
router.get('/:id', function(req, res, next) {
    console.log('You are in single todo get router!');
    return TodoModel.findById(req.params.id, function(err, todo) {
        if(!err) {
            return res.send(todo);
        } else {
            return console.log(err);
        }
    });
});

/* UPDATE todo*/
router.put('/:id', function(req, res, next) {
    console.log('You are in single todo post router!');
    return TodoModel.findById(req.params.id, function(err, todo) {
        todo.title = req.body.title,
        todo.completed = req.body.completed
        return todo.save(function(err) {
            if(!err) {
                console.log('todo updated');
            } else {
                console.log(err);
            }
            return res.send(todo);
        });
    });
});

/* DELETE todo*/
router.delete('/:id', function(req, res, next) {
    console.log('Delete todo with id' + req.params.id);
    return TodoModel.findById(req.params.id, function(err, todo) {
        return todo.remove(function(err) {
            if(!err) {
                console.log('Todo removed');
                return res.send('');
            } else {
                console.log(err);
            }
        });
    });
});

module.exports = router;
