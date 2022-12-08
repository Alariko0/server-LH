// CRUD
const router = require('express').Router()
//const validateToken = require('../middleware/validateToken.midleware')

const { getAll, getOne, postCreate, putUpdate, deleteTodo

} = require('../controller/todoList.controller')

// GET

router.get('/', getAll)
router.get('/:id', getOne)

// POST

router.post('/create', postCreate)

// PUT

router.put('/:update', putUpdate)

// DELETE

router.delete('/:delete', deleteTodo)

module.exports = router