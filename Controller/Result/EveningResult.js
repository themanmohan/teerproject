const EveningResult = require('../../Model/Result/EveningResult')



const addEveningResult = async (req, res) => {

    try {
        res.render("Result/AddEveningResult")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}



const createEveningResult = async (req, res) => {
    try {
        
        data={
            round1:{
                result:req.body.round1result,
                time:req.body.round1time,
            },
            round2:{
                result:req.body.round2result,
                time:req.body.round2time,
            }
        }
       await EveningResult.create(data)
      
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


const deleteEveningResult = async (req, res) => {

    try {
        const eveningresult = await EveningResult.findById(req.params.eveningresult_id)
        if (!eveningresult) {
             req.flash(
                 'error_msg',
                 '  Not Found'
             );
             res.redirect("/")
        }
        eveningresult.deleteOne()
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
    addEveningResult,
    createEveningResult,
    deleteEveningResult
}