const express = require('express')
const router = express.Router()
const province = require('./province.router')
const regency = require('./regencies.controller')

const todo = require('./todo.router')
const user = require('./user.router')

router.use('/province', province)
router.use('/regency', regency)
router.use('/todo', todo)
router.use('/user', user)

module.exports = router