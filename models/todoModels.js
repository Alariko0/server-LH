const mongoose = require('mongoose')
const ToDoSchema = new mongoose.Schema({
    name: { type: String },
    tasks: {
        room: {
            electrician: {
                job: { type: String },
                completed: { type: Boolean }
            },
            plumber: {
                job: { type: String },
                completed: { type: Boolean }
            },
            constructionWorker: {
                job: {
                    walls: {
                        task: { type: String },
                        completed: { type: Boolean }
                    },
                    floor: {
                        task: { type: String },
                        completed: { type: Boolean }
                    },
                    ceiling: {
                        task: { type: String },
                        completed: { type: Boolean }
                    },
                    completed: { type: Boolean }
                },
                completed: { type: Boolean }
            }
        }
    },
    completed: {
        type: Boolean,
        default: false
    }

},
    {
        timestamps: true,
        versionKey: false
    }
)

const ToDoModels = mongoose.model('ToDo', ToDoSchema)

module.exports = ToDoModels