const express = require('express')
const TeerCalender = require('../Controller/TeerCalender')

const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../middleware/auth")

router.get('/', TeerCalender.getTeerCalender)


router.get('/addcalender', isLoggedIn, authorize('admin'), TeerCalender.addTeerCalender)

router.post('/', isLoggedIn, authorize('admin'), TeerCalender.createTeerCalender)


router.delete('/:teercalender_id/delete', isLoggedIn, authorize('admin'), TeerCalender.deleteTeerCalender)


module.exports = router