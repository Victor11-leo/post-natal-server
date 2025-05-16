const mongoose = require('mongoose')

const subPostSchema = mongoose.Schema({
    article:{
        type:String,        
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,        
    },
    content:{
        type:String,
        required:true
    },
    status:{
        type:String
    },    
},{timestamps:true})

const SubPost = mongoose.model("SubPost",subPostSchema)

module.exports = SubPost