
const TeerChampion = require('../Model/TeerChampion')


const getTeerChampion = async (req, res) => {

    try {
       
        const teerchampion = await TeerChampion.find()
       
        res.render("TeerChampion/ShowTeerChampion", {
            teerchampion
        })
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }
}

const addTeerChampion = async (req, res) => {

    try {
        res.render("TeerChampion/AddTeerChampion")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }
}


const createTeerChampion = async (req, res) => {
    try {      
        await TeerChampion.create(req.body.teerchampion)
        req.flash(
            'success_msg',
            'Added successfully'
        );
        res.redirect("/teerchampion")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }
}

const deleteTeerChampion = async (req, res) => {

    try {
        const deleteteerchampion = await TeerChampion.findById(req.params.teerchampion_id)
        if (!deleteteerchampion){
              req.flash(
                  'success_msg',
                  '  Not Found'
              );
              res.redirect("/")
        }
        deleteteerchampion.deleteOne()
         req.flash(
             'success_msg',
             ' delete successfully'
         );
        res.redirect("/teerchampion")
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
    createTeerChampion,
    getTeerChampion,
    addTeerChampion,
    deleteTeerChampion
}