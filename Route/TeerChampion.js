const express = require('express')
const TeerChampion = require('../Controller/TeerChampion')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../middleware/auth")

router.get('/', TeerChampion.getTeerChampion)
router.get('/addteerchampion', isLoggedIn, authorize('admin'), TeerChampion.addTeerChampion)




router.post('/', isLoggedIn, authorize('admin'), TeerChampion.createTeerChampion)


router.delete('/:teerchampion_id/delete', isLoggedIn, authorize('admin'), TeerChampion.deleteTeerChampion)


module.exports = router