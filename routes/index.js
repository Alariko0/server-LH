const { application } = require('express')
const express = require('express')
const isLoggedIn = require('../middleware/isLoggedIn')
const router = express.Router()

// router.post('/login', require('./auth.routes'))

app.use('/todos', isLoggedIn, require('./todoList.routes'))


module.exports = router