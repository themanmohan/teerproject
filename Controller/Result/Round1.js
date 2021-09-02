    const RoundResult = require('../../Model/Result/Round1')



    const addRound1Result = async (req, res) => {

        try {
            res.render("Result/Round1/AddResultRound1")
        } catch (error) {
           req.flash(
               'error_msg',
               error.message
           );
           res.redirect("/")
        }
    }


 
    const createResultRound1 = async (req, res) => {

        try {
            
             await RoundResult.create(req.body.resultround1)
            
            req.flash(
                'success_msg',
                ' Add successfully'
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

       
         const EditResultRound1 = async (req, res) => {

             try {
                 const resultround1 = await RoundResult.findById(req.params.resultround1_id)
               
                 res.render("Result/Round1/EditResultRound1", {
                     resultround1
                 })
             } catch (error) {
               req.flash(
                   'error_msg',
                   error.message
               );
               res.redirect("/")
             }
         }

        const UpdateResultRound1 = async (req, res) => {

            try {
              const rrr=  await RoundResult.findByIdAndUpdate(req.params.resultround1_id, req.body.resultround1)
              console.log(rrr)  
              res.redirect("/")
            } catch (error) {
                res.status(200).json({
                    message: error.message
                })
            }
        }


    const deleteResultRound1 = async (req, res) => {

        try {
            const resultround1 = await RoundResult.findById(req.params.resultround1_id)
            if (!resultround1) {
                 req.flash(
                     'error_msg',
                     '  Not Found'
                 );
                 res.redirect("/")
            }
            resultround1.deleteOne()
             req.flash(
                 'success_msg',
                 ' Deleted Suucessfully'
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

    //exporting
    module.exports = {
     
        addRound1Result, 
        createResultRound1,
        EditResultRound1,
        UpdateResultRound1,
        deleteResultRound1
    }