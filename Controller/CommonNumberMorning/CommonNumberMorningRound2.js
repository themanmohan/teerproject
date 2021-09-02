const MorningRound2 = require('../../Model/CommonNumberMorning/CommonNumberMorningRound2')
const MorningRound1 = require('../../Model/CommonNumberMorning/CommonNumberMorningRound1')


const getMorningRound2 = async (req, res) => {
    try {
        const morninground1 = await MorningRound1.find()
        const morninground2 = await MorningRound2.find()
        res.render("CommonNumberMorning/ShowCommonNumberMorning", {
            morninground1,
            morninground2
        })
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
    }
}


const addMorningRound2 = async (req, res) => {
    try {
        res.render("CommonNumberMorning/AddMorningRound2")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
    }
}




const createMorningRound2 = async (req, res) => {
    try {
       
        await MorningRound2.create(req.body.morninground2)
        req.flash(
            'success_msg',
            'created successfully'
        );
        res.redirect("/commonnumbermorninground2")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
    }
}

const deleteMorningRound2 = async (req, res) => {

    try {
        const morninground2 = await MorningRound2.findById(req.params.morninground2_id)
        if (!morninground2) {
            req.flash(
                'success_msg',
                'Night Result Round1 Not Found'
            );
            res.redirect("/")
        }
        morninground2.deleteOne()
         req.flash(
             'success_msg',
             'deleted successfully'
         );
        res.redirect("/commonnumbermorninground2")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );

    }
}


//exporting
module.exports = {
    getMorningRound2,
    addMorningRound2,
    createMorningRound2,
    deleteMorningRound2
}