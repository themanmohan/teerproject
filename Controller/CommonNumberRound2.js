
const Round2 = require('../Model/CommonNumberRound2')
const Round1 = require('../Model/CommonNumberRound1')

const getRound2 = async (req, res) => {
    try {

        const round2 = await Round2.find()
          const round1 = await Round1.find()
         res.render("CommonNumber/ShowCommonNumber", {
             round2,
             round1
         })
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }
}


const addRound2 = async (req, res) => {
    try {
        res.render("CommonNumber/AddRound2")
    } catch (error) {
         req.flash(
             'error_msg',
             error.message
         );
         res.redirect("/")
    }
}



const createRound2 = async (req, res) => {
    try {
       
        await Round2.create(req.body.round2)
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

  const deleteRound2 = async (req, res) => {

      try {
          const round2 = await Round2.findById(req.params.round2_id)
          if (!round2) {
               req.flash(
                   'success_msg',
                   '  Not Found'
               );
               res.redirect("/")
          }
          round2.deleteOne()
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
    addRound2,
    getRound2,
    createRound2,
    deleteRound2
}