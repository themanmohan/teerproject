const mongoose = require('mongoose')
const NightRound1Schema = new mongoose.Schema({
    Date: String,
    Direct: String,
    House: String,
    Ending: String,
})

module.exports = mongoose.model('NightRound1', NightRound1Schema)
