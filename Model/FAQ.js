const mongoose = require('mongoose')
const FAQChampionSchema = mongoose.Schema({
    qustion: String,
    answer: String
})
module.exports = mongoose.model('FAQ', FAQChampionSchema)
