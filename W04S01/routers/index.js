const express = require('express')
const router = express.Router()
const province = require('./province.router')
const todo = require('./todo.router')

router.use('/province', province)
router.use('/todo', todo)

module.exports = router