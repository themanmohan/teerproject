const MoriningResult = require('../../Model/Result/MorningResult')



const addMorningResult = async (req, res) => {

    try {
        res.render("Result/AddMorningResult")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}



const createMoriningResult = async (req, res) => {
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
       const createmorningresult=  await MoriningResult.create(data)
      
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


const deleteMorningResult = async (req, res) => {

    try {
        const morningresult = await MoriningResult.findById(req.params.morningreslt_id)
        if (!morningresult) {
             req.flash(
                 'error_msg',
                 '  Not Found'
             );
             res.redirect("/")
        }
        morningresult.deleteOne()
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
    addMorningResult,
    createMoriningResult,
    deleteMorningResult
}