const mongoose = require('mongoose')
const round2ResultSchema = mongoose.Schema({
    time: String,
    result: Number,
})
module.exports = mongoose.model('round2result', round2ResultSchema)
