const mongoose = require('mongoose')
const morningTeerResultSchema = mongoose.Schema({
    city: String,
    date: String,
    firstround:String,
    secondround:String
})
module.exports = mongoose.model('morningteerresult', morningTeerResultSchema)
