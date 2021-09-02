const mongoose = require('mongoose')
const noonResultSchema = mongoose.Schema({
    round1:{
        result:{
            type:String
        },
        time:{
            type:String
        }
    },
    round2:{
        result:{
            type:String
        },
        time:{
            type:String
        }
    }
})
module.exports = mongoose.model('noonresult', noonResultSchema)

