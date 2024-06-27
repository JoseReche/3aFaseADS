const express = require('express')

const UserApi = require('../api/user')
const router = express.Router()

router.put('/:id', UserApi.updateUser)
router.get('/', UserApi.findUsers)
router.delete('/', UserApi.deleteUser)

module.exports = router