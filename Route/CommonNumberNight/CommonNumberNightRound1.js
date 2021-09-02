const express = require('express')
const NightRound1 = require('../../Controller/CommonNumberNight/CommonNumberNightRound1')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../../middleware/auth")


router.post('/', isLoggedIn, authorize('admin'), NightRound1.createNightRound1)


router.get('/', NightRound1.getNightRound1)


router.get('/addnightround1', isLoggedIn, authorize('admin'), NightRound1.addNightRound1)


router.delete('/:nightround1_id/delete', isLoggedIn, authorize('admin'), NightRound1.deleteNightRound1)


module.exports = router