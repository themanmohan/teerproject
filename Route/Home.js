const express = require('express')
const router = express.Router()
const MoriningResult = require('../Model/Result/MorningResult')
const NoonResult = require('../Model/Result/NoonResult')
const EveningResult = require('../Model/Result/EveningResult')
 const Announcement = require('../Model/Announcement')
     const RoundResult1 = require('../Model/Result/Round1')
 const RoundResult2 = require('../Model/Result/Round2')
router.get('/', async (req, res) => {
    const round1result = await RoundResult1.find()
    const round2result = await RoundResult2.find()
    const announcement = await Announcement.find()
    const morningresult=await MoriningResult.find()
    const noonresult=await NoonResult.find()
    const eveningresult=await EveningResult.find()
    try {
       
        res.render('Home', {
            announcement,
            round1result,
            round2result,
            morningresult,
            noonresult,
            eveningresult
        })
    } catch (err) {
        req.flash(
            'error_msg',
            err.message
        );
        res.redirect("/")
    }
})

router.get('/previousresult', async (req, res) => {
    try {
        res.render('PreviewsResult/PreviousResult')
    } catch (err) {
        req.flash(
            'error_msg',
            err.message
        );
        res.redirect("/")
    }
})



//exporting
module.exports = router