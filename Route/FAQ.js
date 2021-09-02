const express = require('express')
const FAQ = require('../Controller/FAQ')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../middleware/auth")


router.get('/', FAQ.getFAQ)


router.get('/addfaq', isLoggedIn, authorize('admin'), FAQ.addFAQ)

router.post('/', isLoggedIn, authorize('admin'), FAQ.createFAQ)

router.delete('/:faq_id/delete', isLoggedIn, authorize('admin'), FAQ.deleteFAQ)

//exporting
module.exports = router