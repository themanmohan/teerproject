const NoonResult = require('../../Model/Result/NoonResult')



const addNoonResult = async (req, res) => {

    try {
        res.render("Result/AddNoonResult")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}



const createNoonResult = async (req, res) => {
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
       const createNoonresult=  await NoonResult.create(data)
      
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


const deleteNoonResult = async (req, res) => {

    try {
        const noonresult = await NoonResult.findById(req.params.noonresult_id)
        if (!noonresult) {
             req.flash(
                 'error_msg',
                 '  Not Found'
             );
             res.redirect("/")
        }
        noonresult.deleteOne()
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
    addNoonResult,
    createNoonResult,
    deleteNoonResult
}