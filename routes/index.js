const express = require('express')
const isLoggedIn = require('../middleware/isLoggedIn')
const router = express.Router()

// router.post('/login', require('./auth.routes'))

router.get('/todos', isLoggedIn, require('./readTodos.routes'))
router.post('/todos', isLoggedIn, require('./createTodos.routes'))

module.exports = router