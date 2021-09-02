const express = require('express')
const NightRound2 = require('../../Controller/CommonNumberNight/CommonNumberNightRound2')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../../middleware/auth")

router.post('/', isLoggedIn, authorize('admin'), NightRound2.createNightRound2)


router.get('/', NightRound2.getNightRound2)


router.get('/addnightround2', isLoggedIn, authorize('admin'), NightRound2.addNightRound2)


router.delete('/:nightround2_id/delete', isLoggedIn, authorize('admin'), NightRound2.deleteNightRound2)


module.exports = router