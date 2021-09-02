const express = require('express')
const MorningRound2 = require('../../Controller/CommonNumberMorning/CommonNumberMorningRound2')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../../middleware/auth")


router.post('/', isLoggedIn, authorize('admin'), MorningRound2.createMorningRound2)


router.get('/', MorningRound2.getMorningRound2)


router.get('/addmorninground2', isLoggedIn, authorize('admin'), MorningRound2.addMorningRound2)


router.delete('/:morninground2_id/delete', isLoggedIn, authorize('admin'), MorningRound2.deleteMorningRound2)


module.exports = router