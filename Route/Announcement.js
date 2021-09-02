const express = require('express')
const Announcement = require('../Controller/Announcement')
const router = express.Router()
const {
    authorize,
    isLoggedIn
} = require("../middleware/auth")



router.get('/addnnouncement', isLoggedIn, authorize('admin'), Announcement.addAnnouncement)

router.post('/', isLoggedIn, authorize('admin'), Announcement.createAnnoucement)


router.get('/:announcement_id/edit', isLoggedIn, authorize('admin'), Announcement.EditAnnoucement)


router.put('/:announcement_id', isLoggedIn, authorize('admin'), Announcement.UpdateAnnoucement)


router.delete('/:annoucement_id/delete', isLoggedIn, authorize('admin'), Announcement.deleteAnnoucement)


module.exports = router