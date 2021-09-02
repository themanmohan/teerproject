const express = require('express')
const EveningResult = require('../../Controller/Result/EveningResult')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../../middleware/auth")




router.get('/addeveningresult',isLoggedIn,authorize('admin'),  EveningResult.addEveningResult)

router.post('/',isLoggedIn,authorize('admin'), EveningResult.createEveningResult)


router.delete('/:eveningresult_id/delete',isLoggedIn,authorize('admin'),  EveningResult.deleteEveningResult)



module.exports = router