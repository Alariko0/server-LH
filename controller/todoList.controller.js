const Todo = require("../models/todoModels");

const getAll = (req, res) => {
    Todo.find()
        .then((todo) => {
            console.log({ todo });
            res.json(todo);
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "no todo found", error: err.message })
        );
};


const getOne = (req, res) => {
    Todo.findById(req.params.id)
        .then((todo) => {
            console.log({})
            res.json(todo)
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "no todo found", error: err.message })
        )
}

const postCreate = (req, res) => {
    const {
        name,
        tasks
    } = req.body
    console.log(req.body)
    Todo.create({ name, tasks })
        .then((data) => {
            console.log({ data });
            res.json({ message: "todo added successfully", data });
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({
                message: "unable to add new todo",
                error: err.message,
            })

        }

        );
};

const putUpdate = (req, res) => {
    //  console.log("id: ", req.params.id);
    //  console.log("body: ", req.body);
    console.log("------> este ", req.params)
    Todo.findByIdAndUpdate(req.params.update, req.body)
        .then((todo) => {
            console.log("edit", { todo });
            return res.json({ message: "updated successfully", todo });
        })
        .catch((err) =>
            res
                .status(400)
                .json({ error: "unable to update todo", message: err.message })
        );
};
const deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.delete).then((data) =>
        res
            .json({ message: "todo deleted successfully", data })

    ).catch((err) => {
        res
            .status(404)
            .json({ error: "book not found", message: err.message })
    }
    )
}

module.exports = { getAll, getOne, postCreate, putUpdate, deleteTodo }




//------------------------------


