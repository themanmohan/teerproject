const express = require('express')
const NoonResult = require('../../Controller/Result/NoonResult')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../../middleware/auth")




router.get('/addnoonresult',isLoggedIn,authorize('admin'),  NoonResult.addNoonResult,)

router.post('/',isLoggedIn,authorize('admin'), NoonResult.createNoonResult)


router.delete('/:noonresult_id/delete',isLoggedIn,authorize('admin'),  NoonResult.deleteNoonResult)



module.exports = router