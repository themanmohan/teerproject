const mongoose = require('mongoose')
const eveningTeerResultSchema = mongoose.Schema({
    city: String,
    date: String,
    firstround: String,
    secondround: String
})
module.exports = mongoose.model('eveningteerresult', eveningTeerResultSchema)
