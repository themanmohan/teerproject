const TeerChampion = require('../Model/TeerChampion')


const getTeerChampion = async (req, res) => {

    try {

        const teerchampion = await TeerChampion.find()
        res.render("Analytics/ShowAnalytics", {
            teerchampion
        })
    } catch (error) {
        res.status(200).json({
            message: error.message
        })
    }
}

//exporting
module.exports = {
   
    getTeerChampion,
  
}