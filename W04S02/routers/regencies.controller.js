const router = require('express').Router()
const regencies = require('../controllers/regencies.controller')

router.post('/', regencies.create)
router.put('/:id', regencies.update)
router.delete('/:id', regencies.delete)
router.get('/:id', regencies.getById)
router.get('/', regencies.getAll)

module.exports = router