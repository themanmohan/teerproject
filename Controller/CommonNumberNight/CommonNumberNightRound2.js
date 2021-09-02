const NightRound2 = require('../../Model/CommonNumberNight/CommonNumberNightRound2')
const NightRound1 = require('../../Model/CommonNumberNight/CommonNumberNightRound1')

const getNightRound2 = async (req, res) => {
    try {
        const nightround1 = await NightRound1.find()
        const nightround2 = await NightRound2.find()
        res.render("CommonNumberNight/ShowCommonNumberNight", {
            nightround1,
            nightround2
        })
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }
}

//@desc      getting feedback 
//@route     GET/feedback
//@access    public
const addNightRound2 = async (req, res) => {
    try {
        res.render("CommonNumberNight/AddNightRound2")
    } catch (error) {
         req.flash(
             'error_msg',
             error.message
         );
         res.redirect("/")
    }
}



//@desc      creating feedback 
//@route     POST/feedback
//@access    public
const createNightRound2 = async (req, res) => {
    try {
       
        await NightRound2.create(req.body.nightround2)
         req.flash(
             'success_msg',
             ' Added successfully'
         );
        res.redirect("/commonnumbernightround2")
    } catch (error) {
         req.flash(
             'error_msg',
             error.message
         );
         res.redirect("/")
    }
}

const deleteNightRound2 = async (req, res) => {

    try {
        const nightround2 = await NightRound2.findById(req.params.nightround2_id)
        if (!nightround2) {
            
             req.flash(
                 'success_msg',
                 'Night Result Round2 Not Found'
             );
           res.redirect("/")
        }
        nightround2.deleteOne()
        req.flash(
            'success_msg',
            'Night Result Round2  delete successfully'
        );
        res.redirect("/commonnumbernightround2")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        

    }
}


//exporting
module.exports = {
    getNightRound2,
    addNightRound2,
    createNightRound2,
    deleteNightRound2
}