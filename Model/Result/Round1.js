const mongoose = require('mongoose')
const round1ResultSchema = mongoose.Schema({
    time: String,
    result: Number,
})
module.exports = mongoose.model('round1result', round1ResultSchema)
