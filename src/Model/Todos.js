const mongoose = require('mongoose');

const newTodo = new mongoose.Schema({
    Activity:{type:String,require:true},
    Status:{type:String,default:"pending"},
    Time_taken:String
})

const TodoModel = mongoose.model('todos',newTodo);

module.exports = TodoModel;