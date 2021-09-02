const Round2 = require('../Model/CommonNumberRound2')
const Round1 = require('../Model/CommonNumberRound1')

const getRound1 = async (req, res) => {
    try {
        const round1 = await Round1.find()
        const round2 = await Round2.find()
        res.render("CommonNumber/ShowCommonNumber",{round1,round2})
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}


const addRound1 = async (req, res) => {
    try {
        res.render("CommonNumber/AddRound1")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }
}




const createRound1 = async (req, res) => {
    try {
      
         await Round1.create(req.body.round1)
         req.flash(
             'success_msg',
             ' Added successfully'
         );
        res.redirect("/commonnumberround1")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}

  const deleteRound1 = async (req, res) => {

      try {
          const round1 = await Round1.findById(req.params.round1_id)
          if (!round1) {
               req.flash(
                   'success_msg',
                   '  Not Found'
               );
               res.redirect("/")
          }
          round1.deleteOne()
           req.flash(
               'success_msg',
               ' delete successfully'
           );
          res.redirect("/commonnumberround1")
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
    getRound1,
    createRound1,
    addRound1,
    deleteRound1
}