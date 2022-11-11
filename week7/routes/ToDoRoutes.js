const { Router } = require('express');
const { getToDo,updateToDo, deleteToDo, createToDo } = require('../controller/ToDoController');


const router = Router()

router.get('/', getToDo)
router.post('/save', createToDo)
router.put('/:id', updateToDo)
router.delete('/:id', deleteToDo)

module.exports = router;