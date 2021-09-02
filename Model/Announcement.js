const mongoose = require('mongoose')
const announcementChampionSchema = mongoose.Schema({
    text: String
})
module.exports = mongoose.model('announcement', announcementChampionSchema)
