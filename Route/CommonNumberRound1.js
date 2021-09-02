const express = require('express')
const Round1 = require('../Controller/CommonNumberRound1')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../middleware/auth")
router.get('/', Round1.getRound1)

router.post('/', isLoggedIn, authorize('admin'), Round1.createRound1)


router.get('/addround1', isLoggedIn, authorize('admin'), Round1.addRound1)


router.delete('/:round1_id/delete', isLoggedIn, authorize('admin'), Round1.deleteRound1)


module.exports = router