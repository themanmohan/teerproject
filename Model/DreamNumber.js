const mongoose = require('mongoose')
const dreamNumberSchema = mongoose.Schema({
    Dream: String,
    Direct: String,
    House: String,
    Ending: String
})
const dreamNumber = mongoose.model('dreamnumber', dreamNumberSchema)

module.exports = dreamNumber