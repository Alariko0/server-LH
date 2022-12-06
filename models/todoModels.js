const mongoose = require('mongoose')
const ToDoSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    completed: {
        type: Boolean,
    }
})
const ToDoModels = mongoose.model('ToDo', ToDoSchema)

module.exports = ToDoModels