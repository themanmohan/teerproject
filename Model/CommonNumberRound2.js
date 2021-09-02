const mongoose = require('mongoose')
const Round2Schema =new mongoose.Schema({
    Date:String,
    Direct: String,
    House: String,
    Ending: String,
})

module.exports = mongoose.model('Round2', Round2Schema)