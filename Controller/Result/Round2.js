    const RoundResult = require('../../Model/Result/Round2')



    const addRound2Result = async (req, res) => {

        try {
            res.render("Result/Round2/AddResultRound2")
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
    const createResultRound2 = async (req, res) => {

        try {

            await RoundResult.create(req.body.resultround2)
            
            req.flash(
                'success_msg',
                'add successfully'
            );
            res.redirect("/")
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
    const EditResultRound2 = async (req, res) => {

        try {
            const resultround2 = await RoundResult.findById(req.params.resultround2_id)

            res.render("Result/Round2/EditResultRound2", {
                resultround2
            })
        } catch (error) {
            res.status(200).json({
                message: error.message
            })
             res.redirect("/")
        }
    }

    const UpdateResultRound2 = async (req, res) => {

        try {
            const rrr = await RoundResult.findByIdAndUpdate(req.params.resultround2_id, req.body.resultround2)
            console.log(rrr)
            res.redirect("/")
        } catch (error) {
           req.flash(
               'error_msg',
               error.message
           );
           res.redirect("/")
        }
    }


    const deleteResultRound2 = async (req, res) => {

        try {
            const resultround2 = await RoundResult.findById(req.params.resultround2_id)
            if (!resultround2) {
                 req.flash(
                     'error_msg',
                     '  Not Found'
                 );
                 res.redirect("/")
            }
            resultround2.deleteOne()
            res.redirect("/")
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

        addRound2Result,
        createResultRound2,
        EditResultRound2,
        UpdateResultRound2,
        deleteResultRound2
    }