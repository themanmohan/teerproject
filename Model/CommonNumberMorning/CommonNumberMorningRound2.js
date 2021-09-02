const mongoose = require('mongoose')
const MorningRound2Schema = new mongoose.Schema({
    Date: String,
    Direct: String,
    House: String,
    Ending: String,
})

module.exports = mongoose.model('morningRound2', MorningRound2Schema)
