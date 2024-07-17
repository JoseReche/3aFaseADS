const express = require('express')

const UserApi = require('../api/user')
const router = express.Router()

router.put('/', UserApi.updateUser)
router.get('/', UserApi.findUsers)
router.delete('/', UserApi.deleteUser)


router.post('/exit', UserApi.exitUser)

module.exports = router