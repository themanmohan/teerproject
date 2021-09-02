const express = require('express')
const MorningRound1 = require('../../Controller/CommonNumberMorning/CommonNumberMorningRound1')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../../middleware/auth")


router.post('/', isLoggedIn, authorize('admin'), MorningRound1.createMorningRound1)


router.get('/', MorningRound1.getMorningRound1)


router.get('/addmorninground1', isLoggedIn, authorize('admin'), MorningRound1.addMorningRound1)


router.delete('/:morninground1_id/delete', isLoggedIn, authorize('admin'), MorningRound1.deleteMorningRound1)


module.exports = router