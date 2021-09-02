const express = require('express')
const NoonTeerResult = require('../../Controller/PreviousResults/NoonTeerResult')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../../middleware/auth")


router.get('/', NoonTeerResult.getNoonTeerResult)

router.post('/search', NoonTeerResult.getNoonSearchTeerResult)


router.get('/addnoonteerresult', isLoggedIn, authorize('admin'), NoonTeerResult.addNoonTeerResult)

router.post('/', isLoggedIn, authorize('admin'), NoonTeerResult.createNoonTeerResult)



router.delete('/:noonteerresult_id/delete', isLoggedIn, authorize('admin'), NoonTeerResult.deleteNoonTeerResult)


module.exports = router

