const express = require('express')
const DreamNumber = require('../Controller/DreamNumber')
const router = express.Router()

router.get('/', DreamNumber.getDreamNumber)
//exporting
module.exports = router