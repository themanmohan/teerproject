const DreamNumber = require('../Model/DreamNumber')

const getDreamNumber = async (req, res) => {

    try {
       
        res.render("DreamNumber/DreamNumber")
    } catch (error) {
        res.status(200).json({
            message: error.message
        })
    }
}

//exporting
module.exports = {
    getDreamNumber
}