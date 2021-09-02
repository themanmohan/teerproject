const express = require('express')
const EveningTeerResult = require('../../Controller/PreviousResults/EveningTeerResult')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../../middleware/auth")


router.get('/', EveningTeerResult.getEveningTeerResult)

router.post('/search', EveningTeerResult.getEveningSearchTeerResult)


router.get('/addeveningteerresult', isLoggedIn, authorize('admin'), EveningTeerResult.addEveningTeerResult)

router.post('/', isLoggedIn, authorize('admin'), EveningTeerResult.createEveningTeerResult)


router.delete('/:eveningteerresult_id/delete', isLoggedIn, authorize('admin'), EveningTeerResult.deleteEveningTeerResult)


module.exports = router