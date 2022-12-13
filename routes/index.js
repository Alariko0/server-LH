//const validateToken = require("../middleware/validateToken.midleware")

module.exports = (app) => {
    app.use("/home", require("./auth.routes"))
    app.use("/todolist", require("./todoList.routes")) // recordar poner validateToken
}




