const express = require('express')
const Analytics = require('../Controller/Analytics')
const router = express.Router()



//@desc      creating feedback 
//@route     POST/feedback
//@access    public
router.get('/', Analytics.getTeerChampion)


//exporting
module.exports = router