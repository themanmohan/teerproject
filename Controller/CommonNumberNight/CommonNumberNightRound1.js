const NightRound2 = require('../../Model/CommonNumberNight/CommonNumberNightRound2')
const NightRound1 = require('../../Model/CommonNumberNight/CommonNumberNightRound1')


const getNightRound1 = async (req, res) => {
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
    }
}


const addNightRound1 = async (req, res) => {
    try {
        res.render("CommonNumberNight/AddNightRound1")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
    }
}




const createNightRound1 = async (req, res) => {
    try {
        console.log(req.body.nightround1)
        await NightRound1.create(req.body.nightround1)
        req.flash(
            'success_msg',
            'Night Result Round1created successfully'
        );
        res.redirect("/commonnumbernightround1")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
    }
}

const deleteNightRound1 = async (req, res) => {

    try {
        const nightround1 = await NightRound1.findById(req.params.nightround1_id)
        if (!nightround1) {
            req.flash(
                'success_msg',
                'Night Result Round1 Not Found'
            );
            res.redirect("/")
        }
        nightround1.deleteOne()
         req.flash(
             'success_msg',
             'deleted successfully'
         );
        res.redirect("/commonnumbernightround1")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );

    }
}


//exporting
module.exports = {
    getNightRound1,
    addNightRound1,
    createNightRound1,
    deleteNightRound1
}