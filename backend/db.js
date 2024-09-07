const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://alfreddsouza97:mongo1234@cluster0.dpymh6t.mongodb.net/demo6");


const todoSchema = mongoose.Schema({

    title: String,

    description: String,

    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);


module.exports = {

    todo: todo
}