const express = require('express')
const MorningResult = require('../../Controller/Result/MorningResult')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../../middleware/auth")




router.get('/addmorningresult',isLoggedIn,authorize('admin'),  MorningResult.addMorningResult,)

router.post('/',isLoggedIn,authorize('admin'), MorningResult.createMoriningResult)


router.delete('/:morningreslt_id/delete',isLoggedIn,authorize('admin'),  MorningResult.deleteMorningResult)



module.exports = router