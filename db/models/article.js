const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    status:{
        type:String
    },    
},{timestamps:true})

const Article = mongoose.model("Article",articleSchema)

module.exports = Article