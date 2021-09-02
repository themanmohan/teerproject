const mongoose = require('mongoose')
const MorningRound1Schema = new mongoose.Schema({
    Date: String,
    Direct: String,
    House: String,
    Ending: String,
})

module.exports = mongoose.model('morningRound1', MorningRound1Schema)
