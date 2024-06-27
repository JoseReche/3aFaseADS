const express = require('express')

const TaskApi = require('../api/task')
const router = express.Router()

router.put('/:id', TaskApi.updateTask)
router.post('/', TaskApi.createTask)
router.get('/', TaskApi.findTasks)
router.delete('/:id', TaskApi.deleteTask)
router.get('/:id_projeto', TaskApi.filterTask)

module.exports = router