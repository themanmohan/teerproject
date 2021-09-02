const mongoose = require('mongoose')
const Round1Schema =new mongoose.Schema({
       Date:String,
       Direct: String,
       House: String,
       Ending: String,   
})

module.exports = mongoose.model('Round1', Round1Schema)


