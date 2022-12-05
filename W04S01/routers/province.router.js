const express = require('express')
const router = express.Router()

const { getAllProvince, getProvinceByID, createProvince} = require('../controllers/province.contoller')

router.get('/', getAllProvince)

router.get('/:id', getProvinceByID);
  
router.post('/', createProvince);

module.exports = router
