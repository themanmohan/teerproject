const mongoose = require('mongoose')
const NightRound2Schema = new mongoose.Schema({
    Date: String,
    Direct: String,
    House: String,
    Ending: String,
})

module.exports = mongoose.model('NightRound2', NightRound2Schema)
