const express = require('express')

const ProjectApi = require('../api/project')
const router = express.Router()

router.put('/:id', ProjectApi.updateProject)
router.post('/', ProjectApi.createProject)
router.get('/', ProjectApi.findProjects)
router.delete('/:id', ProjectApi.deleteProject)

module.exports = router