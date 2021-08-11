const mongoose = require('mongoose');

const {Schema} =mongoose;
const todoList = new Schema({
    work: {
        type: String,
        required:true
    },
    category:{
          type:String,
          required:true
    }
});
const Todo = mongoose.model('todo_s',todoList);
module.exports= Todo;