const express = require('express')
const Round2 = require('../Controller/CommonNumberRound2')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../middleware/auth")


router.get('/', Round2.getRound2)

router.post('/', isLoggedIn, authorize('admin'), Round2.createRound2)


router.get('/addround2', isLoggedIn, authorize('admin'), Round2.addRound2)


router.delete('/:round2_id/delete', isLoggedIn, authorize('admin'), Round2.deleteRound2)

module.exports = router