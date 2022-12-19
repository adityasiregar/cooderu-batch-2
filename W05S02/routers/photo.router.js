const express = require('express')
const router = express.Router()
const {verify} = require('../middlewares/auth')

const {createPhoto} = 
    require('../controllers/photo.controller')

router.post('/create', verify, createPhoto);

module.exports = router ;