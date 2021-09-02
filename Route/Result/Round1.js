const express = require('express')
const ResultRound1 = require('../../Controller/Result/Round1')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../../middleware/auth")



//@desc      create FAQ 
//@route     GET/faq/addfaq
//@access    private(admin)
router.get('/addresultround1', isLoggedIn, authorize('admin'), ResultRound1.addRound1Result)
//@desc      CREATE FAQ 
//@route     POST/faq
//@access    private(admin)
router.post('/', isLoggedIn, authorize('admin'), ResultRound1.createResultRound1)

//@desc      delete FAQ 
//@route     DELETE/faq/:faq_id/delete
//@access    private
router.get('/:resultround1_id/edit', isLoggedIn, authorize('admin'), ResultRound1.EditResultRound1)

//@desc      delete FAQ 
//@route     DELETE/faq/:faq_id/delete
//@access    private
router.put('/:resultround1_id', isLoggedIn, authorize('admin'), ResultRound1.UpdateResultRound1)

//@desc      delete FAQ 
//@route     DELETE/faq/:faq_id/delete
//@access    private
router.delete('/:resultround1_id/delete', isLoggedIn, authorize('admin'), ResultRound1.deleteResultRound1)


//exporting
module.exports = router