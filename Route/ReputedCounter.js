const express = require('express')
const ReputedCounter = require('../Controller/ReputedCounter')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../middleware/auth")


router.get('/', ReputedCounter.getReputedCounter)


router.get('/addreputedcounter', isLoggedIn, authorize('admin'), ReputedCounter.addReputedCounter)

router.post('/', isLoggedIn, authorize('admin'), ReputedCounter.createReputedCounter)


router.delete('/:reputedcounter_id/delete', isLoggedIn, authorize('admin'), ReputedCounter.deleteReputedCounter)

//exporting
module.exports = router