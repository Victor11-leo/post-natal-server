const mongoose = require('mongoose')

// Relationship; posts and sub-posts read, feedback given, questions done
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },    
    ageGroup:{
        type:String
    },
    location:{
        type:String
    },
    role:{
        type:String
    },
},{timestamps:true})

const User = mongoose.model("User",userSchema)

module.exports = User