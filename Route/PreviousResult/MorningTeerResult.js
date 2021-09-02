const express = require('express')
const MorningTeerResult = require('../../Controller/PreviousResults/MorningTeerResult')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../../middleware/auth")


router.get('/', MorningTeerResult.getMorningTeerResult)

router.post('/search', MorningTeerResult.getMorningSearchTeerResult)


router.get('/addmorningteerresult', isLoggedIn, authorize('admin'), MorningTeerResult.addMorningTeerResult)

router.post('/', isLoggedIn, authorize('admin'), MorningTeerResult.createMorningTeerResult)


router.delete('/:morningteerresult_id/delete', isLoggedIn, authorize('admin'), MorningTeerResult.deleteMorningTeerResult)


module.exports = router