const MorningRound2 = require('../../Model/CommonNumberMorning/CommonNumberMorningRound2')
const MorningRound1 = require('../../Model/CommonNumberMorning/CommonNumberMorningRound1')


const getMorningRound1 = async (req, res) => {
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


const addMorningRound1 = async (req, res) => {
    try {
        res.render("CommonNumberMorning/AddMorningRound1")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
    }
}




const createMorningRound1 = async (req, res) => {
    try {
       
        await MorningRound1.create(req.body.morninground1)
        req.flash(
            'success_msg',
            'created successfully'
        );
        res.redirect("/commonnumbermorninground1")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
    }
}

const deleteMorningRound1 = async (req, res) => {

    try {
        const morninground1 = await MorningRound1.findById(req.params.morninground1_id)
        if (!morninground1) {
            req.flash(
                'success_msg',
                'Round1 Not Found'
            );
            res.redirect("/")
        }
        morninground1.deleteOne()
         req.flash(
             'success_msg',
             'deleted successfully'
         );
        res.redirect("/commonnumbermorninground1")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );

    }
}


//exporting
module.exports = {
    getMorningRound1,
    addMorningRound1,
    createMorningRound1,
    deleteMorningRound1
}