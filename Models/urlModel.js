let mongoose = require('mongoose');



let Schema = new mongoose.Schema({
    orgUrl : {
        type : String,
        required : true,
        unique : true
    },
    shortID : {
        type : String,
        required : true,
        unique : true
    }
},{
    timestamps : true,
    collection : 'urlshort'
})

let urlModel = mongoose.model('urlshort', Schema)



module.exports = urlModel;