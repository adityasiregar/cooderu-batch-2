const express = require('express')
const router = express.Router()
const province = require('./province.router')

router.use('/province', province)

module.exports = router