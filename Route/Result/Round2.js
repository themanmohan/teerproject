const express = require('express')
const ResultRound2 = require('../../Controller/Result/Round2')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../../middleware/auth")




router.get('/addresultround2', isLoggedIn, authorize('admin'), ResultRound2.addRound2Result)

router.post('/', isLoggedIn, authorize('admin'), ResultRound2.createResultRound2)


router.get('/:resultround2_id/edit', isLoggedIn, authorize('admin'), ResultRound2.EditResultRound2)


router.put('/:resultround2_id', isLoggedIn, authorize('admin'), ResultRound2.UpdateResultRound2)


router.delete('/:resultround2_id/delete', ResultRound2.deleteResultRound2)


module.exports = router