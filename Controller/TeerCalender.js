    const TeerCalender = require('../Model/TeerCalender')


    const getTeerCalender = async (req, res) => {

        try {

            const teercalender = await TeerCalender.find()
            res.render("TeerCalender/ShowCalender", {
                teercalender
            })
        } catch (error) {
            req.flash(
                'error_msg',
                error.message
            );
            res.redirect("/")
        }
    }

    const addTeerCalender = async (req, res) => {
        try {
            res.render("TeerCalender/AddCalender")
        } catch (error) {
           req.flash(
               'error_msg',
               error.message
           );
           res.redirect("/")
        }
    }


 
    const createTeerCalender = async (req, res) => {

        try {
            
            await TeerCalender.create(req.body.teercalender)
            
            req.flash(
                'success_msg',
                'FAQ created successfully'
            );
            res.redirect("/teercalender")
        } catch (error) {
            req.flash(
                'error_msg',
                error.message
            );
            res.redirect("/")
        }
    }

    const deleteTeerCalender = async (req, res) => {

        try {
            const foundteercalender = await TeerCalender.findById(req.params.teercalender_id)
            if (!foundteercalender) {
                 req.flash(
                     'success_msg',
                     '  Not Found'
                 );
                 res.redirect("/")
            }
            foundteercalender.deleteOne()
             req.flash(
                 'success_msg',
                 ' delete successfully'
             );
            res.redirect("/teercalender")
        } catch (error) {
             req.flash(
                 'error_msg',
                 error.message
             );
             res.redirect("/")

        }
    }

    //exporting
    module.exports = {
        createTeerCalender,
        getTeerCalender,
        addTeerCalender,
        deleteTeerCalender
    }