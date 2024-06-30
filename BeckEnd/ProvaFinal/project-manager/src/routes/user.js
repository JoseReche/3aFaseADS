const express = require('express')

const UserApi = require('../api/user')
const router = express.Router()

router.put('/:id', UserApi.updateUser)
router.get('/', UserApi.findUsers)
router.delete('/', UserApi.deleteUser)


router.put('/', UserApi.exitUser)

module.exports = router